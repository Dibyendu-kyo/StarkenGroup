import Story1 from '@/components/Story/Story1';
import Home6 from '@/components/Home/Home6';
import Story2 from '@/components/Story/Story2';
import Team from '@/components/Story/Story3';
import Blog from '@/components/Home/Home7';
import Testimonials from '@/components/Home/Home8';
import FAQ from "@/components/Story/Story4";
import { Metadata } from 'next';
import Achivement from "@/components/Home/Home4";

export const metadata: Metadata = {
  title: "About-Our Story",
  description: ".",
  keywords: [
    
  ],
  alternates: {
    canonical: "/story"
  }
};

const OurStory = () => {
    return(
        <>
            < Story1 />
            < Home6 />
            < Story2 />
            < Team />
            {/* < Blog />
            < Testimonials />
            < FAQ /> */}
        </>
    );
};

export default OurStory;