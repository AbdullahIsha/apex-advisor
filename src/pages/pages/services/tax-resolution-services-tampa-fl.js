import MainFooter from '@/components/MainFooter'
import MainNav from '@/components/MainNav'
import ServiceSideBar from '@/components/ServiceSideBar'
import Head from 'next/head'
import Image from 'next/image'

const TaxResolutionServicesTampaFl = () => {
  return (
    <>
      <Head>
        <title>Tax Resolution Services - Apex Advisor</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainNav />
        <div
          className="head-top-container"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6">
              <div className="head-img">
                <Image
                  src="/image/tax-resolution-services.jpg"
                  alt="tax-resolution-services"
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
                  <h1>About Apex Advisor Group Inc</h1>
                  <h4>Tax Resolution Services</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col-3"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease"
            >
              <ServiceSideBar />
            </div>
            <div
              className="col-9"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease"
            >
              <div className="service-detail">
                <Image
                  src="/image/tax-resolution-services-2.jpg"
                  alt="tax-resolution-services"
                  height={500}
                  width={1024}
                />
                <h2>Accounting Services</h2>
                <p>
                  Apex Advisor Group is an experienced accounting team that
                  looks forward to the opportunity to help you manage your
                  business financials. We will work with you to establish short-
                  and long-term strategies for growth and profitability.
                </p>
                <p>
                  Let us help you increase you business’ profitability and
                  efficiency so that you may continue to succeed!
                </p>
                <p>a. Corporate Formations</p>
                <p>b. Bookkeeping</p>
                <p>c. Preparing of Financial Statements</p>
                <p>d. Payroll</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="about-bottom-content"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          <p>
            Services by Apex Advisor Group Inc include:{' '}
            <a href="">Tax Preparation</a> | <a href="">Accounting Services</a>{' '}
            | <a href="">Notary</a> | <a href="">Tax Resolution</a> |{' '}
            <a href="">Tax Planning</a> |{' '}
            <a href="">Credit Repair & Counseling</a> | <a href="">Insurance</a>
          </p>
          <p>
            Our Tax Accountants serve clients across <a href="">Tampa</a>,
            <a href=""> Brandon</a>, <a href="">Riverview</a>,{' '}
            <a href=""> Sun City</a>, <a href="">Ruskin</a>,{' '}
            <a href=""> Plant City</a>, <a href="">Wesley Chapel</a>,{' '}
            <a href=""> Lithia</a> and the surrounding areas.
          </p>
        </div>
        <MainFooter />
      </main>
    </>
  )
}

export default TaxResolutionServicesTampaFl
