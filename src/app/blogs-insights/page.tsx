"use client";

import TabMenu from "./Components/TabMenu";

import { usePathname } from "next/navigation";
import Banner from "@/Components/Banner/Banner";
import { BANNER_QUERY } from "@/Configurations/CommonQuery";

export default function BlogsInsights() {
  const pathname = usePathname();
  return (
    <div className='blog-listing'>
      <Banner name={pathname} query={BANNER_QUERY("blogsInsight")} />
      {/*<BannerNav name={pathname} query={BANNER_NAV_QUERY("career")} /> */}
      <TabMenu />
    </div>
  );
}
