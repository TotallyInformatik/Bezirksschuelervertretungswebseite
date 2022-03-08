import React from "react";

import "./footer.css";

// TODO: Impressum link!!!


class PageFooter extends React.Component {
  render() {
    return (
      <footer>

        <section className="contact-section">
          <h4>Kontakt</h4>
          <p>
            Bezirksschüler*innenvertretung
            der Landeshauptstadt Düsseldorf
          </p>
          <p>
            c/o SV Leibniz-Montessori-Gymnasium
          </p>
          <p>
            Scharnhorststraße 8
            40477 Düsseldorf
          </p>
          <p>
            E-Mail: info@bsv-duesseldorf.de
          </p>
          <a>
            Impressum
          </a>
        </section>
        <section className="link-section">
          <a className="email link-icon" href="mailto:info@bsv-duesseldorf.de"></a>
          <a className="instagram link-icon" href="https://www.instagram.com/bsv.duesseldorf/"></a>
          <a className="facebook link-icon" href="https://www.facebook.com/bsvduesseldorf"></a>
          <a className="twitter link-icon" href="https://twitter.com/BsvDusseldorf"></a>
        </section>
        <section className="credit-section">
          <p>©2022 bsv-duesseldorf.de | Webseite von Rui Zhang</p>
        </section>

      </footer>
    );
  }

}

export default PageFooter;