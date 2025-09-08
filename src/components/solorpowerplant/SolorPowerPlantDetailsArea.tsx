
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';



import project_details_img_1 from "@/assets/images/resource/project-details1.jpg";
import project_details_img_2 from "@/assets/images/resource/service3.png";
import SolorPanel from "@/assets/images/resource/WhytochooseSolar.png";
import OffGridSolor from "@/assets/images/resource/OFFGRIDsolor.png";
import onGridSolor from "@/assets/images/resource/ongridsolor.png";
import hybridSolor from "@/assets/images/resource/hybridsolor.png"
import SolorAdd from "@/assets/images/resource/soloradd.png";
import SolorPanelType from "@/assets/images/resource/solorpaneltype.png";

import { TeamSocialLinks } from '../common/SocialLinks';


interface DataType {
  title_1: string;
  sm_des: string;
  title_2: string;
  sm_info: string;
  feature: string[];
}


const project_content: DataType = {
  title_1: "Install  Solar Power Plant and",
  sm_des: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nul pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus e voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae",
  title_2: "client's goal",
  sm_info: "The result of employees, over 115 detailers and engineers, all coming together to solve probl before they arise. the teamwork it demonstrates both internally and externally is outstandingThe result of employees, over 115 detailers and engineers, all coming together to solve problem before they",
  feature: [
    "The triple pressures of more regulations outstanding in the creation.",
    "The legacy of the financial crisis has meant a few tricky years",
    "Now, the triple pressures of more regulations more regulations",
    "Outstanding in the creation he triple pressures of more regulations",
    "The triple pressures of more regulations outstanding in the creation",
  ]
}

const { title_1, sm_des, title_2, sm_info, feature } = project_content


