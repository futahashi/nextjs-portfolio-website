"use client";
import React from "react";
import ExternalLink from "./ExternalLink";
// import Image from "next/image";
// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const ExternalLink = ({ href, children }) => (
//   <a
//     className="text-blue-400 hover:text-blue-600 transition"
//     target="_blank"
//     rel="noopener noreferrer"
//     href={href}
//   >
//     {children}
//   </a>
// );

const AwardsSection = () => {
  return (
    <section className="text-white" id="awards">
      <div className="md:grid md:grid-cols-1 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Awards</h2>
          <ul className="list-disc pl-2">
            <li>
                  <ExternalLink href="https://aws.amazon.com/jp/blogs/psa/2023-japan-aws-all-certifications-engineers/">
                    (2023) 2023 Japan AWS All Certifications Engineers
                  </ExternalLink>
              </li>
              <li>
                  <ExternalLink href="https://aws.amazon.com/jp/blogs/psa/2023-japan-aws-top-engineers/">
                    (2023) 2023 Japan AWS Top Engineers
                  </ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://aws.amazon.com/jp/blogs/psa/2022-japan-aws-partner-ambassador-2022-apn-aws-top-engineers/">
                  (2022) 2022 APN AWS Top Engineers
                </ExternalLink>
              </li>
              <li>(2021) Nulab President's Award</li>
              <li>(2020) Mackerel Ambassador</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
