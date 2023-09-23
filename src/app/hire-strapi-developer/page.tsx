"use client";
import { usePathname } from "next/navigation";
import CTA from "@/Components/CTA/CTA";
import {
  BANNER_QUERY,
  CTA_QUERY,
  SERVICES_DETILS_QUERY,
  STRAPI_RELATED_SERVICES,
} from "@/Configurations/CommonQuery";
import Banner from "@/Components/Banner/Banner";
import ServicesDetails from "@/Components/Services/ServicesDetails";
import StrapiRelatedServices from "@/Components/Services/StrapiRelatedServices";

export default function hirestrapideveloper() {
  const pathname = usePathname();
  return (
    <>
      <Banner name={pathname} query={BANNER_QUERY("hireStrapiDeveloper")} />
      <ServicesDetails
        name={pathname}
        query={SERVICES_DETILS_QUERY("hireStrapiDeveloper")}
      />
      <CTA name={pathname} query={CTA_QUERY("hireStrapiDeveloper")} />
      <StrapiRelatedServices
        name={pathname}
        query={STRAPI_RELATED_SERVICES("hireStrapiDeveloper")}
      />
    </>
  );
}
