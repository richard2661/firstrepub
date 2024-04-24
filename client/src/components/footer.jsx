import React, { useState } from "react";

const Footer = () => {
  return (
    <div className="bg-[#4b4b4b]">
      <div className="py-8 px-4 lg:max-w-[1024px] mx-auto">
        <div className="text-white flex items-center flex-wrap gap-2 mb-4">
          <span className="underline text-white">Privacy Center</span> |
          <span className="underline text-white">
            Your Privacy Choices Opt Out Icon
          </span>{" "}
          |
          <span className="underline text-white">
            Security & Fraud Prevention
          </span>
          |<span className="underline text-white">Accessibility</span> |
          <span className="underline text-white">
            Website Terms & Conditions
          </span>
        </div>
        <p className="text-white opacity-70 text-sm mb-3">
          Deposit products and related services are offered by JPMorgan Chase
          Bank, N.A. Member FDIC.
        </p>
        <p className="text-white opacity-70 text-sm mb-3">
          Equal Housing Opportunity
        </p>
        <p className="text-white opacity-70 text-sm mb-3">
          Investing involves market risk, including possible loss of principal,
          and there is no guarantee that investment objectives will be achieved.
          Past performance is not a guarantee of future results.
        </p>
        <div className="text-white opacity-70 font-medium w-fit p-4 pl-8 text-sm mb-3 border border-[#d1d0db]">
          INVESTMENT AND INSURANCE PRODUCTS ARE:
          <ul className="list-disc pl-1">
            <li className="text-white font-medium text-sm">
              NOT FDIC INSURED
            </li>
            <li className="text-white font-medium text-sm">
              NOT INSURED BY ANY FEDERAL GOVERNMENT AGENCY
            </li>
            <li className="text-white font-medium text-sm">
              NOT A DEPOSIT OR OTHER OBLIGATION OF, OR GUARANTEED BY, JPMORGAN
              CHASE BANK, N.A. OR ANY OF ITS AFFILIATES
            </li>
            <li className="text-white font-medium text-sm">
              SUBJECT TO INVESTMENT RISKS, INCLUDING POSSIBLE LOSS OF THE
              PRINCIPAL AMOUNT INVESTED
            </li>
          </ul>
        </div>
        <p className="text-white opacity-70 text-sm mb-3">
          ©2024 JPMorgan Chase & Co.
        </p>
      </div>
    </div>
  );
};

export default Footer;
