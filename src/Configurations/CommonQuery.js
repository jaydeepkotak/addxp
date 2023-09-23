export const CTA_QUERY = (parameter) => `
query{
 ${parameter}{
  data{
    id
    attributes{
       PageTitle
      Slug
      cta{
        data{
          id
          attributes{
            CTAInfo{
              id
              Title
              Description
                Body
              Images{
                data{
                  id
                  attributes{
                    url
                    alternativeText
                  }
                }
              }
            }
            CTALinks{
              id
              href
              label
            }
          }
        }
      }
    }
  }
}
}
`;
export const TITIE_QUERY = (parameter) => `
query{
  ${parameter}{
    data{
      id
      attributes{
        PageTitle
        Slug
        service_title{
          data{
            id
            attributes{
              ServiceTitle{
                id
                Title
                SubTitle
                Body
                Description
                Images{
                  data{
                    id
                    attributes{
                      alternativeText
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;
export const SERVICE_EXP_QUERY = (parameter) => `
query{
   ${parameter}{
    data{
      id
      attributes{
        PageTitle
        Slug
        service_experience{
          data{
            id
            attributes{
              ComponentInfo{
                id
                Title
                SubTitle
              }
              ExperienceList{
                id
                Title
                Description
              }
            }
          }
        }
      }
    }
  }
}
`;
export const OUR_SERVICES_QUERY = (parameter) => `
query{
 ${parameter}{
    data{
      id
      attributes{
        PageTitle
        Slug
        our_service{
          data{
            id
            attributes{
              ComponentInfo{
                id
                Title
                SubTitle
              }
              ServiceList{
                id
                Body
                Summary
                Links{
                  id
                  href
                  label
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

export const BANNER_QUERY = (parameter) => `
query{
  ${parameter}{
    data{
      id
      attributes{
        PageTitle
        Slug
        banner{
          data{
            id
            attributes{
              Banner{
                id
                Title
                Description
              }
              BannerLink{
                id
                href
                label
              }
              backgroundImg{
                data{
                  id
                  attributes{
                    url
                    alternativeText
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;
export const SERVICES_DETILS_QUERY = (parameter) => `
query{
  ${parameter}{
    data{
      id
      attributes{
        PageTitle
        Slug
        experience{
          data{
            id
            attributes{
              ServiceTitle{
                id
                Title
                SubTitle
              }
              Experience{
                id
                Title
                SubTitle
                Body
                Description
                Images{
                  data{
                    attributes{
                      url
                      alternativeText
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

export const BANNER_NAV_QUERY = (parameter) => `
query{
  ${parameter}{
    data{
      id
      attributes{
        PageTitle
        Slug
        banner_navigation{
          data{
            id
            attributes{
              NavLink{
                id
                href
                label
              }
            }
          }
        }
      }
    }
  }
}
`;

export const CAREER_POSITION = (parameter) => `
query{
  ${parameter}{
    data{
      id
      attributes{
        PageTitle
        Slug
        AboutLink{
          id
          href
          label
        }
        positions{
          data{
            id
            attributes{
              EventTitle
              Info{
                __typename
                ... on ComponentReuseCard{
                  id
                  LogoTitle
                  LogoLink{
                    id
                    href
                    label
                  }
                  Icon{
                    data{
                      attributes{
                        alternativeText
                        url
                      }
                    }
                  }
                  HoverIcon{
                    data{
                      id
                      attributes{
                        alternativeText
                        url
                      }
                    }
                  }
                  AerrowIcon{
                    data{
                      id
                      attributes{
                        alternativeText
                        url
                      }
                    }
                  }
                  TitleIcon{
                    id
                    Title
                    Icon{
                      data{
                        id
                        attributes{
                          alternativeText
                          url
                        }
                      }
                    }
                  }
                }
              }
              positions{
                data{
                  id
                  attributes{
                    EventTitle
                    Info{
                      __typename
                      ... on ComponentReuseCard{
                         LogoTitle
                         id
                  LogoLink{
                    id
                    href
                    label
                  }
                  Icon{
                    data{
                      attributes{
                        alternativeText
                        url
                      }
                    }
                  }
                  HoverIcon{
                    data{
                      id
                      attributes{
                        alternativeText
                        url
                      }
                    }
                  }
                  AerrowIcon{
                    data{
                      id
                      attributes{
                        alternativeText
                        url
                      }
                    }
                  }
                  TitleIcon{
                    id
                    Title
                    Icon{
                      data{
                        id
                        attributes{
                          alternativeText
                          url
                        }
                      }
                    }
                  }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;
export const RICHTEXT_QUERY = `
query{
  home{
    data{
      id
      attributes{
         richtext{
          data{
            id
            attributes{
              Richtext{
                id
                Description
              }
            }
          }
        }
      }
    }
  }
}`;

export const THANKS_QUERY = `
query{
  thankYou{
    data{
      id
      attributes{
        PageTitle
        Slug
        ThankYou{
          id
          Title
          SubTitle
          Body
          Description
          Images{
            data{
              id
              attributes{
                alternativeText
                url
              }
            }
          }
        }
      }
    }
  }
}`;
export const STRAPI_SUBTITLE_QUERY = (parameter) => `
query{
  ${parameter}{
    data{
      id
      attributes{
        strapi_title{
          data{
            id
            attributes{
              StrapiTitle{
                id
                Title
                Description
              }
            }
          }
        }
      }
    }
  }
}
`;

export const BLOG_LISTING = `
query{
  blogListings{
    data{
      id
      attributes{
        EventTitle
        blogs{
          data{
            id
            attributes{
              RelationTitle
              Blogs{
                id
                Title
                tagLabel
                Date
                Creator
                Links{
                  id
                  href
                  label
                }
                image{
                  data{
                    id
                    attributes{
                      alternativeText
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;
export const BRAND_TAGLINE = (parameter) => `
query{
  brandGuideline{
    data{
      id
      attributes{
        PageTitle
        Slug
      	${parameter}{
          data{
            id
            attributes{
              Description
              Tagline{
                id
                Title
              }
            }
          }
        }
      }
    }
  }
}
`;
export const KEY_TAGLINE = (parameter) => `
query{
  ${parameter}{
    data{
      id
      attributes{
        key_tagline{
          data{
            id
            attributes{
              MainTitle
              Image{
                data{
                  id
                  attributes{
                    alternativeText
                    url
                  }
                }
              }
              Subtagline{
                id
                Number
                Title
              }
            }
          }
        }
      }
    }
  }
}
`;
export const UI_UX_DETAILS = `
query
{
  uiUxDesigner{
    data{
      id
      attributes{
      Details{
        id
        Description
        Title
      }
      }
    }
  }
}
`;

export const STRAPI_RELATED_SERVICES = (parameter) => `
query{
  ${parameter}{
    data{
      id
      attributes{
        service_title{
          data{
            id
            attributes{
              StrapiTitle{
                id
                Title
                Description
              }
            }
          }
        }
        related_services{
          data{
            id
            attributes{
              ServiceDetails{
                id
                Body
                Summary
                Links{
                  id
                  href
                  label
                }
              }
            }
          }
        }
      }
    }
  }
}
`;