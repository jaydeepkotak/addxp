"use client";
import { usePathname } from "next/navigation";
import Banner from "@/Components/Banner/Banner";
import Sitemap from "./Components/Sitemap";
import { BANNER_QUERY } from "@/Configurations/CommonQuery";

export default function privatepolicy() {
  const pathname = usePathname();
  return (
    <>
      <Banner name={pathname} query={BANNER_QUERY("sitemap")} />
      <Sitemap />
    </>
  );
}
