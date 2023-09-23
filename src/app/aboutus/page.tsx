"use client";
import { usePathname } from "next/navigation";
import BrandValues from "./Components/BrandValues";
import DirectorMessage from "./Components/DirectorMessage";
import Misionvision from "./Components/Misionvision";
import Innovations from "./Components/Innovations";
import Empowerments from "./Components/Empowerments";
import CTA from "@/Components/CTA/CTA";
import {
  BANNER_NAV_QUERY,
  BANNER_QUERY,
  CTA_QUERY,
} from "@/Configurations/CommonQuery";
import path from "path";
import Banner from "@/Components/Banner/Banner";
import BannerNav from "@/Components/Banner/BannerNav";

export default function AboutUs() {
  const pathname = usePathname();
  return (
    <>
      <Banner name={pathname} query={BANNER_QUERY("aboutUs")} />
      <BannerNav name={pathname} query={BANNER_NAV_QUERY("aboutUs")} />
      <DirectorMessage />
      <Empowerments />
      <Misionvision />
      <CTA name={pathname} query={CTA_QUERY("aboutUs")} />
      <BrandValues />
      <Innovations />
    </>
  );
}
