import { GsapReveal } from "@/components/GsapReveal";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { BusinessDaysSection } from "@/components/sections/BusinessDaysSection";
import { DemoValueSection } from "@/components/sections/DemoValueSection";
import { Footer } from "@/components/sections/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { InstagramMoodSection } from "@/components/sections/InstagramMoodSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { AssuranceSection } from "@/components/sections/AssuranceSection";
import { StoreInfoSection } from "@/components/sections/StoreInfoSection";
import { TodayStatusSection } from "@/components/sections/TodayStatusSection";
import { UsageScenesSection } from "@/components/sections/UsageScenesSection";
import { getNews } from "@/lib/microcms";

export default async function Home() {
  const news = await getNews();

  return (
    <div className="bg-[#f7f0e8] pb-20 md:pb-0">
      <HeroSection />
      <GsapReveal>
        <TodayStatusSection />
      </GsapReveal>
      <GsapReveal>
        <BusinessDaysSection />
      </GsapReveal>
      <GsapReveal>
        <InstagramMoodSection />
      </GsapReveal>
      <GsapReveal>
        <ProductsSection />
      </GsapReveal>
      <GsapReveal>
        <AssuranceSection />
      </GsapReveal>
      <GsapReveal>
        <UsageScenesSection />
      </GsapReveal>
      <GsapReveal>
        <InstagramSection news={news} />
      </GsapReveal>
      <GsapReveal>
        <DemoValueSection />
      </GsapReveal>
      <GsapReveal>
        <StoreInfoSection />
      </GsapReveal>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
