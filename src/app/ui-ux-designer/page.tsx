"use client";
import { usePathname } from "next/navigation";
import { BANNER_QUERY, UI_UX_DETAILS } from "@/Configurations/CommonQuery";
import Banner from "@/Components/Banner/Banner";
import RichText from "@/Components/Common";
import strapi from "../../Configurations/Config.json";
import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";

export default function UiuxDesigner() {
  const [userDetails, setUserDetails] = useState<UserData>();
  const config: AxiosRequestConfig = {
    method: "POST",
    url: strapi.strapigraphql,

    data: {
      query: UI_UX_DETAILS,
    },
  };
  async function fetchdata() {
    try {
      const response = await axios(config);
      setUserDetails(response.data.data.uiUxDesigner);
    } catch (err) {
      console.log("ERROR DURING AXIOS REQUEST", err);
    } finally {
    }
  }
  useEffect(() => {
    fetchdata();
  }, []);
  const pathname = usePathname();
  return (
    <>
      <Banner name={pathname} query={BANNER_QUERY("uiUxDesigner")} />
      <section className='breadcum'>
        <div className='container'>
          <ul>
            <li>
              <a href='career'>Career</a>
            </li>
            <li>{">"}</li>
            <li>UI/UX Designer</li>
          </ul>
        </div>
      </section>
      {/* UI/UX Details Component */}

      <RichText htmlContent={userDetails?.data.attributes.Details.Description}></RichText>
    </>
  );
}
