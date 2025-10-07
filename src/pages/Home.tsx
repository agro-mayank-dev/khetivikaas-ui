import Navbar from "../layout/Navbar";
import SmartGrow from "../components/SmartGrow";
import OurFeatures from "../components/OurFeatures";
import MakingDifference from "../components/MakingDifference";
import MarketPlace from "../components/MarketPlace";
import Description from "../components/Description";
import Footer from "../layout/Footer";
import BannerSection from "../components/BannerSection";
import OurVision from "../components/OurVision";

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <BannerSection />
//       <SmartGrow />
//       <OurVision/>
//       <OurFeatures />
//       <MakingDifference />
//       <MarketPlace />
//       <Description />
//       <Footer />
//     </>
//   );
// }

export default function Home() {
  return (
    <>
      <Navbar />
      <BannerSection />
      <SmartGrow />
      <div id="vision">
        <OurVision />
      </div>
      <div id="feature">
        <OurFeatures />
      </div>
      <MakingDifference />
      <MarketPlace />
      <Description />
      <Footer />
    </>
  );
}
