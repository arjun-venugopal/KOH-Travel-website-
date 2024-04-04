import Image from "next/image";
import Button from "./Button";
const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-32 lg:bold-52">
          Discover the Best Place in the World
        </h1>
        <p className="regular-14 mt-6 text-gray-30 xl:max-w-[520px]">
          Explore wonders all over the world right now and have the latest
          experience of adventuring in different places with our best service
          for you
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1"></span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Discore Now" variant="btn_blue" />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      <div className="w-auto bg-gradient-to-b from-sky-500 to-blue-700 rounded-t-full shadow-md shadow-gray-600">
        <div className="relative ml-10">
          <Image
            src={"/trns.png"}
            alt="trns"
            width={500}
            height={400}
            className="relative"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
