import Story1 from '@/components/Story/Story1';
import Home6 from '@/components/Home/Home6';
import Story2 from '@/components/Story/Story2';
import FounderSection from '@/components/Story/FounderSection';
import { Metadata } from 'next';

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
            < FounderSection />
            < Home6 />
            < Story2 />
            {/* < Blog />
            < Testimonials />
            < FAQ /> */}
        </>
    );
};

export default OurStory;