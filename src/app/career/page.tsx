"use client";
import { usePathname } from "next/navigation";
import Banner from "@/Components/Banner/Banner";
import ActivityComponent from "./Components/ActivityComponent";
import CareerComponent from "./Components/CareerComponent";
import Experience from "./Components/Experience";
import {
  BANNER_NAV_QUERY,
  BANNER_QUERY,
  CAREER_POSITION,
} from "@/Configurations/CommonQuery";
import BannerNav from "@/Components/Banner/BannerNav";

export default function Career() {
  const pathname = usePathname();
  return (
    <>
      <Banner name={pathname} query={BANNER_QUERY("career")} />
      <BannerNav name={pathname} query={BANNER_NAV_QUERY("career")} />
      <Experience />
      <CareerComponent name={pathname} query={CAREER_POSITION("career")} />
      {/* <ActivityComponent /> */}
    </>
  );
}
