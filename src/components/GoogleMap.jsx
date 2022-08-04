import React from "react";

const GoogleMap = (props) => {
  return (
    <img
      className={props.className}
      src={`https://maps.googleapis.com/maps/api/staticmap?center=${props.lat},${props.lng}&zoom=10&scale=2&size=600x300&maptype=roadmap&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&format=jpg&&markers=size:mid%7Ccolor:0xff0000%7Clabel:%7C${props.name}`}
      alt={`Google Map of ${props.name}`}
    />
  );
};

export default GoogleMap;
