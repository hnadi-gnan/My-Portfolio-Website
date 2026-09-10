import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { WhatIDo } from "@/components/sections/WhatIDo";
import { About } from "@/components/sections/About";
import { WhatISolve } from "@/components/sections/WhatISolve";
import { Expertise } from "@/components/sections/Expertise";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Experience } from "@/components/sections/Experience";
import { Credentials } from "@/components/sections/Credentials";
import { Toolkit } from "@/components/sections/Toolkit";
import { HowIWork } from "@/components/sections/HowIWork";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <WhatIDo />
        <About />
        <WhatISolve />
        <Expertise />
        <SelectedWork />
        <Experience />
        <Credentials />
        <Toolkit />
        <HowIWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
