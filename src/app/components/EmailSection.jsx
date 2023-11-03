"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import FacebookIcon from "../../../public/facebook-icon.svg";
import XIcon from "../../../public/x-icon.svg";
import InstagramIcon from "../../../public/instagram-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="text-white" id="contact">
    {/* // <section
    //   id="contact"
    //   className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    // > */}
      <div className="md:grid md:grid-cols-1 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">


      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
      <h2 className="text-4xl font-bold text-white mb-4">Contact 🤝</h2>
        <h5 className="text-lg text-white my-2">
          仕事の依頼も時々受け付けています。
          <br></br>
          お気軽に繋がり申請お願いします。
          <br></br>
          Let&apos;s connect!! 🫶
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          {/* I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you! */}
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://www.facebook.com/hisatomo.futahashi/">
            <Image src={FacebookIcon} alt="Facebook Icon" />
          </Link>
          <Link href="https://twitter.com/futahashi">
            <Image src={XIcon} alt="X Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/hisatomo-futahashi/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://github.com/futahashi">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.instagram.com/futahashi_h/">
            <Image src={InstagramIcon} alt="Instagram Icon" />
          </Link>
        </div>
      </div>
      </div>
      </div>
    </section>
  );
};

export default EmailSection;
