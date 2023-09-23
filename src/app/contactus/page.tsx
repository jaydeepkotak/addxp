"use client";
import { usePathname } from "next/navigation";
import Banner from "@/Components/Banner/Banner";
import Locations from "./Components/Locations";
import WeekDays from "./Components/WeekDays";
import { BANNER_NAV_QUERY, BANNER_QUERY } from "@/Configurations/CommonQuery";
import BannerNav from "@/Components/Banner/BannerNav";

export default function ContactUs() {
  const pathname = usePathname();
  return (
    <>
      <Banner name={pathname} query={BANNER_QUERY("contactUs")} />
      <BannerNav name={pathname} query={BANNER_NAV_QUERY("contactUs")} />
      <WeekDays />
      <Locations />
    </>
  );
}
