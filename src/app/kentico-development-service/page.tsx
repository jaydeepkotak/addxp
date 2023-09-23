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

export default function KenticoCMS() {
  const pathname = usePathname();
  return (
    <>
      <Banner name={pathname} query={BANNER_QUERY("kenticoDevelopmentService")} />
      <ServiceTitle name={pathname} query={TITIE_QUERY("kenticoDevelopmentService")} />
      <OurServices name={pathname} query={OUR_SERVICES_QUERY("kenticoDevelopmentService")} />
      <CTA name={pathname} query={CTA_QUERY("kenticoDevelopmentService")} />
      <ServiceExperience name={pathname} query={SERVICE_EXP_QUERY("kenticoDevelopmentService")} />
      <ServicesDetails name={pathname} query={SERVICES_DETILS_QUERY("kenticoDevelopmentService")} />
    </>
  );
}
