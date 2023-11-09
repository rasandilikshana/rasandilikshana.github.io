import Image from "next/image";
import Link from "next/link";
import dark from "../../public/assets/img/intro/dark.jpg";
import rtl from "../../public/assets/img/intro/rtl.jpg";
import SEO from "../components/Seo";

const preview = () => {
  const previewDemo = [
    {
      img: dark,
      title: "Dark & Light (Professional)",
      routerPath: "/home-dark",
      delayAnimation: "50",
    },
    {
      img: rtl,
      title: "Dark & Light (RTL Version)",
      routerPath: "/home-rtl",
      delayAnimation: "",
    },
  ];

  return (
    <>
      <SEO pageTitle={"Preview"} />
      <section className="banner text-center">
        <div className="content">
          <h1>Tunis</h1>
          <h2>Personal Portfolio NextJS Template</h2>
        </div>
      </section>
      {/* End .banner */}

      <section className="demo dark">
        <div className="container">
          <div className="row">
            {previewDemo.map((val, i) => (
              <div
                className="col-xs-12 col-sm-6 col-md-6"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="content text-center">
                  <div className="bg_container">
                    <Link
                      href={val.routerPath}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src={val.img}
                        alt="demo"
                        className="img-responsive screenshot"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Link>
                  </div>
                  <h2 className="demo-title">{val.title}</h2>
                  <div className="anchor">
                    <h6>
                      <Link
                        className="btn"
                        href={val.routerPath}
                        target="_blank"
                        rel="noreferrer"
                      >
                        view demo
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End .Demo */}

      <footer>
        <div className="go_purchase">
          <h6 data-aos="fade-up" data-aos-duration="1200">
            You are at the right step now
          </h6>
          <h3 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
            Purchase Tunis & Build Your Super Fast{" "}
            <span className="theme-color"> NextJS</span> &amp;{" "}
            <span className="theme-color">Bootstrap 5 </span> Based Portfolio
            Template.
          </h3>
          <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
            <a
              className="button"
              href="https://themeforest.net/item/tunis-personal-portfolio-react-template/34286452"
              target="_blank"
              rel="noreferrer"
            >
              <span className="button-text"> Purchase Now</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </a>
          </div>
        </div>
        {/* End go_purchase */}

        <div className="text-center footer_copyright">
          <h6>Tunis - Personal Portfolio NextJS Template</h6>
          <h5>
            &copy; {new Date().getFullYear()} Designed with{" "}
            <span className="heart">&#10084;</span> by{" "}
            <a
              href="https://themeforest.net/user/ib-themes"
              target="_blank"
              rel="noreferrer"
            >
              ib-themes.
            </a>{" "}
          </h5>
        </div>
      </footer>
      {/* End footer */}
    </>
  );
};

export default preview;
