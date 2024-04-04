import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section id="about" className="flexCenter flex-col mb-10 mt-10">
      {/* <div className="flex justify-center mb-8 md:mb-14">
        <div className="border bg-gray-200 text-center w-[200px] md:w-[400px] text-xl h-0 font-extrabold" />
        <div className="-m-6 md:-m-10 lg:bold-64 bold-40 mx-4 md:mx-8 text-2xl font-extrabold">
          About
        </div>
        <div className="border bg-gray-200 text-center w-[200px] md:w-[400px] text-xl h-0 font-extrabold" />
      </div> */}
      <div className="padding-container max-container w-full pb-24">
        <p className="uppercase regular-18 -mt-1 mb-3 ">We are here for you</p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px] text-blue-500">
            Guide You to Easy Path
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            {" "}
            Embark on a royal journey with Kingdom of Hevean, your passport to
            unparalleled adventures and majestic destinations. With our
            cutting-edge travel platform, you won't just explore; you'll reign
            over your travel experiences.
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative  w-full">
        <Image
          src="/bg.jpg"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center rounded-r-3xl 2xl:rounded-5xl"
        />

        <div className="absolute flex md:mt-10 bg-white py-8 pl-5 pr-7 gap-3 rounded-r-3xl border shadow-md md:left-[5%] lg:top-10">
          <Image
            src="/meter.svg"
            alt="meter"
            width={56}
            height={400}
            className="h-full w-auto " // Adjust width for smaller screens
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-blue-500 md:text-blue-700">
                  56 min
                </p>{" "}
                {/* Adjust text size for smaller screens */}
              </div>
              <p className="bold-20 mt-2 md:mt-3">Aguas Calientes</p>{" "}
              {/* Adjust margin for smaller screens */}
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 md:mt-3 whitespace-nowrap">
                Wonorejo Pasuruan
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
