import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdLocalPhone } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import useWindowDimensions from "./useWindowDimensions";

const MainNav = () => {
  const [menuIcon, setMenuIcon] = useState(true);
  const { width } = useWindowDimensions();

  return (
    <>
      {width < 992 ? (
        <div className="mobile-nav-out">
          <div className="mobile-nav">
            {menuIcon ? (
              <Image
                src={`/image/menulineicon.png`}
                alt="menu-icon"
                height={16}
                width={16}
                id="mobile_menu_icon"
                onClick={() => {
                  setMenuIcon(false);
                  document.getElementById("mobile-menu").style.display = "grid";
                }}
              />
            ) : (
              <Image
                src={`/image/menucrossicon.png`}
                alt="menu-icon"
                height={16}
                width={16}
                id="mobile_menu_icon"
                onClick={() => {
                  setMenuIcon(true);
                  document.getElementById("mobile-menu").style.display = "none";
                }}
              />
            )}
            <Image
              src="/image/logo.png"
              alt="logo"
              height={79}
              width={145}
              id="logo_mobile"
            />
            <ul id="mobile-menu">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services" id="service-mobile">
                  Services <RiArrowDropDownLine size={25} />
                </Link>
              </li>
              <li>
                <Link href="/services-area">Services Area</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="main-nav-container-out">
          <div className="main-nav-container">
            <div className="main-nav-left">
              <Image
                src="/image/logo.png"
                alt="logo"
                height={79}
                width={145}
                className="logo_main_nav"
              />
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <div className="dropdown">
                <Link href="/services" id="services">
                  Services <RiArrowDropDownLine size={30} />
                </Link>
                <div className="dropdown-content-out">
                  <ul className="dropdown-content">
                    <li>
                      <Link href="/">Tax Preparation</Link>
                    </li>
                    <li>
                      <Link href="/">Accounting Services</Link>
                    </li>
                    <li>
                      <Link href="/">Notary</Link>
                    </li>
                    <li>
                      <Link href="/">Tax Resolution</Link>
                    </li>
                    <li>
                      <Link href="/">Tax Planning</Link>
                    </li>
                    <li>
                      <Link href="/">Credit Repair & Counseling</Link>
                    </li>
                    <li>
                      <Link href="/">Insurance</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <Link href="/services-area">Services Area</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className="main-nav-right">
              <Link href="" className="nav-button">
                Email Now
              </Link>
              <a href="" className="nav-button">
                Book an appoinment
              </a>
              <a href="tel:(813) 678 2400" id="phone-number">
                <MdLocalPhone size={20} /> (813) 678 2400
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainNav;
