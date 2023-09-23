"use client";
import ServiceTitle from "../../Components/Services/ServiceTitle";
import {
  BANNER_QUERY,
  CTA_QUERY,
  OUR_SERVICES_QUERY,
  SERVICES_DETILS_QUERY,
  SERVICE_EXP_QUERY,
  TITIE_QUERY,
} from "@/Configurations/CommonQuery";
import CTA from "@/Components/CTA/CTA";
import ServiceExperience from "@/Components/Services/ServiceExperince";

import { usePathname } from "next/navigation";
import OurServices from "@/Components/Services/OurServices";
import Banner from "@/Components/Banner/Banner";
import ServicesDetails from "@/Components/Services/ServicesDetails";
export default function privatepolicy() {
  const pathname = usePathname();
  return (
    <>
      <Banner name={pathname} query={BANNER_QUERY("contentfulCmsService")} />
      <ServiceTitle name={pathname} query={TITIE_QUERY("contentfulCmsService")} />
      <OurServices name={pathname} query={OUR_SERVICES_QUERY("contentfulCmsService")} />
      <CTA name={pathname} query={CTA_QUERY("contentfulCmsService")} />
      <ServiceExperience name={pathname} query={SERVICE_EXP_QUERY("contentfulCmsService")} />
      <ServicesDetails name={pathname} query={SERVICES_DETILS_QUERY("contentfulCmsService")} />
    </>
  );
}
