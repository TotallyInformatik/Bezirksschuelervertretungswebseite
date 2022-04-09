import React from "react";
import $ from "jquery";

import { NavLink } from "react-router-dom";
import ScrollIndicator from "../../reusables/ScrollIndicator/scroll-indicator";

import "./css/home.css";


/// page-link
import BDK34 from "./../TemplateInstances/34-BDK/34-BDK";
import BDK35 from "./../TemplateInstances/35-BDK/35-BDK";
import PageWrapper from "../../reusables/page-wrapper";
import AktionsTagGerechteBildung from "../TemplateInstances/AktionsTagGerechteBildung/AktionsTagGerechteBildung";
import ZeroCovid from "../TemplateInstances/Zero-Covid/ZeroCovid";
import GlobalerKlimaStreik19_03_21 from "../TemplateInstances/GlobalerKlimaStreik19_03_21/GlobalerKlimaStreik";
import RedHandDay2021 from "../TemplateInstances/RedHandDay_2021/RedHandDay";
import PostContext from "../../../PostContext";

// TODO: link für machmit!!

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.progressbarRef = React.createRef();
    this.introSectionRef = React.createRef();
  }

  render() {

    let mostRecentPosts = [];
    let i = 0;
    let count = 6; // only the most recent 6 posts will be shown
    for (let post of this.context.posts) {
      let PostComponent = post[0];
      let postLink = post[1];
      count--;

      mostRecentPosts.push(
        <div className="post-wrapper" data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-delay={`${100 * i}`}>
          <PostComponent type="link" to={postLink}/>
        </div>
      );
      i++

      if (count === 0) {
        break;
      }

    }

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
  
        <section className="introduction-section" ref={this.introSectionRef}>
  
          <section className="decoration-section">
  
            <div className="color" ref={this.progressbarRef}></div>
  
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
                  <span>Erfahre <NavLink to="/mach-mit">{">"}mehr{"<"}</NavLink> über das Mitmachen</span>
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
            <h1>Engagement</h1>
          </div>
  
          <article>
            <h2 data-aos="fade-in" data-aos-anchor-placement="top-center">Unser Engagement</h2>
            <h3>Auf einem Blick</h3>
            <h3>In Form von Posts</h3>
          </article>

        </section>

        <section className="posts-section">

          <section className="icon-section" data-aos="fade-down" data-aos-anchor-placement="top-center">
            <div class="mouse-icon"></div>
            <p>Click Die Posts An!</p>
          </section>

          <div className="posts-container">
            {mostRecentPosts}
          </div>

          <article>
            <h2 data-aos="fade-in" data-aos-anchor-placement="top-center">Mehr gibt es <NavLink to="/aktuelles" onClick={() => window.scrollTo({
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

    /// progress bar movement when scrolling
    $(window).on("scroll", (e) => {
      let start = $(this.introSectionRef.current).offset().top;
      let end = $(this.introSectionRef.current).offset().top + $(this.introSectionRef.current).height();
      let current = $(window).scrollTop() - ($(window).innerHeight() / 2);

      let progress = current / (end - start) * 100;

      if (progress > -10 && progress < 110) {
        $(this.progressbarRef.current).css({
          height: progress + "%"
        });
      }

    });

  }

}

Home.contextType = PostContext;

export default Home;
