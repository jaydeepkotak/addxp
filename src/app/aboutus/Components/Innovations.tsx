"use client";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import axios, { AxiosRequestConfig } from "axios";
import strapi from "../../../Configurations/Config.json";
import { INNOVATIONS } from "../Query/AboutUsQuery.js";
import RichText from "@/Components/Common";

export default function Innovations() {
  const [userDetails, setUserDetails] = useState<UserData>();
  const config: AxiosRequestConfig = {
    method: "POST",
    url: strapi.strapigraphql,

    data: {
      query: INNOVATIONS,
    },
  };

  async function fetchdata() {
    try {
      const response = await axios(config);
      setUserDetails(response.data.data.innovations);
    } catch (err) {
      console.log("ERROR DURING AXIOS REQUEST", err);
    } finally {
    }
  }
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <section className="weekday-component static-component" id="who-are-we">
      <div className="container">
        {userDetails?.data.map((item: any) =>
          item.attributes.Innovation.map((subitem: any) => (
            <div className="row align-items-center" key={subitem.id}>
              <div className="col-md-5">
                <div className="quote-image">
                  <img
                    src={
                      strapi.strapihost + subitem?.Images.data[0].attributes.url
                    }
                    alt="static-image"
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="weekday-desc">
                  <span className="tag-line">{subitem.SubTitle}</span>
                  <h5>{subitem.Title}</h5>
                  <div className="quote-image">
                    <img
                      src={
                        strapi.strapihost +
                        subitem?.Images.data[0].attributes.url
                      }
                      className="static-image-mobile"
                    />
                  </div>
                  <RichText htmlContent={subitem.Body}></RichText>
                  <div className="row">
                    {item.attributes.counter.data.map((subitemcnt: any) =>
                      subitemcnt.attributes.AboutCounter.map(
                        (childcnt: any) => (
                          <div className="col-lg-3 stats" key={childcnt.id}>
                            <div className="counter-box">
                              <h5 className="counting">
                                <CountUp
                                  start={0}
                                  end={childcnt.counter}
                                  enableScrollSpy={true}
                                  scrollSpyDelay={3}
                                >
                                  {({ countUpRef, start }) => (
                                    <span ref={countUpRef} />
                                  )}
                                </CountUp>
                              </h5>
                              <span className="plus">+</span>
                            </div>
                            <RichText
                              htmlContent={childcnt.CounterDesc}
                            ></RichText>
                          </div>
                        )
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
