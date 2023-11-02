"use client";
import React from "react";
// import Image from "next/image";
// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";
// import Link from "next/link";

const CertificationsSection = () => {
  return (
    <section className="text-white" id="certifications">
      <div className="md:grid md:grid-cols-1 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Certifications 👑</h2>
          <ul className="text-xl list-disc pl-2">
            <li>(2022) AWS Certified Cloud Practitioner (CLF)</li>
            <li>(2022) AWS Certified Advanced Networking - Specialty (ANS)</li>
            <li>(2022) AWS Certified Database - Specialty (DBS)</li>
            <li>(2022) AWS Certified Security - Specialty (SCS)</li>
            <li>(2022) AWS Certified Solutions Architect - Professional (SAP)</li>
            <li>(2020) AWS Certified DevOps Engineer Professional (DOP)</li>
            <li>(2020) AWS Certified SysOps Administrator - Associate (SOA)</li>
            <li>(2020) AWS Certified Developer - Associate (DVA)</li>
            <li>(2017) AWS Certified Solutions Architect - Associate (SAA)</li>
            <li>(2017) Cisco Certified Network Professional（CCNP）Routing and Switching</li>
            <li>(2017) Cisco Certified Routing and Switching (CCNA)</li>
            <li>(2017) LinuC-3 304 Virtualization &High Availability Certified Professional</li>
            <li>(2017) LinuC-2 Certified Professional</li>
            <li>(2017) LinuC-1 Certified Professional</li>
            <li>(2016) OPCEL Certified Professional</li>
            <li>(2016) HTML5 Professional Exam Level1</li>
            <li>(2015) Oracle Certified Java Programmer, Silver SE 8</li>
            <li>(2015) TOEIC 700</li>
            <li>(2009) IT Passport</li>
            <li>(2006) MOS Excel Expert</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
