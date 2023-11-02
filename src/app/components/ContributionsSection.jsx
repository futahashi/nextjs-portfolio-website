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
          <h2 className="text-4xl font-bold text-white mb-4">Contributions</h2>
          <ul className="list-disc pl-2">
            <li>
              <ExternalLink href="https://aws.amazon.com/jp/blogs/psa/aws-graviton-momentum-with-software-partner/">
              国内 AWS ソフトウェアパートナーにおける AWS Graviton 活用のモメンタム
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://aws.amazon.com/ec2/graviton/customers/?nc1=h_ls&ec2-instances-customers-cards.sort-by=item.additionalFields.date-added&ec2-instances-customers-cards.sort-order=desc&awsf.success-story-topic=*all&awsf.content-type=*all&awsf.use-case=*all&awsf.processor=*all&awsf.instance-name=*all&awsf.managed-services=*all&awsf.programming-language=*all&awsf.industry=*all&awsf.region=*all&awsf.year=*all&ec2-instances-customers-cards.q=nulab&ec2-instances-customers-cards.q_operator=AND">
              AWS Graviton Customers - Nulab
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
