import { SiteHeader } from "@/components/sites/muli/SiteHeader";
import { Hero } from "@/components/sites/muli/Hero";
import { LacquerBanner } from "@/components/sites/muli/LacquerBanner";
import { ProductCarousel } from "@/components/sites/muli/ProductCarousel";
import { Manifesto } from "@/components/sites/muli/Manifesto";
import { News } from "@/components/sites/muli/News";
import { Stores } from "@/components/sites/muli/Stores";
import { SiteFooter } from "@/components/sites/muli/SiteFooter";
import { BackToTop } from "@/components/sites/muli/BackToTop";

/** 木里木外 MULI 首页复刻（源站 https://www.muli.group/） */
export default function Home() {
  return (
    <main className="w-full overflow-x-clip bg-white pt-[59px] lg:pt-0">
      <SiteHeader />
      <Hero />
      <LacquerBanner />
      <ProductCarousel />
      <Manifesto />
      <News />
      <Stores />
      <SiteFooter />
      <BackToTop />
    </main>
  );
}
