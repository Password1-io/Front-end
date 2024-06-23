import Link from "next/link";

import Faq from "@/components/home-page/home/Faq";
import Header from "@/components/home-page/home/Header";
import Hero from "@/components/home-page/home/Hero";
import Social from "@/components/home-page/home/Social";
import Footer2 from "@/components/footer/Footer2";
import Image from "next/image";
import IncludedPlan from "@/components/home-page/home/IncludedPlan";
export const metadata = {
  title: "Password1 - Secure Passwords Made Simple",
};
const Home = () => {
  return (
    <>
      {/* <!-- 
        =============================================
        Theme Default Menu
        ============================================== 	
        --> */}
      <Header />
      {/* <!-- /.theme-main-menu --> */}

      {/* 
			=============================================
				Theme Hero Banner
			============================================== 
			*/}
      <div className="hero-banner-six position-relative pt-180 md-pt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 m-auto text-center" data-aos="fade-up">
              <Hero />
              {/* /.subscribe-form */}
            </div>
          </div>
          {/* End .row */}

          <div
            className="illustration-holder text-center mt-45"
            data-aos="fade-up"
          >
            <div className="d-lg-block">
              <img
                src="/images/assets/ils_02.svg"
                alt="shape"
                className="lazy-img m-auto"
              />
            </div>
          </div>
          {/* End .illustration-holder */}
        </div>
        {/* /.container */}

        <div className="shapes shape-one rounded-circle" />
        <img
          src="/images/shape/shape_83.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
        <div className="shapes shape-three" />
        <img
          src="/images/shape/shape_84.svg"
          alt="shape"
          className="lazy-img shapes shape-four"
        />
        <img
          src="/images/shape/shape_85.svg"
          alt="shape"
          className="lazy-img shapes shape-five"
        />
        <div className="shapes shape-six rounded-circle" />
        <div className="shapes shape-seven rounded-circle" />
        <img
          src="/images/shape/shape_84.svg"
          alt="shape"
          className="lazy-img shapes shape-eight"
        />
        <img
          src="/images/shape/shape_83.svg"
          alt="shape"
          className="lazy-img shapes shape-nine"
        />
      </div>
      {/* /.hero-banner-six */}

      {/* 
        =============================================
        Feature Section Twenty Three
        ============================================== 
        */}
      <div className="fancy-feature-twentyThree mt-130 lg-mt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 m-auto">
              <div
                className="title-style-seven text-center pb-20"
                data-aos="fade-up"
              >
                <h2 className="main-title fw-bold tx-dark">
                  <span className="position-relative d-inline-block">
                    How
                    <Image
                      width={569}
                      height={170}
                      style={{ objectFit: "contain" }}
                      src="/images/shape/shape_184.svg"
                      alt="shape"
                    />
                  </span>{" "}
                  Does it Work?
                </h2>
              </div>
              {/* /.title-style-seven */}
            </div>
          </div>
          {/* End .row */}

          <div className="row gx-xl-5">
            <IncludedPlan />
          </div>
          {/* End .row */}
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-twentyThree */}
      {/* 
			=============================================
				Feature Section Twenty Five
			============================================== 
			*/}
      <div className="fancy-feature-twentyFive mt-170 lg-mt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-9 m-auto" data-aos="fade-up">
              <div
                className="title-style-seven text-center pb-120 lg-pb-50"
                data-aos="fade-up"
              >
                <h2 className="main-title fw-bold tx-dark">
                  Got questions? <br /> Well, we&lsquo;ve got&nbsp;
                  <span className="position-relative d-inline-block">
                    answers. <img src="/images/shape/shape_99.svg" alt="" />
                  </span>
                </h2>
              </div>
              {/* /.title-style-seven */}
            </div>
            <div className="col-xl-9 col-lg-10 m-auto " data-aos="fade-up">
              <Faq />

              <div className="text-center  mt-80 lg-mt-50">
                <h3 className="fw-bold tx-dark mb-30">
                  Didn’t get your answer?
                </h3>
                <Link href="/contact" className="btn-fourteen fw-500 tran3s">
                  Submit your question
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
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
                <h5 className="footer-title tx-dark fw-500">Our Address</h5>
                <p className="fs-17">
                  2190 Lojiho Terrace, Mirpur, Equal Licensed in 50 states.
                </p>
                <a
                  href="mailto:januinc@company.com"
                  className="email tran3s fs-17"
                >
                  januinc@company.com
                </a>
                <br />
                <a
                  href="tel:+7576994478"
                  className="mobile tran3s fs-20 mt-20 mb-30"
                >
                  +757 699-4478
                </a>
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
      {/* /.footer-style-six */}
    </>
  );
};

export default Home;
