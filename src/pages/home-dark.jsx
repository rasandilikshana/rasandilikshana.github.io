import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Hero from "../components/hero/Hero";
import AboutMain from "../components/about";
import Wrapper from "../layout/wrapper";
import SEO from "../components/Seo";
import Portfolio from "../components/portfolio/Portfolio";
import Address from "../components/Address";
import Social from "../components/Social";
import Contact from "../components/Contact";
import Blog from "../components/blog/Blog";
import SwitchDark from "../components/switch/SwitchDark";

const menuItem = [
  { icon: "fa-home", menuName: "Home" },
  { icon: "fa-user", menuName: "About" },
  { icon: "fa-briefcase", menuName: "Portfolio" },
  { icon: "fa-envelope-open", menuName: "Contact" },
  // { icon: "fa-comments", menuName: "Blog" },
];

const metadata = {
  Home: {
    title: "Home",
  },
  About: {
    title: "About Me",
    description: "Learn more about Rasan Dilikshana, a software engineer skilled in HTML, CSS, React, Laravel, and WordPress.",
    keywords: "Rasan Dilikshana, about me, software engineer, skills, HTML, CSS, React, Laravel, WordPress",
  },
  Portfolio: {
    title: "Portfolio",
    description: "Explore the portfolio of Rasan Dilikshana, showcasing various projects and works.",
    keywords: "Rasan Dilikshana, portfolio, projects, web development, software development",
  },
  Contact: {
    title: "Contact",
    description: "Get in touch with Rasan Dilikshana for discussing new projects, creative ideas, or opportunities.",
    keywords: "Rasan Dilikshana, contact, get in touch, software engineer",
  },
  // Add more tabs as needed
};

const HomeDark = () => {
  const [activeTab, setActiveTab] = useState("Home");

  useEffect(() => {
    document.querySelector("body").classList.remove("rtl");
  }, []);

  const { title, description, keywords } = metadata[activeTab];

  return (
    <Wrapper>
      <SEO pageTitle={title} metaDescription={description} metaKeywords={keywords} />

      <div className="yellow">
        <SwitchDark />
        <Tabs onSelect={(index) => setActiveTab(menuItem[index].menuName)}>
          <header className="header">
            <TabList className="icon-menu revealator-slideup revealator-once revealator-delay1">
              {menuItem.map((item, i) => (
                <Tab className="icon-box" key={i}>
                  <i className={`fa ${item.icon}`}></i>
                  <h2>{item.menuName}</h2>
                </Tab>
              ))}
            </TabList>
          </header>

          <main className="tab-panel_list">
            <TabPanel className="home">
              <section
                className="container-fluid main-container container-home p-0 g-0"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="color-block d-none d-lg-block"></div>
                <Hero />
              </section>
            </TabPanel>

            <TabPanel className="about">
              <section data-aos="fade-up" data-aos-duration="1200">
                <div className="title-section text-start text-sm-center">
                  <h1>
                    ABOUT <span>ME</span>
                  </h1>
                  <span className="title-bg">Resume</span>
                </div>
                <AboutMain />
              </section>
            </TabPanel>

            <TabPanel className="portfolio professional">
              <section
                className="title-section text-start text-sm-center"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <h1>
                  my <span>portfolio</span>
                </h1>
                <span className="title-bg">works</span>
              </section>
              <Portfolio />
            </TabPanel>

            <TabPanel className="contact">
              <section
                className="title-section text-start text-sm-center"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <h1>
                  get in <span>touch</span>
                </h1>
                <span className="title-bg">contact</span>
              </section>
              <section
                className="container"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="row">
                  <div className="col-12 col-lg-4">
                    <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                      {"Don't"} be shy!
                    </h3>
                    <p className="open-sans-font mb-4">
                      Feel free to get in touch with me. I am always open to
                      discussing new projects, creative ideas or opportunities
                      to be part of your visions.
                    </p>
                    <Address />
                    <Social />
                  </div>

                  <div className="col-12 col-lg-8">
                    <Contact />
                  </div>
                </div>
              </section>
            </TabPanel>

            {/* Uncomment this block if you include a Blog section */}
            {/* 
            <TabPanel className="blog">
              <section
                className="title-section text-start text-sm-center"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <h1>
                  my <span>blog</span>
                </h1>
                <span className="title-bg">posts</span>
              </section>
              <section
                className="container"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="row pb-50">
                  <Blog />
                </div>
              </section>
            </TabPanel>
            */}
          </main>
        </Tabs>
      </div>
    </Wrapper>
  );
};

export default HomeDark;
