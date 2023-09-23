"use client";
import { usePathname } from "next/navigation";
import { BANNER_QUERY } from "@/Configurations/CommonQuery";
import Banner from "@/Components/Banner/Banner";

export default function AboutUs() {
  const pathname = usePathname();
  return (
    <>
      <Banner name={pathname} query={BANNER_QUERY("pressRelease")} />
    </>
  );
}
