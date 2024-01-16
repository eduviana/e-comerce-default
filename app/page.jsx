import LayoutFirst from "@/components/layouts/LayoutPrimary/LayoutPrimary";
import AboutUs from "@/components/sections/AboutUs/AboutUs";
import OurMenu from "@/components/sections/OurMenu/OurMenu";
import WhyChooseUs from "@/components/sections/WhyChooseUs/WhyChooseUs";
import MoreInfo from "@/components/sections/MoreInfo/MoreInfo";
import LatestNews from "@/components/sections/LatestNews/LatestNews";
import About from "@/components/sections/About/About";
import Banner from "@/components/sections/Banner/Banner";
import BannerSecond from "@/components/sections/BannerSecond/BannerSecond";

export default function Home() {
  return (
    <LayoutFirst>
      <main className="main">
        <AboutUs />
        <OurMenu />
        <Banner />
        <WhyChooseUs />
        <BannerSecond />
        {/* <MoreInfo />
        <LatestNews />
        <About /> */}
      </main>
    </LayoutFirst>
  );
}
