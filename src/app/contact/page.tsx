import Contact1 from "@/components/Contact/Contact1";
import FAQ from "@/components/Story/Story4";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us",
  description: ".",
  keywords: [
    
  ],
  alternates: {
    canonical: "/contact"
  }
};

const Contact = () => {
    return (
      <>
        < Contact1 />
        < FAQ />
      </>
    );
};

export default Contact;