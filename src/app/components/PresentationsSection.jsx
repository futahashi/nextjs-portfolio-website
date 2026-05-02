"use client";
import React from "react";
import ExternalLink from "./ExternalLink";

const PresentationsSection = () => {
  return (
    <section className="text-white" id="presentations">
      <div className="md:grid md:grid-cols-1 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Presentations 🎤</h2>
          <ul className="text-lg list-disc pl-2">
            <li>
              <ExternalLink href="https://speakerdeck.com/nulabinc/the-evolution-of-bits-ai-sre-jp">
                進化するBits AI SREと私と組織
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://speakerdeck.com/nulabinc/the-evolution-of-bits-ai-sre">
                The Evolution of Bits AI SRE - Me, the Organization, and the Future
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://gamma.app/docs/-ztmbgr763gbjh21">
                私の相棒の紹介と彼との思ひ出
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://gamma.app/docs/My-Partners-Introduction-and-Memories-with-It-7jq4zyzlpqnl6qw?mode=doc">
                My Partner&apos;s Introduction and Memories with It
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://gamma.app/docs/ap1mdj8onqdrf31">
                AIハッカソンで組織文化の浸透を観測した話
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://speakerdeck.com/nulabinc/datadog-live-tokyo-2025-nulab">
                ツール乱立を超えて
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://gamma.app/docs/jtw3t4ucdfdhz3m">
                Datadog CCM活用によるFinOpsのはじめの一歩
              </ExternalLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PresentationsSection;
