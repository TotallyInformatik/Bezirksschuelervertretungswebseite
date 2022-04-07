import React from "react";

import { NavLink } from "react-router-dom";
import ScrollIndicator from "../../reusables/ScrollIndicator/scroll-indicator";

import "./css/home.css";


/// page-link
import BDK34 from "./../TemplateInstances/34-BDK/34-BDK";
import BDK35 from "./../TemplateInstances/35-BDK/35-BDK";
import PageWrapper from "../../reusables/page-wrapper";
import AktionsTagGerechteBildung from "../TemplateInstances/AktionsTagGerechteBildung/AktionsTagGerechteBildung";
import ZeroCovid from "../TemplateInstances/Zero-Covid/ZeroCovid";
import IndexDetailedLink from "../../reusables/Navigation/index-detailed-link";

// TODO: link für machmit!!

class Home extends React.Component {

  functionlol() {

  }

  render() {

    return (
      <PageWrapper>
      <main>
  
        <section className="landing-section">
  
          <main>
            
            <article>
              <h1 className="abbreviation">BSV D'dorf</h1>
              <h1 className="heading">
                <span>Die</span>
                <span>Bezirks-SV</span>
                <span>Düsseldorf</span>
              </h1>
            </article>
  
            <div className="transparent-text">
              <h1>BSV</h1>
              <h1>BSV</h1>
              <h1>BSV</h1>
            </div>
  
            <ScrollIndicator />
  
          </main>
  
        </section>
  
        <section className="introduction-section">
  
          <section className="decoration-section">
  
            <div className="color"></div>
  
          </section>
  
          <section className="content-section">
            <article className="wir-sind">
              <div className="checkpoint" data-aos="fade-in" data-aos-anchor-placement="top-center"></div>
              <div className="content" data-aos="fade-right" data-aos-anchor-placement="top-center">
                <h2 className="span-heading">
                  <span>Wir</span>
                  <span>Sind</span>
                </h2>
                <h2 className="non-span-heading">Wir Sind</h2>
                <p><span>die <u>gesetzlich legitimierte</u> Schüler*innenvertretung Düsseldorfs</span></p>
              </div>
            </article>
            
            <article className="wir-setzen-uns-ein">
              <div className="checkpoint" data-aos="fade-in" data-aos-anchor-placement="top-center"></div>
              <div className="content" data-aos="fade-right" data-aos-anchor-placement="top-center">
                <h2 className="span-heading">
                  <span>Wir</span>
                  <span>Setzen</span>
                  <span>Uns</span>
                  <span>Ein</span>
                </h2>
                <h2 className="non-span-heading">Wir Setzen Uns Ein</h2>
                <p>
                  <span>für die Schüler*innenrechte in Düsseldorf</span>
                  <span>für <u>Innovation</u> im Schulalltag</span>
                  <span>für politisches Engagement aus Schüler*innenperspektive</span>
                </p>
              </div>
            </article>
  
            <article className="mach-mit">
              <div className="checkpoint" data-aos="fade-in" data-aos-anchor-placement="top-center"></div>
              <div className="content" data-aos="fade-right" data-aos-anchor-placement="top-center">
                <h2 className="span-heading">
                  <span>Mach</span>
                  <span>Mit</span>
                </h2>
                <h2 className="non-span-heading">Mach Mit</h2>
                <p>
                  <span><u>Engagiere dich</u> auch für die Interessen der Schüler*innen.</span>
                  <span>Erfahre <NavLink to="/impressum/">{">"}mehr{"<"}</NavLink> über das Mitmachen</span>
                </p>
              </div>
            </article>
          </section>
  
        </section>
  
        <section className="posts-header-section">
  
          <div className="transparent-text no-break">
            <h1>Engagement</h1>
            <h1>Engagement</h1>
            <h1>Engagement</h1>
          </div>
  
          <article>
            <h2 data-aos="fade-in" data-aos-anchor-placement="top-center">Unser Engagement</h2>
            <h3 data-aos="fade-in" data-aos-anchor-placement="top-center">Auf einem Blick</h3>
          </article>
  
  
          <ScrollIndicator />
        </section>

        <section className="posts-section">
          <div className="posts-container">
            <div className="post-wrapper" data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-delay="0">
              <BDK34 type="link" />
            </div>
            <div className="post-wrapper" data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-delay="100"><BDK35 type="link" /></div>
            <div className="post-wrapper" data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-delay="200"><AktionsTagGerechteBildung type="link" /></div>
            <div className="post-wrapper" data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-delay="300"><ZeroCovid type="link" /></div>


          </div>

          <article>
            <h2 data-aos="fade-in" data-aos-anchor-placement="top-center">Mehr zu aktuellen Informationen <NavLink to="/aktuelles" onClick={() => window.scrollTo({
              top: 0,
              behavior: "smooth"
            })}>{">"}hier{"<"}</NavLink></h2>
          </article>

        </section>

        <section className="conclusion-section">
          <article>
            <q>
              Die BSV von Düsseldorf ist Krass
            </q>
            <p>- Somebody for sure</p>
          </article>
        </section>
  
        </main>
      </PageWrapper>
    );
  }

  componentDidMount() {
    /*
    $(window).on("scroll", function() {
      var offset = 0;
      var sticky = false;
      var top = $(window).scrollTop();
        
      if ($(".posts-section").offset().top < top) {
        $(".posts-container").addClass("sticky");
        sticky = true;
      } else {
        $(".posts-container").removeClass("sticky");
      }
    });
    */
  }

}

export default Home;
