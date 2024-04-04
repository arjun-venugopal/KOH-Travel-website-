import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Explore the Wonders of the World</title>
        <meta name="description" content="Get started and prepare to explore the wonders of the world!" />
      </Head>
      <div className="max-container padding-container  h-80 bg-blue-500 text-white p-6 md:p-10 mb-16 py-20 flex flex-col rounded-5xl items-center ">
        <div className="max-w-6xl mx-auto mt-4 md:mt-10 mb-8 md:mb-20 text-center">
          <h1 className="text-xl md:text-5xl font-bold">Get Started and Prepare to Explore the</h1>
          <h1 className="text-xl md:text-5xl font-bold mb-4 md:mb-8">Wonders of the World</h1>
          <a
            href="/explore"
            className="inline-block px-4 md:px-6 py-2 md:py-3 text-lg md:text-xl font-semibold bg-indigo-500 rounded-md hover:bg-indigo-600"
          >
            Discover Now
          </a>
        </div>
        
      </div>
    </>
  );
}

