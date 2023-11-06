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
        <li>AWS ❤️</li>
        <li>Linux</li>
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
        <li>Learning Technologies especially AWS ❤️</li>
        <li>Learning English</li>
        <li>Learning Unity for Game development</li>
        <li>Learning Blender for 3D modeling</li>
        <li>Learning childcare</li>
        <li>Play with my children 👧👧</li>
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
        <li>(2018-) 株式会社ヌーラボ (Nulab Inc.)</li>
        <li>(2012-2018) 富士通九州ネットワークテクノロジーズ</li>
        <li>(2012) 大分工業高等専門学校 電気電子情報工学専攻卒</li>
      </ul>
    ),
  },
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2">
        <li>Design and implementation of system redundancy / acceleration / cost reduction / automation, etc.</li>
        <li>Development of many DevOps environments / automation tools.</li>
        <li>Design and implementation of IPO-level system security.</li>
        <li>24/365 Chat SaaS on call.</li>
        <li>100+ servers management.</li>
        <li>System design / development / operation / maintenance in AWS cloud.</li>
        <li>Server and network construction for on-premise environment.</li>
        <li>Work in English with native speakers via video calls / chat / tickets.</li>
        etc.
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
      <div className="md:grid md:grid-cols-1 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* <Image src="/images/futahashi2.jpg" width={500} height={500} /> */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me 🤩</h2>
          <p className="text-base lg:text-lg">
            こんにちは! futahashi ( 二橋 宣友 ) です。
            主に、AWSエンジニア / インフラエンジニア / SRE / ネットワークエンジニアとして働いています。
            情熱と信念を持って仕事に取り組み、尊敬と信頼を持って人々と関わり、何事においても笑いと楽しさを大切にする、そんなエンジニアです。たぶん。
            <br></br>
            <br></br>
            得意な技術は、特にAWS / Linux / IaC / DevOps です。
            キャリアとして、国内大企業の大規模プロジェクトで身につけた業務遂行能力と、グローバルに展開するスタートアップ企業で培った技術やコラボレーション能力、IPO等の様々な経験が強みです。
            <br></br>
            <br></br>
            世界平和実現に向けて仕事も家庭も頑張ります。
            仕事や趣味を通じてより多くの素敵な方々と関われると幸いです！
            <br></br>
            <br></br>
            所属: 株式会社ヌーラボ (Nulab Inc.)
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
              selectTab={() => handleTabChange("experiences")}
              active={tab === "experiences"}
            >
              {" "}
              Experiences{" "}
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
