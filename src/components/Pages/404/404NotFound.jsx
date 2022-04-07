import React from "react";
import { NavLink } from "react-router-dom";
import PageWrapper from "../../reusables/page-wrapper";

import "./404NotFound.css";

class Page404 extends React.Component {

  render() {
    return <PageWrapper>
      <main>
        <section className="page">
          <article>
            <h1>404 Not Found</h1>
            <p>
              Die Seite, nach der du gesucht hast, ist nicht verfügbar.
            </p>
            <NavLink to="/">
              {">"}Zurück zur home page{"<"}
            </NavLink>
          </article>
        </section>
        <div className="transparent-text transparent-text-404">
            <h1>404</h1>
            <h1>404</h1>
            <h1>404</h1>
            <h1>404</h1>
            <h1>404</h1>
            <h1>404</h1>
            <h1>404</h1>
            <h1>404</h1>
            <h1>404</h1>
            <h1>404</h1>
          </div>
      </main>
    </PageWrapper>
  }

}

export default Page404;