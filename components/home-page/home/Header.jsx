"use client";

import { useEffect, useState } from "react";
import MainMenu from "../../header/MainMenu";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();

  const isActive = (link) => {
    return pathname.replace(/\/\d+$/, "") === link.replace(/\/\d+$/, "");
  };
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-two ${navbar ? "fixed" : ""
        }`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link href="/" className="d-block">
              <Image
                src="/images/logo/logo_01.png"
                alt="logo"
                width={150}
                height={150}
              />
            </Link>
          </div>
          <div className="right-widget d-flex align-items-center ms-auto ms-lg-0 order-lg-3">
            <Link
              href="/contact/"
              className={
                isActive("/contact")
                  ? "contact-btn-three fs-17 fw-500 tran3s d-none d-lg-block"
                  : "contact-btn-two fs-17 fw-500 tran3s d-none d-lg-block"
              }
            >
              Contact us
            </Link>
          </div>
          {/* /.right-widget */}
          <MainMenu />
        </div>
      </div>
      {/* /.inner-content */}
    </header>
  );
};

export default Header;
