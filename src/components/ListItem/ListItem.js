import { Link } from "gatsby"
import React from "react"

import "./ListItem.scss"

const ListItem = ({ listItems }) => (
  <footer className="footer">
    <div className="footer__disclaimer">
    © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org" aria-label="External page for more Gatsby.js info">Gatsby</a>
    </div>
    <div className="footer__links">
      <GiCandyCanes className="footer__logo" aria-hidden="true"/>
      <Link to="/" >{siteTitle} Home</Link>
    </div>
  </footer>
)

export default ListItem
