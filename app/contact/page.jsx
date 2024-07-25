import Link from "next/link";
import Social from "@/components/home-page/home/Social";
import BlockContact2 from "@/components/contact/BlockContact2";
import ContactForm2 from "@/components/contact/ContactForm2";
import Footer2 from "@/components/footer/Footer2";
import Header from "@/components/home-page/home/Header";
export const metadata = {
  title: "Contact || Password1 - Secure Passwords Made Simple",
};
const Contact = () => {
  return (
    <>
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <Header />

      {/* 
		=============================================
		Theme Inner Banner
		============================================== 
		*/}
      <div className="inner-banner-three text-center p-30">
        <div
          className="bg-wrapper text-center"

        >
          <div className="container">
            <div className="title-style-five">
              <h2 className="main-title tx-dark fw-bold">Contact Us</h2>
            </div>
            <p className="fs-20 mt-30 lg-mt-20">
              Have questions about the Password1?
            </p>
          </div>
          {/* End container */}

          <div className="container">
            <div className="contact-section-two text-start mt-80 lg-mt-60">
              <div className="row">
                <div className="col-lg-7">
                  <div
                    className="form-style-three md-mb-60"
                    data-aos="fade-right"
                  >
                    <ContactForm2 />
                  </div>
                  {/* /.form-style-three */}
                </div>
                {/* End col-lg-7 */}

                <div
                  className="col-xl-4 col-lg-5  ms-auto"
                  data-aos="fade-left"
                >
                  <BlockContact2 />
                </div>
                {/* End col-xl-4 */}
              </div>
            </div>
            {/* /.contact-section-two */}
          </div>
          {/* /.container */}
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.inner-banner-three */}

      {/*
			=====================================================
				Footer
			=====================================================
			*/}
      <div className="footer-style-six theme-basic-footer position-relative">
        <div className="container">
          <div className="inner-wrapper">
            <div className="row justify-content-between">
              <div className="col-lg-2 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <img src="/images/logo/logo_01.png" alt="" width={95} />
                  </Link>
                </div>
              </div>
              {/* End .col-lg-2 */}

              <Footer2 />

              <div className="col-md-3 col-sm-6 mb-30">
                <h5 className="footer-title tx-dark fw-500">Home Base</h5>
                <p className="fs-17">
                  Proudly built in Los Angeles, California.
                </p>
                <a
                  href="mailto:contact@password1.io"
                  className="email tran3s fs-17 mb-30"
                >
                  contact@password1.io
                </a>
                <br />
                <Social />
              </div>
              {/* End .col-md-3 */}
            </div>
            {/* End .row */}

            <div className="bottom-footer">
              <p className="copyright text-center m0">
                Copyright © {new Date().getFullYear()} {"  "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://themeforest.net/user/ib-themes"
                >
                  Password1
                </a>
              </p>
            </div>
          </div>
          {/* /.inner-wrapper */}
        </div>
      </div>
    </>
  );
};

export default Contact;
