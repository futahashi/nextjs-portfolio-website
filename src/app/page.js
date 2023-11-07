import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import AwardsSection from "./components/AwardsSection";
import CertificationsSection from "./components/CertificationsSection";
import ContributionsSection from "./components/ContributionsSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-md-12 px-4 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <AwardsSection />
        <CertificationsSection />
        <ContributionsSection />
        {/* <ProjectsSection /> */}
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
