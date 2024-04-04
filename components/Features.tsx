import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const Features = () => {
  return (
    <section
      id="features"
      className="overflow-hidden pt-20 md:py-12 lg:py-16 md:mt-12"
    >
      <div className="flex justify-center mb-8 md:mb-14 ">
        <div className="border bg-gray-200 text-center w-[200px] md:w-[400px] text-xl h-0 font-extrabold" />
        <div className="-m-6 md:-m-10 lg:bold-64 bold-40 mx-4 md:mx-8 text-2xl font-extrabold">
          Service
        </div>
        <div className="border bg-gray-200 text-center w-[200px] md:w-[400px] text-xl h-0 font-extrabold" />
      </div>    
      <div className="max-container flex flex-wrap padding-container py-10 relative flex-col md:flex-row justify-center items-center md:justify-between">
        <div className="p-6 md:p-10 py-8 items-center md:py-10 md:w-1/2">
          <h2 className="font-bold md:text-4xl text-2xl">
            Our Services For You
          </h2>
          <p className="my-5">
            We have service and trust for customers to always be the best and be
            their choice
          </p>
          <Button type="button" title="Discover Now" variant="btn_blue" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 w-auto md:w-1/2">
          {FEATURES.map((feature, index) => (
            <FeatureItem
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Define the FeatureItem component
type FeatureItemProps = {
  title: string;

  description: string;
};

const FeatureItem = ({ title, description }: FeatureItemProps) => {
  return (
    <div className="flex gap-3 md:flex-row items-center p-2 md:w-full">
      <div className="p-2 bg-blue-500 -mt-10 flex justify-center md:-mt-14 md:mb-0 md:mr-4" />
      <div className="md:w-3/4">
        <h2 className="font-bold text-xl mt-2 md:mt-0 capitalize">{title}</h2>
        <p className="text-base mt-2 text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Features;
