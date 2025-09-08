
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';



import project_details_img_1 from "@/assets/images/resource/project-details1.jpg";
import project_details_img_2 from "@/assets/images/resource/service3.png";
import SolorPanel from "@/assets/images/resource/WhytochooseSolar.png";
import SolorAdd from "@/assets/images/resource/soloradd.png";
import { TeamSocialLinks } from '../common/SocialLinks';


interface DataType {
  title_1: string;
  sm_des: string;
  title_2: string;
  sm_info: string;
  feature: string[];
}


const project_content: DataType = {
  title_1: "Description of Situation",
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
                <h4>{title_1}</h4>
              </div>
              <p>As the government is strongly promoting solar energy, several attractive subsidy schemes have been introduced to make solar affordable for everyone.<b>SK Enterprises</b> helps you take full advantage of these benefits. In this section, you will learn about solar system subsidies and how you can easily avail government 
                subsidy for installing a rooftop solar system at your home through us.</p>
       </div>
       <center><div className="solar-btn" style={{ fontSize: '45px', fontFamily: "'Times New Roman', Times, serif" }}>
                 
                  <Link href="#">What is the Rooftop Solar plant subsidy ?</Link>
        </div></center> 
        <br/>
        <p>The government provides a subsidy for homeowners to install rooftop solar panels with a capacity of 1kW to 10kW. 
          The subsidy amount varies based on the capacity of the solar system.</p>
          <br />
           <table style={{ borderCollapse: 'collapse', width: '100%', textAlign: 'left' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #000', padding: '8px' }}>
            <b>Project Capacity in Individual Household</b>
          </th>
          <th style={{ border: '1px solid #000', padding: '8px' }}>
            <b>Revised for General States/UTs</b>
          </th>
          <th style={{ border: '1px solid #000', padding: '8px' }}>
            <b>Revised for Special* Category States/UTs</b>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ border: '1px solid #000', padding: '8px' }}>1 – 3 kW</td>
          <td style={{ border: '1px solid #000', padding: '8px' }}>Rs 18,000/kW</td>
          <td style={{ border: '1px solid #000', padding: '8px' }}>Rs 20,000/kW</td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #000', padding: '8px' }}>Above 3 – 10 kW</td>
          <td style={{ border: '1px solid #000', padding: '8px' }}>Rs 9,000/kW</td>
          <td style={{ border: '1px solid #000', padding: '8px' }}>Rs 10,000/kW</td>
        </tr>
      </tbody>
    </table>

      <center><div className="solar-btn" style={{ fontSize: '45px', fontFamily: "'Times New Roman', Times, serif" }}>
                 
                  <Link href="#">Subsidy Opportunities Provided by Government for Solar Systems</Link>
        </div></center>  
        <br />

        <p>
          For rooftop solar in residential sector the central financial support has been increased upto Rs.18000/KWp from previous Rs.14,588/KWp for project up to 3KW and Rs. 9000/Kwp from Rs. 7294/- 
          for project above 3KW and 10KW. New rates are applicable for all claims in National Portal.
        </p>
         <br />
         <Image src={SolorPanel} style={{ height: "auto" }} alt="Service" />  <br />
         <p><b>Because after getting the goods from different company Everyone starts blaming each other. No one takes responsibility when something is damaged.</b></p>
         <br />
           <Image src={SolorAdd} style={{ height: "auto" }} alt="Service" />  <br />
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