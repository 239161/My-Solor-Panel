
import React from 'react';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import AboutAreaHomeOne from '../homes/home/AboutAreaHomeOne';
import ServiceAreaHomeOne from '../homes/home/ServiceAreaHomeOne';
import CtaAreaHomeOne from '../homes/home/CtaAreaHomeOne';
import TeamAreaHomeOne from '../homes/home/TeamAreaHomeOne';
import SubscribeAreaHomeOne from '../homes/home/SubscribeAreaHomeOne';
import EPCArea from './EPCArea';

const About = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Epc" title="Epc" />
       
       <EPCArea />
        <SubscribeAreaHomeOne />
      </main>
      <FooterOne />
    </>
  );
};

export default About;