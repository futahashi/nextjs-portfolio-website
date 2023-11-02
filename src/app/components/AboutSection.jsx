"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS</li>
          {/* <ul className="list-disc pl-1">
            <li>(Design/Development/Operation/Maintenance with High Security & Low Costs)</li>
            </ul> */}
        <li>Linux</li>
        {/* <li>Linux (Design/Development/Operation/Maintenance over 100+ servers)</li> */}
        <li>IaC</li>
        <li>DevOps</li>
        <li>Network</li>
        <li>Virtualization</li>
        <li>Programing</li>
        <li>Project Management</li>
        etc.
      </ul>
    ),
  },
  {
    title: "Hobbies",
    id: "hobbies",
    content: (
      <ul className="list-disc pl-2">
        <li>Learning AWS</li>
        <li>Learning English</li>
        <li>Learning Unity for Game development</li>
        <li>Learning Blender for 3D modeling</li>
        <li>Play with my children</li>
        <li>Playing Ukulele</li>
        <li>Playing Piano</li>
        <li>Playing sports</li>
        <li>Social Drinking</li>
        <li>Cooking</li>
        etc.
      </ul>
    ),
  },
  {
    title: "Career",
    id: "career",
    content: (
      <ul className="list-disc pl-2">
        <li>(2018-) 株式会社ヌーラボ (英文: Nulab Inc.)</li>
        <li>(2012-2018) 富士通九州ネットワークテクノロジーズ</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/futahashi2.jpg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me 🤩</h2>
          <p className="text-base lg:text-lg">
            こんにちは! futahashi ( 二橋 宣友 ) です。
            主に、AWSエンジニア / インフラエンジニア / SREとして働いています。
            技術的には、特にAWS / Linux / IaC / DevOps を得意としています。

            歴史のある大企業の大規模レガシープロジェクトで身につけた業務遂行能力と、グローバルなスタートアップ企業で培った技術やコラボレーション能力、IPO等の様々な経験が強みです。

            仕事や趣味を通じてより多くの素敵な方々と関われると幸いです！

            {/* I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications. */}
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("career")}
              active={tab === "career"}
            >
              {" "}
              Career{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("hobbies")}
              active={tab === "hobbies"}
            >
              {" "}
              Hobbies{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
