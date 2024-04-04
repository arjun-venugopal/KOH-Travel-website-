import Up from "@/components/Up";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/About";
import Hero from "@/components/Hero";
import Explore from "@/components/Explore";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <>
      <Hero />
      <Up />
      <Guide />
      <Features />
      <Explore/>
      <GetApp />
    </>
  )
}
