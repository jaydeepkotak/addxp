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

export default function strapicmsconsultationservice() {
  const pathname = usePathname();
  return (
    <>
      <Banner name={pathname} query={BANNER_QUERY("strapiConsultation")} />
      <StrapiTitles
        name={pathname}
        query={STRAPI_SUBTITLE_QUERY("strapiConsultation")}
      />
      <ServicesDetails
        name={pathname}
        query={SERVICES_DETILS_QUERY("strapiConsultation")}
      />
      <CTA name={pathname} query={CTA_QUERY("strapiConsultation")} />
      <StrapiRelatedServices
        name={pathname}
        query={STRAPI_RELATED_SERVICES("strapiConsultation")}
      />
    </>
  );
}
