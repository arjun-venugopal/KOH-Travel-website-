import React from "react";
import { EXPLORE } from "@/constants";
import Image from "next/image";

const GetApp = () => {
  return (
    <section id="explore" className="flex flex-col py-10 md:py-20 max-w-7xl mx-auto text-center">
      <div className="flex justify-center mb-8 md:mb-14">
        <div className="border bg-gray-200 text-center w-[200px] md:w-[400px] text-xl h-0 font-extrabold" />
        <div className="-m-6 md:-m-10 lg:bold-64 bold-40 mx-4 md:mx-8 text-2xl font-extrabold">
          Explore
        </div>
        <div className="border bg-gray-200 text-center w-[200px] md:w-[400px] text-xl h-0 font-extrabold" />
      </div>

      <div
        className={`grid ${"md:grid-cols-3"} gap-3 md:px-16 px-2 md:gap-8 mt-10 lg:gap-12 cursor-pointer`}
      >
        {EXPLORE.map(({ Id, image, text, discription }) => (
          <div key={Id} className="group relative">
            <div className="overflow-hidden rounded-lg">
              <Image
                alt="explore"
                src={image}
                width={300} // Set the default width
                height={200} // Set the default height
                layout="responsive"
                className="w-full rounded-lg"
              />
              <div className="absolute inset-0 flex opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-80 bg-gradient-to-b from-transparent to-black rounded-lg">
                <h4
                  className={`absolute sadie-text text-white ${
                    "text-3xl"
                  } bottom-5 font-bold text-bottom p-3`}
                >
                  {text}
                  <br />
                </h4>
                <p
                  className={`absolute sadie-text text-white ${
                    "text-base"
                  } bottom-0 font-bold text-bottom p-3 text-2xl`}
                >
                  {discription}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetApp;
