"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { ChevronDown } from "react-bootstrap-icons";
import strapi from "../../Configurations/Config.json";
import axios, { AxiosRequestConfig } from "axios";
import { HEADER } from "../Navigations/Query/NavigationQuery.js";

import React from "react";
import RichText from "../Common";

export default function AddXpHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  useEffect(() => {
    document.body.classList.toggle("show_form", isOpen);
  }, [isOpen]);
  const [userDetails, setUserDetails] = useState<UserData>();
  const config: AxiosRequestConfig = {
    method: "POST",
    url: strapi.strapigraphql,

    data: {
      query: HEADER,
    },
  };

  async function fetchdata() {
    try {
      const response = await axios(config);
      setUserDetails(response.data.data.headers);
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
      <header>
        <Navbar expand='lg' className='navbar'>
          {userDetails?.data.map((item: any) => (
            // eslint-disable-next-line react/jsx-key
            <Container key={item.id}>
              <Navbar.Brand href='/'>
                <img
                  src={strapi.strapihost + item.attributes.Logo.data.attributes.url}
                  alt={item.attributes.Logo.data.attributes.alternativeText}
                />
              </Navbar.Brand>
              <div className='nav-right'>
                <Navbar.Toggle aria-controls='navbarScroll' />
                <Navbar.Collapse id='navbarScroll'>
                  <div className='mobile-menu-desc'>
                    {}
                    <img
                      src={strapi.strapihost + item.attributes.MobileView.Images.data[0].attributes.url}
                      alt={item.attributes.MobileView.Images.data[0].attributes.alternativeText}
                    />
                    <RichText htmlContent={item.attributes.MobileView.Description} />
                    <div className='mobile-desc-image'>
                      <img
                        src={strapi.strapihost + item.attributes.MobImage.data.attributes.url}
                        alt={item.attributes.MobImage.data.attributes.alternativeText}
                      />
                    </div>
                  </div>
                  <Nav className='ms-auto mb-2 mb-lg-0' style={{ maxHeight: "100px" }}>
                    <NavDropdown
                      title={
                        <span>
                          {item.attributes.ServiceTitle}
                          {<ChevronDown className='bi-chevron-down' />}
                        </span>
                      }
                      className='position-static'
                      id='navbarScrollingDropdown'
                    >
                      <div className='service-menu-main'>
                        <div className='row mega-content'>
                          <div className='left-section d-md-none'>
                            <h2 className='title-text'>
                              <i className='bi bi-chevron-down pt-1'></i>
                              Services
                            </h2>

                            <p className='content'>
                              Take your pick from these 6 Services and revolutionize your business.
                            </p>
                            <img src='src/images/header-services.png' alt='header-services' />
                          </div>
                          {item.attributes.Services.map((service: any) => (
                            <div className='col-md-6 service-menu' key={service.id}>
                              <Link href={service.Link.href} className='tech_box pb-30'>
                                <img
                                  src={strapi.strapihost + service.Image.data?.attributes.url}
                                  alt={service.Image.data?.attributes.url}
                                />
                                <RichText htmlContent={service.Description}></RichText>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </NavDropdown>
                    <NavDropdown
                      title={
                        <span>
                          {item.attributes.CompanyTitle} {<ChevronDown className='bi-chevron-down' />}
                        </span>
                      }
                      className='dropdown position-static'
                      id='navbarScrollingDropdown'
                    >
                      <div className='service-menu-main'>
                        <div className='row mega-content company-menu'>
                          <div className='col-md-5'>
                            <div className='left-section'>
                              <h2 className='title-text mobile-text'>
                                <i className='bi bi-chevron-down pt-1'></i>
                                {item.attributes.CompanyTitle}
                              </h2>

                              <div className='hide-mobile'>
                                <img
                                  src={strapi.strapihost + item.attributes.Company.Image.data.attributes.url}
                                  alt={item.attributes.Company.Image.data.attributes.alternativeText}
                                />
                                <h3 className='secondary-title pt-2'>{item.attributes.Company.Title}</h3>
                                <RichText htmlContent={item.attributes.Company.Description}></RichText>
                                <Link href={item.attributes.Company.Link.href} className='btn-defualt'>
                                  {item.attributes.Company.Link.label}
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className='col-md-7'>
                            <div className='row mt-md-4'>
                              {item.attributes.CompanyDetails.map((details: any) => (
                                <div className='col-md-6' key={details.id}>
                                  <Link href={details.Link.href} className='compnay-overview pb-30'>
                                    <div className='d-flex'>
                                      <i className={details.ClassIcon.replaceAll("_", "-")}></i>
                                      <span className='secondary-title'>{details.Detail.Title}</span>
                                    </div>
                                    <RichText htmlContent={details.Detail.Description}></RichText>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </NavDropdown>
                    <NavDropdown
                      title={
                        <span>
                          {item.attributes.InsightTitle}
                          {<ChevronDown className='bi-chevron-down' />}
                        </span>
                      }
                      className='dropdown position-static'
                      id='navbarScrollingDropdown'
                    >
                      <div className='service-menu-main'>
                        <div className='row mega-content blog-menu'>
                          <div className='col-md-8'>
                            <div className='left-section'>
                              <h2 className='title-text mobile-text'>
                                <i className='bi bi-chevron-down pt-1'></i>
                                {item.attributes.InsightTitle}
                              </h2>
                              <h2 className='title-text'>
                                <Link href={item.attributes.Insights[0].Link.href}>
                                  {item.attributes.Insights[0].Link.label}
                                  <i className='chevron-right'></i>
                                </Link>
                              </h2>
                              <RichText htmlContent={item.attributes.Insights[0].Description} />
                              <span className='label'>{item.attributes.Insights[0].Title}</span>
                              <div className='blog-overview'>
                                <ul>
                                  <li>
                                    <a href='umbraco-version-history-and-features.html'>
                                      <div className='blog-image'>
                                        <img
                                          src='src/images/umbraco-version-history-and-features-header.png'
                                          alt='umbraco-version-history-and-features-header'
                                        />
                                      </div>
                                      <p className='content'>Umbraco Version History and Features</p>
                                      <span className='blog-link'>
                                        Read Now
                                        <i className='arrow-right'>
                                          <img src='src/images/blog-icon-arrow.svg' alt='blog-icon-arrow' />
                                        </i>
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href='kentico-version-history-and-features.html'>
                                      <div className='blog-image'>
                                        <img
                                          src='src/images/kentico-version-history-and-features-header.png'
                                          alt='kentico-version-history-and-features-detail-page-header'
                                        />
                                      </div>
                                      <p className='content'>Kentico Version History and Features</p>
                                      <span className='blog-link'>
                                        Read Now
                                        <i className='arrow-right'>
                                          <img src='src/images/blog-icon-arrow.svg' alt='blog-icon-arrow' />
                                        </i>
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href='the-role-of-content-in-enhancing-digital-experiences.html'>
                                      <div className='blog-image'>
                                        <img
                                          src='src/images/the-role-of-content-in-enhancing-digital-experiences-header.webp'
                                          alt='the-role-of-content-in-enhancing-digital-experiences'
                                        />
                                      </div>
                                      <p className='content'>The Role of Content in enhancing Digital Experiences</p>
                                      <span className='blog-link'>
                                        Read Now
                                        <i className='arrow-right'>
                                          <img src='src/images/blog-icon-arrow.svg' alt='blog-icon-arrow' />
                                        </i>
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className='col-md-4'>
                            {/* <a
                                href="blogs-insights.html"
                                className="compnay-overview pb-30 mobile-blog-menu insight-menu"
                              >
                                <div className="d-flex">
                                  <i className="user-edit-icon"></i>
                                  <span className="secondary-title">Blogs</span>
                                </div>
                                <p className="content">
                                  Latest news, industry insights, tech advice
                                  and much more for you to explore.
                                </p>
                              </a> */}
                            {item.attributes.InsightsDetail.map((insight: any) => (
                              // eslint-disable-next-line react/jsx-key
                              <Link
                                key={insight.id}
                                href={insight.Link.href}
                                className='compnay-overview pb-30 insight-menu'
                              >
                                <div className='d-flex'>
                                  <i className={insight.ClassIcon.replaceAll("_", "-")}></i>
                                  <span className='secondary-title'>{insight.Detail.Title}</span>
                                </div>
                                <RichText htmlContent={insight.Detail.Description} />
                              </Link>
                            ))}
                            {/* <a
                                href="brand-guidelines.html"
                                className="compnay-overview pb-30 insight-menu"
                              >
                                <div className="d-flex">
                                  <i className="user-brand"></i>
                                  <span className="secondary-title">
                                    Brand Guidelines
                                  </span>
                                </div>
                                <p className="content">
                                  Read our brand guidelines for ensuring you use
                                  our brand elements right!
                                </p>
                              </a>
                              <a
                                href="press-release.html"
                                className="compnay-overview pb-30 insight-menu"
                              >
                                <div className="d-flex">
                                  <i className="user-release-icon"></i>
                                  <span className="secondary-title">
                                    Press Release
                                  </span>
                                </div>
                                <p className="content">
                                  All of Addxp’s important announcements, news
                                  and press releases.
                                </p>
                              </a> */}
                          </div>
                        </div>
                      </div>
                    </NavDropdown>
                  </Nav>
                  <div className='form-icon'>
                    <a href='javascript:void(0)' className='icon-rocket' onClick={toggleForm}>
                      <img src='https://www.addxp.com/src/images/rocket-icon.svg' alt='rocket-icon' className='icon' />
                      <img
                        src='https://www.addxp.com/src/images/plane-line-svg.png'
                        alt='plane-line-svg'
                        className='icon-hover'
                      />
                    </a>
                    <div className='slide-form'>
                      <a href='javascript:void(0)' className='slide-form-close' onClick={toggleForm}>
                        Close
                        <img src='src/images/slide-close.svg' alt='slide-close' />
                      </a>
                      <h5>Please enter your details</h5>
                      <p>
                        We would love to have a conversation and discuss digital experiences in detail. Fill up the form
                        below and we’d be available at your earliest convenience.
                      </p>
                      <form id='HeaderContactUs'>
                        <div className='row'>
                          <div className='col'>
                            <div className='form-floating form-group'>
                              <input
                                type='text'
                                className='form-control'
                                id='HUserName'
                                placeholder='Full Name'
                                required
                              />
                              <label htmlFor='HUserName'>Full Name</label>
                            </div>
                          </div>

                          <div className='col'>
                            <div className='form-floating form-group'>
                              <input
                                type='email'
                                className='form-control'
                                id='HUserEmailID'
                                placeholder='Business Email'
                                required
                              />
                              <label htmlFor='HUserEmailID'>Business Email</label>
                            </div>
                          </div>

                          <div className='col-12'>
                            <div className='form-floating form-group'>
                              <input
                                type='text'
                                className='form-control'
                                id='HUserCompanyName'
                                placeholder='Company Name'
                                required
                              />
                              <label htmlFor='HUserCompanyName'>Company Name</label>
                            </div>
                          </div>

                          <div className='col-12'>
                            <div className='form-floating form-group'>
                              <input
                                type='text'
                                className='form-control'
                                id='HUserRequirements'
                                placeholder='Company Name'
                                required
                              />
                              <label htmlFor='HUserRequirements'>Describe Your Requirements (Optional)</label>
                            </div>

                            <div className='form-check d-flex'>
                              <input className='form-check-input' type='checkbox' value='' id='form2Example33' />
                              <label className='form-check-label' htmlFor='form2Example33'>
                                I agree to receive future communications from Addxp, in accordance with the
                                <a href='privacy-policy.html'>Privacy Policy</a> &
                                <a href='terms-conditions.html'>Terms Of Use</a>
                              </label>
                            </div>
                          </div>

                          <button
                            type='submit'
                            id='submit'
                            data-form-name='HeaderContactUsData'
                            className='btn btn-defualt btn-block'
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </Navbar.Collapse>
              </div>
            </Container>
          ))}
        </Navbar>
      </header>
    </>
  );
}
