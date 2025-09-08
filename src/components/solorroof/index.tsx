
import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import SolorRoofDetailsArea from './SolorRoofDetailsArea';
import FooterOne from '@/layouts/footers/FooterOne';



const SolorRoof = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title='Solor Roof' title='Solor Roof' />
        <SolorRoofDetailsArea />
       
      </main>
      <FooterOne />
    </>
  );
};

export default SolorRoof;