import React from "react";
import Accordion from "react-bootstrap/Accordion";

function AccordionComponent() {
  return (
    <>
      <section className='accrodian-section'>
        <div className='container'>
          <div className='accordian-top'>
            <h5>The Ultimate FAQ Handbook</h5>
            <p>
              We are always Q&amp;A central so you can feel free to reach out
              and ask us anything. Meanwhile, below are the answers to some of
              the most common queries.
            </p>
          </div>
          <Accordion defaultActiveKey='0' className='accordian_main'>
            <Accordion.Item eventKey='0' className='accordion-wrapper'>
              <Accordion.Header>
                How to get started for Strapi Development?
              </Accordion.Header>
              <Accordion.Body className='collepsing-div'>
                <ul>
                  <li>
                    You can reach out to us
                    <a
                      href='/contact-us#contact-page-form'
                      className='tag-line d-inline'
                    >
                      &nbsp;here&nbsp;
                    </a>
                    and we can walk you through what Strapi development is and
                    how we can get started on transforming your business.
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1' className='accordion-wrapper'>
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body className='collepsing-div'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
    </>
  );
}

export default AccordionComponent;
