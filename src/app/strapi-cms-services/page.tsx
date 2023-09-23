"use client";
import { usePathname } from "next/navigation";
import ServiceTitle from "../../Components/Services/ServiceTitle";
import CTA from "@/Components/CTA/CTA";
import ServiceExperience from "@/Components/Services/ServiceExperince";
import {
  BANNER_QUERY,
  CTA_QUERY,
  OUR_SERVICES_QUERY,
  SERVICES_DETILS_QUERY,
  SERVICE_EXP_QUERY,
  TITIE_QUERY,
} from "@/Configurations/CommonQuery";
import OurServices from "@/Components/Services/OurServices";
import Banner from "@/Components/Banner/Banner";
import ServicesDetails from "@/Components/Services/ServicesDetails";
import AccordionComponent from "@/Components/Accordion/Accordion";

export default function StrapiCMS() {
  const pathname = usePathname();
  return (
    <>
      <Banner name={pathname} query={BANNER_QUERY("strapiCmsService")} />
      <ServiceTitle name={pathname} query={TITIE_QUERY("strapiCmsService")} />
      <OurServices name={pathname} query={OUR_SERVICES_QUERY("strapiCmsService")} />
      <CTA name={pathname} query={CTA_QUERY("strapiCmsService")} />
      <ServiceExperience name={pathname} query={SERVICE_EXP_QUERY("strapiCmsService")} />
      <ServicesDetails name={pathname} query={SERVICES_DETILS_QUERY("strapiCmsService")} />
      <AccordionComponent />
    </>
  );
}
