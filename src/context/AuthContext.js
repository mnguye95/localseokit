import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase";
import { db } from "../firebase";
import {
  doc,
  updateDoc,
  collection,
  query,
  where,
  onSnapshot,
  addDoc
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";


const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    id: "",
    uid: "",
    details: {
      name: "",
      phone: "",
      company: "",
      website: "",
    },
    services: {
      audit: {
        limit: 15,
        uses: 0,
      },
      descriptions: {
        limit: 15,
        uses: 0,
      },
      suggestions: {
        limit: 15,
        uses: 0,
      },
      images: {
        limit: 50,
        uses: 0,
      },
    },
  });

  const createUser = (email, password, info) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      async (userCredential) => {
        sendVerification(userCredential.user);
        try {
          let newUser = {
            uid: userCredential.user.uid,
            services: {
              audit: {
                uses: 0,
                limit: 15,
              },
              descriptions: {
                uses: 0,
                limit: 15,
              },
              suggestions: {
                uses: 0,
                limit: 15,
              },
              images: {
                uses: 0,
                limit: 50,
              },
            },
            details: info,
          };
          const docRef = await addDoc(collection(db, "usage"), newUser);
          console.log("Document written with ID: ", docRef.id);
          setDetails({...newUser, id: docRef.id});
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    );
  };

  const sendVerification = (user) => {
    return sendEmailVerification(user);
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const updateUsage = async (service) => {
    await updateDoc(doc(db, "usage", details.id), {
      ...details,
      services: {
        ...details.services,
        [service]: {
          uses: details.services[service].uses + 1,
          limit: details.services[service].limit,
        },
      },
    }).finally(() => console.log(details));
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).then(
      (UserCredentials) => {
        const q = query(
          collection(db, "usage"),
          where("uid", "==", UserCredentials.user.uid)
        );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          let limit = [];
          querySnapshot.forEach((doc) => {
            limit.push({ ...doc.data(), id: doc.id });
          });
          setDetails(limit[0]);
        });
        return () => unsubscribe();
      }
    );
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser)
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{
        createUser,
        details,
        user,
        logOut,
        logIn,
        forgotPassword,
        sendVerification,
        updateUsage,
        navigate,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
