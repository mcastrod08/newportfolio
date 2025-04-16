
import { Areas } from "@/components/Areas";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";

import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";



export default function Home() {
  return (
    
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-[100rem] w-full">
        <FloatingNav navItems={navItems} className="hidden sm:flex"/>
        <Hero/>
        <Grid/>
        <RecentProjects/>
        <Experience />
        <Areas />
        <Footer />
      </div>
    </main>
    
  );
}
