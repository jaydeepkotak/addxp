"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import CTA from "@/Components/CTA/CTA";
import { CTA_QUERY, RICHTEXT_QUERY } from "../Configurations/CommonQuery.js";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import RichText from "@/Components/Common.jsx";

// gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export default function Home() {
  const pathname = usePathname();

  const main = useRef();

  useLayoutEffect(() => {
    /* Main navigation */
    let panelsSection = document.querySelector("#panels"),
      panelsContainer = document.querySelector("#panels-container"),
      tween;

    /* Panels */
    const panels = gsap.utils.toArray("#panels-container .panel");
    tween = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: "#panels-container",
        toggleClass: { targets: ".tab-menu", className: "active" },
        pin: true,
        start: "top top",
        scrub: 1,
        // snap: {
        //   snapTo: 1 / (panels.length - 1),
        //   inertia: false,
        //   duration: { min: 0.1, max: 0.1 },
        // },
        end: () => "+=" + (panelsContainer.offsetWidth - innerWidth),
      },
    });
    // return () => ctx.revert(); // <- Cleanup!
  }, []);
  return (
    <>
      <section id="panels" className="slidePanles_Container">
        <div id="panels-container" style={{ width: "400%" }}>
          <article id="panel-1" className="panel full-screen">
            <div className="horizontal-scroll-section">
              <div className="scene">
                <div className="horizontal-scroll-section__content-wrapper wrapper">
                  <div
                    className="horizontal-scroll-section__content-section banner-js"
                    style={{
                      backgroundImage:
                        "url(https://www.addxp.com/src/images/banner-image1.jpg)",
                    }}
                  >
                    <div className="container">
                      <div className="banner-main">
                        <div className="banner-left">
                          <h1 className="d-none">
                            Digital Experience Solution
                          </h1>

                          <span className="large">
                            DIGITAL EXPERIENCE <br /> LIKE NEVER BEFORE
                          </span>

                          <h2>the future is here</h2>
                        </div>

                        <div className="banner-right mobile-banner-right">
                          <img
                            src="https://www.addxp.com/src/images/banner-mobile1.png"
                            alt="banner-mobile1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article id="panel-2" className="panel full-screen ">
            <div className="horizontal-scroll-section">
              <div className="scene">
                <div className="horizontal-scroll-section__content-wrapper wrapper">
                  <div
                    className="horizontal-scroll-section__content-section banner-js"
                    style={{
                      backgroundImage:
                        "url(https://www.addxp.com/src/images/banner-image2.jpg)",
                    }}
                  >
                    <div className="container">
                      <div className="banner-main">
                        <div className="banner-left">
                          <span className="large">
                            Want <span>user experience</span>
                            <br /> which is awesome?
                          </span>

                          <h2 className="text-white">
                            we got <br />
                            your back
                          </h2>

                          <a href="#connect-now" className="btn-defualt">
                            Let's Get You Started
                          </a>
                        </div>

                        <div className="banner-right">
                          <img
                            src="https://www.addxp.com/src/images/banner-image2.png"
                            alt="banner-image2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article id="panel-3" className="panel full-screen ">
            <div className="horizontal-scroll-section">
              <div className="scene">
                <div className="horizontal-scroll-section__content-wrapper wrapper">
                  <div
                    className="horizontal-scroll-section__content-section banner-js"
                    style={{
                      backgroundImage:
                        "url(https://www.addxp.com/src/images/banner-image3.jpg)",
                    }}
                  >
                    <div className="container">
                      <div className="banner-main">
                        <div className="banner-left">
                          <span className="large">
                            Leverage The <br />
                            <span>power</span> of
                          </span>

                          <h2 className="text-white">engaging content</h2>

                          <a href="#connect-now" className="btn-defualt">
                            Meet Our Experts
                          </a>
                        </div>

                        <div className="banner-right">
                          <img
                            src="https://www.addxp.com/src/images/banner-image3.png"
                            alt="banner-image3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article id="panel-4" className="panel full-screen ">
            <div className="horizontal-scroll-section">
              <div className="scene">
                <div className="horizontal-scroll-section__content-wrapper wrapper">
                  <div
                    className="horizontal-scroll-section__content-section banner-js"
                    style={{
                      backgroundImage:
                        "url(https://www.addxp.com/src/images/banner-image4.jpg)",
                    }}
                  >
                    <div className="container">
                      <div className="banner-main">
                        <div className="banner-left">
                          <span className="large">
                            Build the
                            <br /> <span>future</span> of your
                          </span>

                          <h2 className="text-white">commerce business</h2>

                          <a href="#connect-now" className="btn-defualt">
                            Discover now
                          </a>
                        </div>

                        <div className="banner-right">
                          <img
                            src="https://www.addxp.com/src/images/banner-image4.png"
                            alt="banner-image4"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="tab-menu">
          <div className="container">
            <ul>
              <li>
                <a href="#slider-verticle">Solutions</a>
              </li>

              <li>
                <a href="#slider-component">Technologies</a>
              </li>

              <li>
                <a href="#latest-news">Insights</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="navigate-component">
        <div className="">
          <h5>Navigate our website</h5>

          <div className="navigate-main">
            <div className="navigate-items">
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <a href="contentful-cms-services" className="fadeout-images">
                <Image
                  src="http://localhost:1337/uploads/contentful_text_cff22eda10.svg"
                  width={0}
                  height={0}
                  alt="contentful-text"
                  className="circle"
                />
              </a>
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
            </div>

            <div className="navigate-items">
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <a href="strapi-cms-services" className="fadeout-images">
                <Image
                  src="http://localhost:1337/uploads/strapi_text_2c75e0c375.svg"
                  width={0}
                  height={0}
                  alt="strapi-text"
                  className="circle"
                />
              </a>
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
            </div>

            <div className="navigate-items">
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <a href="umbraco-development-service" className="fadeout-images">
                <Image
                  src="http://localhost:1337/uploads/umbraco_3581870810.svg"
                  width={0}
                  height={0}
                  alt="umbraco"
                  className="circle"
                />
              </a>
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
            </div>

            <div className="navigate-items">
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
            </div>

            <div className="navigate-items">
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <a href="virto-commerce-services" className="fadeout-images">
                <Image
                  src="http://localhost:1337/uploads/virto_commerce_text_242e8d2f46.svg"
                  width={0}
                  height={0}
                  alt="virto-commerce-text"
                  className="circle"
                />
              </a>
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
            </div>

            <div className="navigate-items">
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <a href="contentstack-cms-services" className="fadeout-images">
                <Image
                  src="http://localhost:1337/uploads/contentstack_text_97d7aafe5d.svg"
                  width={0}
                  height={0}
                  alt="contentstack-text"
                  className="circle"
                />
              </a>
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
            </div>

            <div className="navigate-items">
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <a href="kentico-development-service" className="fadeout-images">
                <Image
                  src="http://localhost:1337/uploads/kentico_fb8eb67ef7.svg"
                  width={0}
                  height={0}
                  alt="kentico"
                  className="circle"
                />
              </a>
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
            </div>

            <div className="navigate-items">
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
              <Image
                src="http://localhost:1337/uploads/add_XP_logo_2d9bf8ee4f.svg"
                width={0}
                height={0}
                alt="logo"
                className="circle"
              />
            </div>
          </div>
        </div>
      </section>
      <CTA name={pathname} query={CTA_QUERY("home")} />
      {/* <RichText
        htmlContent={
          userDetails?.data.attributes.richtext.data.attributes.Richtext
            .Description
        }
      ></RichText> */}
    </>
  );
}
