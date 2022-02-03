import React from "react";

import { NavLink } from "react-router-dom";
import IndexHeaderLink from "../other/index-link";
import IndexDetailedLink from "../other/index-detailed-link";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import ScrollIndicator from "../other/scroll-indicator";

import logo from "./../../wp-content/uploads/2017/12/BSV-Logo.jpg";

import "./../../css/base.css";
import "./i.css";


// TODO: link für machmit!!

function Home() {

  return (
    <main>

      <section className="landing-section">

        <main>
          
          <article>
            <h1 className="abkuerzung">BSV D'dorf</h1>
            <h1 className="ausgefuehrt">
              <span>Die</span>
              <span>Bezirks-SV</span>
              <span>Düsseldorf</span>
            </h1>
          </article>

          <div className="durchsichtiger-text">
            <h1>BSV</h1>
            <h1>BSV</h1>
            <h1>BSV</h1>
            <h1>BSV</h1>
            <h1>BSV</h1>
          </div>

          <ScrollIndicator />

        </main>
            
        <aside>

            <img src={logo} alt="Das Logo der BSV" />

            <nav>
              <ul className="navigation-links">
                <IndexHeaderLink link="/" display="Homepage" />
                <IndexHeaderLink link="/aktuelles" display="Aktuelles" />
                <IndexDetailedLink link="/dokumente" display="Dokumente">
                  <IndexHeaderLink link="/arbeitsprogramm-2020-21" display="Arbeitsprogramm 2020/2021" />
                  <IndexHeaderLink link="/satzung" display="Satzung" />
                  <IndexHeaderLink link="/wahl-und-geschaeftsordnung" display="Wahl- und Geschäftsordnung" />
                </IndexDetailedLink>
                <IndexDetailedLink link="/resolutionen" display="Resolutionen">
                  <IndexHeaderLink link="/wirtschaft-als-fach" display="Resolution Wirtschaft als Fach" />
                  <IndexHeaderLink link="/resolution-abschiebungen" display="Resolution Abschiebungen" />
                  <IndexHeaderLink link="/lgbtq" display="Resolution LGBTQ+" />
                </IndexDetailedLink>
                <IndexDetailedLink link="/resolutionen" display="Reden">
                  <IndexHeaderLink link="/wirtschaft-als-fach" display="Rede zum ZeroCovid-Aktionstag" />
                  <IndexHeaderLink link="/resolution-abschiebungen" display="Rede zum globalen Klimastreik" />
                  <IndexHeaderLink link="/lgbtq" display="Rede zum Red Hand Day" />
                  <IndexHeaderLink link="/lgbtq" display='Rede zur "Kein Meter für Querdenken!" - Kundgebung' />
                </IndexDetailedLink>
                <IndexHeaderLink link="/mach-mit" display="Mach Mit!" />
                <IndexDetailedLink link="/resolutionen" display="Kontakt">
                  <li><a href="mailto:info@bsv-duesseldorf.de">E-mail</a></li>
                  <li><a href="https://www.instagram.com/bsv.duesseldorf/">Instagram</a></li>
                  <li><a href="https://www.facebook.com/bsvduesseldorf">Facebook</a></li>
                  <li><a href="https://twitter.com/BsvDusseldorf">Twitter</a></li>
                </IndexDetailedLink>
              </ul>
            </nav>

        </aside>

      </section>

      <section className="introduction-section">

        <section className="decoration-section">

          <div className="color"></div>

        </section>

        <section className="content-section">
          <article className="wir-sind">
            <div className="checkpoint" data-aos="fade-in" data-aos-anchor-placement="top-center"></div>
            <div className="content" data-aos="fade-right" data-aos-anchor-placement="top-center">
              <h2>
                <span>Wir</span>
                <span>Sind</span>
              </h2>
              <p><span>die <u>gesetzlich legitimierte</u> Schüler*innenvertretung Düsseldorfs</span></p>
            </div>
          </article>
          
          <article className="wir-setzen-uns-ein">
            <div className="checkpoint" data-aos="fade-in" data-aos-anchor-placement="top-center"></div>
            <div className="content" data-aos="fade-right" data-aos-anchor-placement="top-center">
              <h2>
                <span>Wir</span>
                <span>Setzen</span>
                <span>Uns</span>
                <span>Ein</span>
              </h2>
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
              <h2>
                <span>Mach</span>
                <span>Mit</span>
              </h2>
              <p>
                <span><u>Engagiere dich</u> auch für die Interessen der Schüler*innen.</span>
                <span>Erfahre <NavLink to="/impressum/">mehr</NavLink> über das Mitmachen</span>
              </p>
            </div>
          </article>
        </section>

      </section>

      <section className="posts-header-section">

        <div className="durchsichtiger-text no-break">
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

      </section>

    </main>
  )

}

export default Home;
