"use client";
import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import strapi from "../../Configurations/Config.json";
import RichText from "@/Components/Common.jsx";
import BusinessGuidelines from "@/app/brand-guidelines/Components/BusinessGuidelines";
import { BRAND_TAGLINE } from "@/Configurations/CommonQuery";

export default function StrapiTitles(props: any) {
  const [userDetails, setUserDetails] = useState<UserData>();
  const config: AxiosRequestConfig = {
    method: "POST",
    url: strapi.strapigraphql,

    data: {
      query: props.query,
    },
  };

  async function fetchdata() {
    try {
      if (props.name == "/strapi-cms-development-service") {
        const response = await axios(config);
        setUserDetails(response.data.data.strapiDevelopment);
        console.log("this is data = ", response.data.data.strapiDevelopment);
      }
      if (props.name == "/strapi-plugin-development-service") {
        const response = await axios(config);
        setUserDetails(response.data.data.strapiPluginDevelopment);
      }
      if (props.name == "/strapi-upgrade-service") {
        const response = await axios(config);
        setUserDetails(response.data.data.strapiUpgrade);
      }
      if (props.name == "/strapi-migration-service") {
        const response = await axios(config);
        setUserDetails(response.data.data.strapiMig);
      }
      if (props.name == "/strapi-cms-consultation-service") {
        const response = await axios(config);
        setUserDetails(response.data.data.strapiConsultation);
      }
      if (props.name == "/strapi-support-maintenance-service") {
        const response = await axios(config);
        setUserDetails(response.data.data.strapiSupportAndMaintenance);
      }
      if (props.name == "/strapi-ui-design-service") {
        const response = await axios(config);
        setUserDetails(response.data.data.strapiUiUxDesign);
      }
      if (props.name == "/hire-strapi-developer") {
        const response = await axios(config);
        setUserDetails(response.data.data.hireStrapiDeveloper);
      }
      if (props.name == "/brand-guidelines") {
        const response = await axios(config);
        setUserDetails(response.data.data.brandGuideline);
      }
    } catch (err) {
      console.log("ERROR DURING AXIOS REQUEST", err);
    } finally {
    }
  }
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
      {props.name == "/brand-guidelines" ? (
        <section className='brand-component'>
          <div className='container'>
            <div className='brand-main'>
              <div className='brand-left'>
                <div className='brand-top'>
                  <h5>{userDetails?.data.attributes.strapi_title.data.attributes.StrapiTitle[0].Title}</h5>
                  <RichText
                    htmlContent={userDetails?.data.attributes.strapi_title.data.attributes.StrapiTitle[0].Description}
                  ></RichText>
                </div>
                <BusinessGuidelines name={props.name} query={BRAND_TAGLINE("business")} />
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className='strapi-quote-component'>
          <div className='container'>
            <h5>{userDetails?.data.attributes.strapi_title.data.attributes.StrapiTitle[0].Title}</h5>
            <RichText
              htmlContent={userDetails?.data.attributes.strapi_title.data.attributes.StrapiTitle[0].Description}
            ></RichText>
          </div>
        </section>
      )}
    </>
  );
}
