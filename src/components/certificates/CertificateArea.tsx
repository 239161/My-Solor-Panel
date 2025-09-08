

import React from 'react';
import Image from 'next/image';
import BlogSidebar from '../blog/BlogSidebar';

import certificate1 from "@/assets/images/certificates/1.jpg";
import certificate2 from "@/assets/images/certificates/2.jpg";
import certificate3 from "@/assets/images/certificates/3.jpg";
import certificate4 from "@/assets/images/certificates/4.jpg";
import certificate5 from "@/assets/images/certificates/5.jpg";
import certificate6 from "@/assets/images/certificates/6.jpg";


import blog_thumb_2 from "@/assets/images/resource/blog-details.png";


const blog_details_content = {
  author: "Endith Smith",
  date: "Aug 1, 2023", 
  title: "Energy Department Research Will Help Eagles Coexist with Wind Energy Deployment",
  sm_des_1: "ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dotore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dotoreg fugiat nullaariatur. Excepteur sint occaecat cupidatat non proident, sunt",
  sm_des_2: "ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dotore magna aliqua. Ut enim ad minim veniam",
  feature_list: [
    "Enhance your home's app",
    "More functional and simple",
    "Post Format Audio Blogs",
    "A Beautiful Sunday Morning",
    "In Mattis Scelerisque Magna",
    "Bibendum Sed Libero",
    "Pellentesque Mauris Nunc",
  ],
  title_2: "Energy Department Research Will Help Eagles",
  sm_des_3: "ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dotore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dotoreg fugiat nullaariatur. Excepteur sint occaecat cupidatat non proident, sunt",
  quote: "ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dotore magna aliqua. Ut enim ad minim veniam",

}

const { author, date, title, sm_des_1, sm_des_2, feature_list, title_2, sm_des_3, quote } = blog_details_content

const CertificateArea= () => {
  return (
    <>
      <div className="blog-section style-three">
        <div className="container">
          <div className="row">
           <div className="col-lg-4 col-md-4">
              <div className="blog-items-box style-two">
                <div className="blog-thumb style-two">
              <Image src={certificate1} style={{height: "auto"}} alt="image-title" />
               </div>
              </div>
          </div>

         <div className="col-lg-4 col-md-4">
              <div className="blog-items-box style-two">
                <div className="blog-thumb style-two">
              <Image src={certificate2} style={{height: "auto"}} alt="image-title" />
               </div>
              </div>
          </div>

           <div className="col-lg-4 col-md-4">
              <div className="blog-items-box style-two">
                <div className="blog-thumb style-two">
              <Image src={certificate3} style={{height: "auto"}} alt="image-title" />
               </div>
              </div>
          </div>

           <div className="col-lg-4 col-md-4">
              <div className="blog-items-box style-two">
                <div className="blog-thumb style-two">
              <Image src={certificate4} style={{height: "auto"}} alt="image-title" />
               </div>
              </div>
          </div>

           <div className="col-lg-4 col-md-4">
              <div className="blog-items-box style-two">
                <div className="blog-thumb style-two">
              <Image src={certificate5} style={{height: "auto"}} alt="image-title" />
               </div>
              </div>
          </div>


           <div className="col-lg-4 col-md-4">
              <div className="blog-items-box style-two">
                <div className="blog-thumb style-two">
              <Image src={certificate6} style={{height: "auto"}} alt="image-title" />
               </div>
              </div>
          </div>





      </div>
      </div>
     </div> 

    </>
  );
};

export default CertificateArea;