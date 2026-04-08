"use client";
import React from "react";
import Image from "next/image";

const SECTIONS_DATA = [
  {
    title: "Career",
    id: "career",
    content: (
      <ul className="list-disc pl-2">
        <li>(2026-Present) SRE @ 株式会社LayerX (LayerX Inc.)</li>
        <li>(2026-Present) SRE @ 合同会社Ignission (Ignission G.K.)</li>
        <li>(2023-Present) Technical Advisor @ ホライズンテクノロジー株式会社 (HORIZON TECHNOLOGY Co.,Ltd.)</li>
        <li>(2018-Present) Principal Engineer @ 株式会社ヌーラボ (Nulab Inc.)</li>
        <li>(2012-2018) 富士通九州ネットワークテクノロジーズ 所属</li>
        <li>(2012) 大分工業高等専門学校 電気電子情報工学専攻卒</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Datadog 💜 (Bits AI SRE / Bits Assistant / Cloud Cost Management / Cloud Security / Cloud SIEM / On-Call / RUM / SLO / Dashboard / Monitor / Log / Metrics / APM etc.)</li>
        <li>AWS ❤️ (Compute / Containers / Database / Developer Tools / Networking & Content Delivery / Security, Identity, & Compliance / 
Storage etc.) </li>
        <li>Kubernetes</li>
        <li>FinOps</li>
        <li>Linux (Server construction / operation / maintenance etc.)</li>
        <li>IaC (Terraform / Ansible / Serverless Framework etc.)</li>
        <li>CI/CD (GitHub / AWS Code series / Jenkins / ChatOps etc.) </li>
        <li>Network (AWS Cloud Networking / Cisco etc.)</li>
        <li>Virtualization (Docker / KVM etc.)</li>
        <li>Monitoring (Mackerel / Pagerduty / Nagios etc.)</li>
        <li>Programming (Python / Ruby / Java etc.)</li>
        <li>Project Management</li>
        etc.
      </ul>
    ),
  },
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2">
        <li>15+ years of professional experience in the infrastructure and cloud engineering industry</li>
        <li>Managed 50+ AWS accounts and designed, developed, operated, and maintained multi-account cloud infrastructure</li>
        <li>Managed 100+ servers across multiple environments</li>
        <li>Established comprehensive observability using Datadog</li>
        <li>Designed and implemented system improvements including redundancy, acceleration, cost reduction, and automation</li>
        <li>Designed and implemented IPO-level system security measures</li>
        <li>Provided 24/7 on-call support for Chat SaaS platform</li>
        <li>Designed and developed DevOps and load testing environments (Jenkins, AWS Code series)</li>
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
          
          <div className="space-y-4 text-base lg:text-lg">
            <p>
              Hello! I&apos;m futahashi (Hisatomo Futahashi).
              I work primarily as an SRE, specializing in AWS / Datadog / FinOps / Security engineering.
              My favorite sayings are &quot;Persistence is power&quot;, &quot;Patience and perseverance overcome all things&quot;, &quot;Fortune comes to the homes of those who smile&quot;, and &quot;A heart of love and compassion&quot;.
              I&apos;m an engineer who approaches work with passion and conviction, engages with people through respect and trust, and values laughter and enjoyment in all things. Probably.
            </p>

            <p>
              My strengths include execution capabilities developed through large-scale projects at major Japanese corporations, technical and collaboration skills cultivated at globally expanding startups, and accumulated diverse SRE experience.
            </p>

            <p>
              I strive to do my best in both work and family toward achieving world peace.
              I hope to connect with many wonderful people through work and hobbies!
            </p>

            <div className="border-t border-gray-600 pt-6 mt-6">
              <p className="text-gray-300">
                こんにちは! futahashi ( 二橋 宣友 ) です。
                主にSREとして、AWS / Datadog / FinOps / Security エンジニアとして働いています。
                好きな言葉は、継続は力なり / 石の上にも三年 / 笑う門には福来る / 愛と慈しみの心 です。
                情熱と信念を持って仕事に取り組み、尊敬と信頼を持って人々と関わり、何事においても笑いと楽しさを大切にする、そんなエンジニアです。たぶん。
              </p>

              <p className="text-gray-300">
                国内大企業の大規模プロジェクトで身につけた業務遂行能力と、グローバルに展開するスタートアップ企業で培った技術やコラボレーション能力、多様なSRE経験の積み重ねが強みです。
              </p>

              <p className="text-gray-300">
                世界平和実現に向けて仕事も家庭も頑張ります。
                仕事や趣味を通じてより多くの素敵な方々と関われると幸いです！
              </p>
            </div>

            <div className="pt-6 mt-6">
              <h3 className="text-2xl font-bold text-white mb-4">Current Positions</h3>
              <ul className="list-disc pl-2">
                <li className="font-semibold">SRE @ 株式会社LayerX (LayerX Inc.)</li>
                <li className="font-semibold">Principal Engineer @ 株式会社ヌーラボ (Nulab Inc.)</li>
                <li className="font-semibold">技術顧問 (Technical Advisor) @ ホライズンテクノロジー株式会社 (HORIZON TECHNOLOGY Co.,Ltd.)</li>
                <li className="font-semibold">SRE @ 合同会社Ignission (Ignission G.K.)</li>
              </ul>
            </div>
          </div>
          
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
