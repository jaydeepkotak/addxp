"use client";
import { usePathname } from "next/navigation";

import CTA from "@/Components/CTA/CTA";

import {
  BANNER_QUERY,
  CTA_QUERY,
  SERVICES_DETILS_QUERY,
  STRAPI_RELATED_SERVICES,
  STRAPI_SUBTITLE_QUERY,
} from "@/Configurations/CommonQuery";

import Banner from "@/Components/Banner/Banner";
import ServicesDetails from "@/Components/Services/ServicesDetails";
import StrapiTitles from "@/Components/Services/StrapiTitles";
import StrapiRelatedServices from "@/Components/Services/StrapiRelatedServices";

export default function strapiplugindevelopmentservice() {
  const pathname = usePathname();
  return (
    <>
      <Banner name={pathname} query={BANNER_QUERY("strapiPluginDevelopment")} />
      <StrapiTitles
        name={pathname}
        query={STRAPI_SUBTITLE_QUERY("strapiPluginDevelopment")}
      />
      <ServicesDetails
        name={pathname}
        query={SERVICES_DETILS_QUERY("strapiPluginDevelopment")}
      />
      <CTA name={pathname} query={CTA_QUERY("strapiPluginDevelopment")} />
      <StrapiRelatedServices
        name={pathname}
        query={STRAPI_RELATED_SERVICES("strapiPluginDevelopment")}
      />
    </>
  );
}
