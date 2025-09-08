"use client";
import React from "react";
import { motion } from "framer-motion";

const EpcPage = () => {
  return (
    <div className="epc-page">
      {/* Overview */}
      <section className="epc-overview py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 mb-4">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="text-primary fw-bold">EPC Solutions</h4>
                <h2 className="fw-bold mb-3">
                  Engineering, Procurement & Construction Excellence
                </h2>
                <p className="text-muted">
                  We provide end-to-end EPC services for solar projects of every
                  scale — from residential rooftops to large-scale utility
                  plants. Our focus is on **quality, efficiency, and
                  sustainability**, ensuring every project generates maximum ROI
                  and long-term reliability.
                </p>
                <ul className="list-unstyled mt-3">
                  <li>✅ Turnkey project management</li>
                  <li>✅ Site analysis & feasibility studies</li>
                  <li>✅ Sustainable design & engineering</li>
                  <li>✅ Procurement of high-quality equipment</li>
                  <li>✅ Construction, testing & commissioning</li>
                  <li>✅ Comprehensive after-sales support</li>
                </ul>
              </motion.div>
            </div>
            <div className="col-lg-6 col-md-12">
              <motion.img
                src="/images/epc-solar.jpg"
                alt="EPC Solar"
                className="img-fluid rounded shadow"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="epc-expertise py-5">
        <div className="container">
          

          <div className="row text-center">
            <div className="col-lg-4 mb-4">
              <motion.div
                className="p-4 shadow rounded bg-white h-100"
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-primary">Engineering</h4>
                <p className="text-muted">
                  Detailed design, energy yield assessment, structural
                  analysis, and advanced simulations to optimize performance.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-4 mb-4">
              <motion.div
                className="p-4 shadow rounded bg-white h-100"
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-primary">Procurement</h4>
                <p className="text-muted">
                  Partnerships with top global manufacturers ensure
                  best-in-class solar modules, inverters, and BOS equipment.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-4 mb-4">
              <motion.div
                className="p-4 shadow rounded bg-white h-100"
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-primary">Construction</h4>
                <p className="text-muted">
                  Professional execution with safety standards, timely delivery,
                  and seamless project handover.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      
      

   
      

      
    </div>
  );
};

export default EpcPage;
