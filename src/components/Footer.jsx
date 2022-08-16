import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h3 className='w-full text-3xl font-bold text-[#00df9a]'>LocalSEOKit.</h3>
            <p className='py-4'>Rank and grow locally with Local SEO Kit.</p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <FaFacebookSquare size={30}/>
                <FaInstagram size={30}/>
                <FaTwitterSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaDribbbleSquare size={30}/>
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-2'>
            <div>
                <h6 className='font-medium text-gray-400'>SEO Tools</h6>
                <ul className='my-4'>
                    <Link to='/suggestions'><li className='py-2 text-sm'>Blog Suggestions</li></Link>
                    <Link to='/image-geotag'><li className='py-2 text-sm'>Image Geotagging</li></Link>
                    <Link to='/meta-generator'><li className='py-2 text-sm'>Meta Descriptions</li></Link>
                    <Link to='/audit'><li className='py-2 text-sm'>SEO Audit</li></Link>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul className='my-4'>
                    <Link to='/pricing-plans'><li className='py-2 text-sm'>Pricing</li></Link>
                    <li className='py-2 text-sm'>Docs</li>
                    <li className='py-2 text-sm'>Guides</li>
                    <li className='py-2 text-sm'>API Status</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul className='my-4'>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Careers</li>
                    <li className='py-2 text-sm'>Blog</li>
                    <li className='py-2 text-sm'>Press</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul className='my-4'>
                    <li className='py-2 text-sm'>Claim</li>
                    <li className='py-2 text-sm'>Policy</li>
                    <li className='py-2 text-sm'>Terms</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer