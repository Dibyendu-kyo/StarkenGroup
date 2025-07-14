import Home1 from "@/components/Home/Home1";
import Home2 from '@/components/Home/Home2';
import Home3 from "@/components/Home/Home3";
// import Home4 from "@/components/Home/Home4";
import Home5 from "@/components/Home/Home5";
import Home6 from "@/components/Home/Home6";
import Home7 from "@/components/Home/Home7";
import Home8 from "@/components/Home/Home8";
import Home9 from "@/components/Home/Home9";
import ClientsCarousel from "@/components/Client/ClientsCarousel";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
    return(
        <div>
            < Home1 />
            < Home2 />
            < Home3 />
            <ClientsCarousel />
            {/* < Home4 /> */}
            < Home6 />
            < Home7 />
            < Home8 />
            <ScrollToTop />
            <WhatsAppButton />
        </div>
    );
}