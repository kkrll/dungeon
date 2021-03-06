/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { globalCss } from "@stitches/react"

import Header from "./header"
import "./layout.css"
import { Box } from "./Box"

const globalStyles = globalCss({
  // body: { backgroundColor: "$background_primary" },
  "*": { color: "$text_primary" },
})

const Layout = ({ children, header }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [darkTheme, setDarkTheme] = useState(false)

  globalStyles()

  return (
    <Box
      className={darkTheme && "dark-theme"}
      css={{
        backgroundColor: "$background_primary",
      }}
    >
      {header && (
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      )}
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        {/* <button onClick={() => setDarkTheme(!darkTheme)}>change theme</button>
        <p>{darkTheme && "drk"}</p> */}
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
            backgroundColor: "$white",
          }}
        >
          footer
        </footer>
      </div>
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
