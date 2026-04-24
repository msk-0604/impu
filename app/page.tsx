import { GsapReveal } from "@/components/GsapReveal";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { BusinessDaysSection } from "@/components/sections/BusinessDaysSection";
import { Footer } from "@/components/sections/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { AssuranceSection } from "@/components/sections/AssuranceSection";
import { StoreInfoSection } from "@/components/sections/StoreInfoSection";
import { getNews } from "@/lib/microcms";

export default async function Home() {
  const news = await getNews();

  return (
    <div className="bg-[#fffcf8] pb-20 md:pb-0">
      <HeroSection />
      <GsapReveal>
        <BusinessDaysSection />
      </GsapReveal>
      <GsapReveal>
        <ProductsSection />
      </GsapReveal>
      <GsapReveal>
        <AssuranceSection />
      </GsapReveal>
      <GsapReveal>
        <InstagramSection news={news} />
      </GsapReveal>
      <GsapReveal>
        <StoreInfoSection />
      </GsapReveal>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
