
import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import SolorPowerPlantDetailsArea from './SolorPowerPlantDetailsArea';
import FooterOne from '@/layouts/footers/FooterOne';



const SolorRoof = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title='Solor Power Plant' title='Solor Power Plant' />
        <SolorPowerPlantDetailsArea />
       
      </main>
      <FooterOne />
    </>
  );
};

export default SolorRoof;