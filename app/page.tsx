import { GsapReveal } from "@/components/GsapReveal";
import { Header } from "@/components/Header";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { BusinessDaysSection } from "@/components/sections/BusinessDaysSection";
import { BrandStorySection } from "@/components/sections/BrandStorySection";
import { DemoValueSection } from "@/components/sections/DemoValueSection";
import { Footer } from "@/components/sections/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { InstagramMoodSection } from "@/components/sections/InstagramMoodSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { StoreInfoSection } from "@/components/sections/StoreInfoSection";
import { TodayStatusSection } from "@/components/sections/TodayStatusSection";
import { UsageScenesSection } from "@/components/sections/UsageScenesSection";
import { getNews } from "@/lib/microcms";

export default async function Home() {
  const news = await getNews();

  return (
    <div className="bg-[#f7f0e8] pb-20 md:pb-0">
      <Header />
      <main>
        <HeroSection />
        <GsapReveal>
          <BrandStorySection />
        </GsapReveal>
        <GsapReveal>
          <ProductsSection />
        </GsapReveal>
        <GsapReveal>
          <InstagramMoodSection />
        </GsapReveal>
        <GsapReveal>
          <TodayStatusSection />
        </GsapReveal>
        <GsapReveal>
          <BusinessDaysSection />
        </GsapReveal>
        <GsapReveal>
          <UsageScenesSection />
        </GsapReveal>
        <GsapReveal>
          <StoreInfoSection />
        </GsapReveal>
        <GsapReveal>
          <DemoValueSection />
        </GsapReveal>
        <GsapReveal>
          <InstagramSection news={news} />
        </GsapReveal>
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
