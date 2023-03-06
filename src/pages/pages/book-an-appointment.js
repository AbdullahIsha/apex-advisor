import MainFooter from "@/components/MainFooter";
import MainNav from "@/components/MainNav";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const BookAnAppoinment = () => {
  return (
    <>
      <Head>
        <title>Services - Apex Advisor</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainNav />
        <div className="head-top-container">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6">
              <div className="head-img">
                <Image
                  src="/image/appointment.jpg"
                  alt="appointment"
                  height={657}
                  width={1000}
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row top-head-position">
              <div className="col-6">
                <div className="top-head-position-inside">
                  <h1>Book An Appointment</h1>
                  <h4>By Apex Advisor Group Inc</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="service-group">
            <Image
              src="/image/advisor1.jpg"
              alt="tax-prepration"
              height={181}
              width={260}
            />
            <div className="service-group-content">
              <h2>Carlos Rosario</h2>
              <br className="br-extra" />
              <Link
                href="https://calendly.com/carlosapexadvisor"
                target="_blank"
              >
                SCHEDULE TIME WITH ME
              </Link>
            </div>
          </div>
          <div className="service-group">
            <Image
              src="/image/advisor2.jpg"
              alt="accounting-services"
              height={181}
              width={260}
            />
            <div className="service-group-content">
              <h2>Jennifer Colon</h2>
              <br className="br-extra" />
              <Link
                href="https://calendly.com/jennyapexpro/tax-preparation"
                target="_blank"
              >
                SCHEDULE TIME WITH ME
              </Link>
            </div>
          </div>
          <div className="service-group">
            <Image
              src="/image/advisor3.jpg"
              alt="notary"
              height={181}
              width={260}
            />
            <div className="service-group-content">
              <h2>Eddia Rosario</h2>
              <br className="br-extra" />
              <Link
                href="https://calendly.com/eddiaapexadvisor/15min"
                target="_blank"
              >
                SCHEDULE TIME WITH ME
              </Link>
            </div>
          </div>
          <div className="service-group">
            <Image
              src="/image/advisor4.jpg"
              alt="tax-resolution"
              height={181}
              width={260}
            />
            <div className="service-group-content">
              <h2>Stephane Calixte</h2>
              <br className="br-extra" />
              <Link
                href="https://calendly.com/stephaneapexadvisor/15min"
                target="_blank"
              >
                SCHEDULE TIME WITH ME
              </Link>
            </div>
          </div>
          <div className="service-group">
            <Image
              src="/image/advisor5.jpg"
              alt="tax-planning"
              height={181}
              width={260}
            />
            <div className="service-group-content">
              <h2>Carlos Alberto Muñoz</h2>
              <br className="br-extra" />
              <Link
                href="https://calendly.com/apex-cmunoz/apex-service-appointment"
                target="_blank"
              >
                SCHEDULE TIME WITH ME
              </Link>
            </div>
          </div>
          <div className="about-bottom-content">
            <p>
              Services by Apex Advisor Group Inc include:{" "}
              <a href="">Tax Preparation</a> |{" "}
              <a href="">Accounting Services</a> | <a href="">Notary</a> |{" "}
              <a href="">Tax Resolution</a> | <a href="">Tax Planning</a> |{" "}
              <a href="">Credit Repair & Counseling</a> |{" "}
              <a href="">Insurance</a>
            </p>
            <p>
              Our Tax Accountants serve clients across <a href="">Tampa</a>,
              <a href=""> Brandon</a>, <a href="">Riverview</a>,{" "}
              <a href=""> Sun City</a>, <a href="">Ruskin</a>,{" "}
              <a href=""> Plant City</a>, <a href="">Wesley Chapel</a>,{" "}
              <a href=""> Lithia</a> and the surrounding areas.
            </p>
          </div>
        </div>
        <MainFooter />
      </main>
    </>
  );
};

export default BookAnAppoinment;
