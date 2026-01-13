"use client";
import React from "react";
import Image from "next/image";

const SECTIONS_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS ❤️ (Compute / Containers / Database / Developer Tools / Networking & Content Delivery / Security, Identity, & Compliance / 
Storage etc.) </li>
        <li>Datadog 💜</li>
        <li>Kubernetes</li>
        <li>FinOps</li>
        <li>Linux (Server construction / operation / maintenance etc.)</li>
        <li>IaC (Terraform / Ansible / Serverless Framework etc.)</li>
        <li>DevOps (GitHub / AWS Code series / Jenkins / ChatOps etc.) </li>
        <li>Network (AWS Cloud Networking / Cisco etc.)</li>
        <li>Virtualization (Docker / KVM etc.)</li>
        <li>Monitoring (Mackerel / Pagerduty / Nagios etc.)</li>
        <li>Programming (Python / Ruby etc.)</li>
        <li>Project Management</li>
        etc.
      </ul>
    ),
  },
  {
    title: "Career",
    id: "career",
    content: (
      <ul className="list-disc pl-2">
        <li>(2026-Present) Ignission G.K. SRE</li>
        <li>(2023-Present) ホライズンテクノロジー株式会社 技術顧問就任</li>
        <li>(2018-Present) 株式会社ヌーラボ 所属</li>
        <li>(2012-2018) 富士通九州ネットワークテクノロジーズ 所属</li>
        <li>(2012) 大分工業高等専門学校 電気電子情報工学専攻卒</li>
      </ul>
    ),
  },
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2">
        <li>15+ years of professional experience in the infrastructure and cloud engineering industry</li>
        <li>Managed 50+ AWS accounts across multi-account environments</li>
        <li>Managed 100+ servers across multiple environments</li>
        <li>Established comprehensive observability using Datadog</li>
        <li>Designed and implemented system redundancy, acceleration, cost reduction, and automation solutions</li>
        <li>Designed and implemented IPO-level system security measures</li>
        <li>Provided 24/7 on-call support for Chat SaaS platform</li>
        <li>Designed, developed, operated, and maintained systems in AWS cloud infrastructure</li>
        <li>Designed, developed, operated, and maintained AWS multi-account environments</li>
        <li>Designed and developed load testing environments</li>
        <li>Designed, developed, operated, and maintained DevOps environments (Jenkins, AWS Code series)</li>
        <li>Executed major version migrations for Linux OS, RDS, and various middleware components</li>
        <li>Constructed and maintained servers and network infrastructure in on-premise environments</li>
        <li>Collaborated with native English speakers through video calls, chat, and ticketing systems</li>
      </ul>
    ),
  },
  {
    title: "Hobbies",
    id: "hobbies",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS & Datadog</li>
        <li>Work</li>
        <li>Playing with my children</li>
      </ul>
    ),
  },
];

const AboutSection = () => {

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
            <br></br>
            技術顧問: ホライズンテクノロジー株式会社 (HORIZON TECHNOLOGY Co.,Ltd.)
          </p>
          
          <div className="mt-8 space-y-8">
            {SECTIONS_DATA.map((section) => (
              <div key={section.id}>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {section.title}
                </h3>
                <div className="text-base lg:text-lg">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
