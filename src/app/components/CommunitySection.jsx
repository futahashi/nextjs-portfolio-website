"use client";
import React from "react";
import ExternalLink from "./ExternalLink";

const CommunitySection = () => {
  return (
    <section className="text-white" id="community">
      <div className="md:grid md:grid-cols-1 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Community 🌏</h2>
          <ul className="text-lg list-disc pl-2">
            <li>
              <ExternalLink href="https://datadog-jp.connpass.com/">
              JDDUG (Japan Datadog User Group)
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://techplay.jp/community/snowvillage-kyushu">
              Snowflake Kyushu User Group
              </ExternalLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
