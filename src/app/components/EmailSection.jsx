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
  // const [emailSubmitted, setEmailSubmitted] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = {
  //     email: e.target.email.value,
  //     subject: e.target.subject.value,
  //     message: e.target.message.value,
  //   };
  //   const JSONdata = JSON.stringify(data);
  //   // const endpoint = "/api/send";

  //   // Form the request for sending data to the server.
  //   const options = {
  //     // The method is POST because we are sending data.
  //     method: "POST",
  //     // Tell the server we're sending JSON.
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     // Body of the request is the JSON data we created above.
  //     body: JSONdata,
  //   };

  //   // const response = await fetch(endpoint, options);
  //   const resData = await response.json();

  //   if (response.status === 200) {
  //     console.log("Message sent.");
  //     setEmailSubmitted(true);
  //   }
  // };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
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
    </section>
  );
};

export default EmailSection;