const SolorRoofDetailsArea = () => {
  return (
    <>
        <br />
         <div className="container">
          <div className="row">
      <div className="col-lg-12">
              <div className="title">
                <center><h4 style={{fontSize:'40px'}}>{title_1} <span style={{color:'Red',fontSize:'40px',fontWeight:'20px'}}>Lacs will be save</span> Lacs will be save</h4></center>
              </div>
             
       </div>
       <center><div className="solar-btn" style={{ fontSize: '45px', fontFamily: "'Times New Roman', Times, serif" }}>
                 
                  <Link href="#">Initial investment = Subsidy Amount, EMI = Electricity Bill
Solar without any expense</Link>
        </div></center> 
        <br/>
          <center><div className="solar-btn" style={{ fontSize: '45px', fontFamily: "'Times New Roman', Times, serif" }}>
                 
                  <Link href="#">सोलर सिस्टम तीन प्रकार के होते है</Link>
        </div></center> 
          <br />
      
<Image src={SolorPanelType} style={{ height: "auto" }} alt="Service" />  <br /> <br /> <br />
      

         <center><br /><div className="solar-btn" style={{ fontSize: '45px', fontFamily: "'Times New Roman', Times, serif" }}>
                 
                  <Link href="#">OFFGRID सोलर सिस्टम काम कैसे करता है ?</Link> <br /> <br />
        </div></center>  
        <br />
  <br />
        <p>
       
ऑफग्रिड सोलर सिस्टम को stand alone सोलर सिस्टम भी कहा जाता है। ऑफ ग्रिड सोलर सिस्टम से दिन के समय सोलर पैनल की मदद से हमारे घर के सभी उपकरण चलते रहते है, और सोलर से बनने वाली एक्स्ट्रा बिजली से हमारी सोलर बैटरी चार्ज हो जाती है।
        </p>
        <Image src={OffGridSolor} style={{ height: "auto" }} alt="Service" />  <br /> <br /> <br />
         
         <p>इसके बाद शाम हो जाने पर जब सोलर पैनल बिजली बनाना बन्द कर देते है, तब हमारे घर के उपकरण चार्ज हो चुकी बैटरी से चलने लग जाते है। ग्राहक स्वयं कॉन्फ़िगर कर सकता है की सोलर बिजली समाप्त होने के बाद उसको सिस्टम बैटरी पर चलना है या ग्रिड बिजली पर। इस सिस्टम पर सरकार सब्सिडी नहीं देती</p>

<center><div className="solar-btn" style={{ fontSize: '45px', fontFamily: "'Times New Roman', Times, serif" }}>
                 
                  <Link href="#">ONGRID सोलर सिस्टम काम कैसे करता है ?</Link> <br /> <br />
        </div></center>  
        <br />
     <br />
     <p>ऑनग्रिड सोलर सिस्टम को ग्रिड टाई सोलर सिस्टम भी कहा जाता है। इसमे बैटरी का इस्तेमाल नहीं होता है, इसलिए बिजली जाने पर यह काम भी नहीं करता। जो बिजली ये बनता है वह घर पर ही उसी समय इस्तेमाल हो जाती है और बिजली बिल बच जाता है। अगर कभी हमारा सोलर पैनल ज्यादा पॉवर बना रहा है, और इससे बनने वाली पॉवर का हम घर में पूरी तरह से उपयोग नही कर पा रहे है, 
      तो इस समय एक्स्ट्रा बनने वाली बिजली पॉवर ग्रिड को चली जाती है।</p>

      <br />
      <Image src={onGridSolor} style={{ height: "auto" }} alt="Service" />  <br /> <br /> <br />
      <br />
      <p>
        <br />
        पॉवर ग्रिड को जाने वाली एक्स्ट्रा बिजली एक तरह से हम पॉवर कम्पनी को उधार दे देते है। इसके बाद जब कभी हमारा सोलर सिस्टम कम बिजली बनाता है, तब हम पॉवर ग्रिड को दी गयी इलेक्ट्रिसिटी का वापस से उपयोग कर सकते है। ये सोलर सिस्टम पावर कट होने के बाद ऑफ हो जाता है। जहां पावर कट कम होता है 
        वहां ऑनग्रिड सोलर सिस्टम लगाए जाते हैं। बिजली का आदान प्रदान नेट मीटर के माध्यम से होता है।
      </p>

      <center><div className="solar-btn" style={{ fontSize: '45px', fontFamily: "'Times New Roman', Times, serif" }}>
                 
                  <Link href="#">HYBRID सोलर सिस्टम काम कैसे करता है  ?</Link> <br /> 
        </div></center>  
        <p>
          <br />
          <center>हाइब्रिड सोलर सिस्टम में ऑन ग्रिड और ऑफ ग्रिड
दोनों सोलर सिस्टम के गुण होते हैं।</center>
        </p>
        <br />
          <Image src={hybridSolor} style={{ height: "auto" }} alt="Service" />  <br /> <br /> <br />  

          <br />
          <p> 
            <br />
           हाइब्रिड सोलर सिस्टम बिजली कट के समय ऑफ ग्रिड का और ज़्यादा सोलर बिजली पैदा होने की स्थिति में ऑन ग्रिड सिस्टम का काम करता है।
ये सिस्टम थोड़ा महंगा होता है
          </p>
          <br />
          <center><div className="solar-btn" style={{ fontSize: '45px', fontFamily: "'Times New Roman', Times, serif" }}>
                 
                  <Link href="#">PM Suryoday Yojana के अंतर्गत Subsidy ?</Link> <br /> 
        </div>
        <br /> <br />
        </center>  
          <table style={{ borderCollapse: 'collapse', width: '100%', textAlign: 'left' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #000', padding: '8px' }}>
            <b>Project Rating</b>
          </th>
          <th style={{ border: '1px solid #000', padding: '8px' }}>
            <b>Central Subsidy</b>
          </th>
          <th style={{ border: '1px solid #000', padding: '8px' }}>
            <b>UP State Subsidy</b>
          </th>
          <th style={{ border: '1px solid #000', padding: '8px' }}>
            <b>UK State Subsidy</b>
          </th>
          <th style={{ border: '1px solid #000', padding: '8px' }}>
            <b>Total Subsidy in UP</b>
          </th>
          <th style={{ border: '1px solid #000', padding: '8px' }}>
            <b>Total Subsidy in Uk</b>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ border: '1px solid #000', padding: '8px' }}>1kW On-Grid Solar Inverter</td>
          <td style={{ border: '1px solid #000', padding: '8px' }}>Rs 60,000.00 /-</td>
          <td style={{ border: '1px solid #000', padding: '8px' }}>Rs 60,000.00 /-</td>
           <td style={{ border: '1px solid #000', padding: '8px' }}>Rs 60,000.00 /-</td>
           <td style={{ border: '1px solid #000', padding: '8px' }}>Rs 60,000.00 /-</td>
            <td style={{ border: '1px solid #000', padding: '8px' }}>Rs 60,000.00 /-</td>


           
        </tr>
        <tr>
          <td style={{ border: '1px solid #000', padding: '8px' }}>2kW On-Grid Solar Inverter</td>  
          
          <td style={{ border: '1px solid #000', padding: '8px' }}>Rs 78,000.00 /-</td>
          <td style={{ border: '1px solid #000', padding: '8px' }}>Rs 78,000.00 /-</td>
          <td style={{ border: '1px solid #000', padding: '8px' }}>Rs 78,000.00 /-</td>
          <td style={{ border: '1px solid #000', padding: '8px' }}>Rs 78,000.00 /-</td>
          <td style={{ border: '1px solid #000', padding: '8px' }}>Rs 78,000.00 /-</td>
        </tr>
         <tr>
          <td style={{ border: '1px solid #000', padding: '8px' }}>3kW or above On-Grid Solar Inverter</td>
          <td style={{ border: '1px solid #000', padding: '8px' }}>Rs 30,000.00 /-</td>
          <td style={{ border: '1px solid #000', padding: '8px' }}>Rs 30,000.00 /-</td>
           <td style={{ border: '1px solid #000', padding: '8px' }}>Rs 30,000.00 /-</td>
          <td style={{ border: '1px solid #000', padding: '8px' }}>Rs 30,000.00 /-</td>
         <td style={{ border: '1px solid #000', padding: '8px' }}>Rs 30,000.00 /-</td>
        </tr>
    
      </tbody>
    </table>
         
       </div>
       </div>
     
      <div className="project-details-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="projetct-details-image">
                <Image src={project_details_img_1} style={{ height: "auto" }} alt="Service" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="info-area">
                <div className="sub-title">
                  <h5>information</h5>
                </div>
                <ul className="info">
                  <li>
                    <h6>project name:</h6>
                    <p>solar & exterior design</p>
                  </li>
                  <li>
                    <h6>client:</h6>
                    <p>theme pvt ltd</p>
                  </li>
                  <li>
                    <h6>category:</h6>
                    <p>commercial</p>
                  </li>
                  <li>
                    <h6>delivery mode:</h6>
                    <p>in hand delivery</p>
                  </li>
                  <li>
                    <h6>location:</h6>
                    <p>USA</p>
                  </li>

                  <li>
                    <h6>share:</h6>
                    <ul className="d-flex social_icon">
                      <TeamSocialLinks />
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="title">
                <h4>{title_1}</h4>
              </div>
              <p>{sm_des}</p>
            </div>
            <div className="col-lg-12 list-part">
              <div className="row align-items-end">
                <div className="col-lg-8 col-md-12">
                  <div className="title">
                    <h4>{title_2}</h4>
                  </div>
                  <p>{sm_info}</p>
                  <ul className="desc-list">
                    {feature.map((item, i) => (
                      <li key={i}><p>{item}</p></li>
                    ))} 
                  </ul>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="image">
                    <Image src={project_details_img_2} style={{ height: "auto" }} alt="Service" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolorRoofDetailsArea;