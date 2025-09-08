'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

//test git 

import HeaderLogoTwo from "@/assets/images/logo2.png";

import HeaderLogo from "@/assets/images/logo.png";
import NavMenu from './Menu/NavMenu';
import { TeamSocialLinks } from '@/components/common/SocialLinks';
import UseSticky from '@/hooks/UseSticky';
import MobileMeneu from './Menu/MobileMeneu';
import SearchPopup from '@/components/common/SearchPopup';


const HeaderOne = ({ style }: any) => {

  const { sticky } = UseSticky()
  const [searchPopup, setSearchPopup] = useState<boolean>(false); 

  return (
    <>

      <div className="solar-topbar-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="solar-top-menu">
                <ul style={{display:"flex", alignItems:"center", listStyle:"none", margin:"0", padding:"0"}}>
  <li style={{display:"flex", alignItems:"center", whiteSpace:"nowrap", marginRight:"20px", paddingRight:"20px", borderRight:"1px solid #444"}}>
    <a href="#" style={{display:"flex", alignItems:"center", textDecoration:"none", color:"#fff"}}>
      <i className="bi bi-geo-alt" style={{marginRight:"8px", color:"red"}}></i>
      Main road mandi chowk Vikasnagar Dehradun Uttarakhand 248198
    </a>
  </li>

  <li style={{display:"flex", alignItems:"center", whiteSpace:"nowrap", marginRight:"20px", paddingRight:"20px", borderRight:"1px solid #444"}}>
    <a href="#" style={{display:"flex", alignItems:"center", textDecoration:"none", color:"#fff"}}>
      <i className="bi bi-telephone" style={{marginRight:"8px", color:"red"}}></i>
      +91-8006666632
    </a>
  </li>

  <li style={{display:"flex", alignItems:"center", whiteSpace:"nowrap"}}>
    <a href="#" style={{display:"flex", alignItems:"center", textDecoration:"none", color:"#fff"}}>
      <i className="bi bi-envelope" style={{marginRight:"8px", color:"red"}}></i>
      contactusskenterprises@gmail.com
    </a>
  </li>
</ul>


              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="solar-top-content-menu">
                
                <div className="solar-top-social-icon">
                  <ul>
                    <TeamSocialLinks />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className={`solar-header-section ${style ? 'style-two' : ''} ${sticky ? 'sticky-nav' : ''}`} id="sticky-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-6">
              <div className={`logo ${style ? 'style-two' : ''}`}>
                <Link href="/">
                  {style ? <Image src={HeaderLogoTwo} alt="logo" /> : <Image src={HeaderLogo} alt="logo" />}
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="solar-menu">
                <NavMenu />
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="solar-search-button">
                <div className="solar-social-menu">
                  <ul>
                    <li>
                      <a className="search-box-btn search-box-outer" style={{ cursor: 'pointer' }} onClick={() => setSearchPopup(true)}>
                        <i className="bi bi-search"></i>
                      </a>
                    </li>
                    
                  </ul>
                </div>
                <div className="solar-btn">
                  <Link href="/contact">Get A Quout <i className="bi bi-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <MobileMeneu /> 
      <SearchPopup searchPopup={searchPopup} setSearchPopup={setSearchPopup} />

    </>
  );
};

export default HeaderOne;