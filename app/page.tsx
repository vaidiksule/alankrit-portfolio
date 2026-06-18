import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Categories } from "@/components/sections/Categories";
import { WorkGrid } from "@/components/sections/WorkGrid";
import { Tools } from "@/components/sections/Tools";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Categories />
      <WorkGrid />
      <Tools />
      <Contact />
    </>
  );
}
