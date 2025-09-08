
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import CertificateArea from './CertificateArea';



const Certificate = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title='Certificates' title='Certificates' />
      <CertificateArea />
      </main>
      <FooterOne />
    </>
  );
};

export default Certificate;