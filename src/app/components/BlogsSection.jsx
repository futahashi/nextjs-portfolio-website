"use client";
import React from "react";
import ExternalLink from "./ExternalLink";

const BlogsSection = () => {
  return (
    <section className="text-white" id="blogs">
      <div className="md:grid md:grid-cols-1 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Blogs ✍️</h2>
          <ul className="text-lg list-disc pl-2">
            <li>
              <ExternalLink href="https://qiita.com/futahashi/items/be0a601a99815a2fdb5c">
                FinOps の実践に最適な Datadog Cloud Cost Management のご紹介
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://jdd-ug.github.io/2025/05/08/">
                JDDUG meetup #9@福岡 レポート
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://jdd-ug.github.io/2025/07/18/">
                JDDUG meetup #11@福岡 レポート
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://jdd-ug.github.io/2025/11/13/">
                JDDUG meetup #14@福岡 レポート
              </ExternalLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
