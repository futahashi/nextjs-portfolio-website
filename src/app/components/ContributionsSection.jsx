"use client";
import React from "react";
import Image from "next/image";
import ExternalLink from "./ExternalLink";

// import { TypeAnimation } from "react-type-animation";
// import { motion } from "framer-motion";
// import Link from "next/link";

const ContributionsSection = () => {
  return (
    <section className="text-white" id="contributions">
      <div className="md:grid md:grid-cols-1 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Contributions 💪</h2>
          <ul className="text-lg list-disc pl-2">
            <li>
              Datadog Live Tokyo 2025 (12/16) - AI Agent で実現する AIOps ― Bits AI SRE 国内活用事例 ―
            </li>
            <li>
              <ExternalLink href="https://www.datadoghq.com/product/ai/bits-ai-sre/">
              Datadog Bits AI SRE - Customer Testimonials by Nulab Lead SRE futahashi
              </ExternalLink>
            </li>
            <li>
              Datadog Live Tokyo 2025 (06/03) - ツール乱立を越えて Datadog 標準化と開発者体験向上の道
            </li>
            <li>
              <ExternalLink href="https://mackerel.io/ja/blog/entry/event/mackerel-tech-day-report">
              Mackerel Day
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://aws.amazon.com/jp/blogs/psa/aws-graviton-momentum-with-software-partner/">
              国内 AWS ソフトウェアパートナーにおける AWS Graviton 活用のモメンタム
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://aws.amazon.com/ec2/graviton/customers/#nulab">
              AWS Graviton - Customer Testimonials by Nulab SRE futahashi
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://aws.amazon.com/jp/solutions/case-studies/nulab/">
              AWS 導入事例：株式会社ヌーラボ
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://gihyo.jp/magazine/wdpress/archive/2020/vol116">
              WEB+DB PRESS Vol.116 - AWS CodeDeploy
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://mackerel.io/ja/blog/entry/event/mackerel-day-2">
              Mackerel Day #2
              </ExternalLink>
            </li>
          </ul>
        </div>
        <div>
          <Image src="/images/contributions/webdb116.jpg" width={200} height={200} />
        </div>
      </div>
    </section>
  );
};

export default ContributionsSection;
