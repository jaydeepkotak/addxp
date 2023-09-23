"use client";
import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import strapi from "../../../Configurations/Config.json";
import RichText from "@/Components/Common.jsx";

export default function Experience(props: any) {
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
      const response = await axios(config);
      setUserDetails(response.data.data.brandGuideline);
    } catch (err) {
      console.log("ERROR DURING AXIOS REQUEST", err);
    } finally {
    }
  }
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <section className='brand-tagline'>
      <div className='container'>
        <div className='brand-box-main'>
          {userDetails?.data.attributes.brand_taglines.data.map((item: any) => (
            <div className='brand-box' key={item.id}>
              <RichText htmlContent={item.attributes.Description}></RichText>

              <ul>
                {item.attributes.Tagline.map((taglist: any) => (
                  <li key={taglist.id}>{taglist.Title}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* <div className="brand-tagline_bottom">
        <div className="brand-tag-left">
          <img src="src/images/brand-tag-image.jpg" alt="brand-tag-image"/>
          <h5>Our Brand Guidelines have been created with hard work, dedication and lots of coffee.</h5>
        </div>
        <div className="brand-tag-right">
          <div className="brand-right">
            <h5>Get your free copy now!</h5>
            <form>
              <div className="form-group">
                <input type="text" id="BFullname" className="inputText" required />
                <span className="floating-label">Full Name</span>
              </div>
              <div className="form-group">
                <input type="email" id="BEmail" className="inputText" required />
                <span className="floating-label">Business Email</span>
              </div>
              <div className="form-group">
                <input type="text" id="BNumber" className="inputText" required />
                <span className="floating-label">Phone Number (Optional)</span>
              </div>
              <button type="submit" id="Bsubmit" data-form-name="BrandguidelinedownloadForm"
                className="btn btn-defualt">Download</button>
            </form>
          </div>
        </div>

      </div> */}
      </div>
    </section>
  );
}
