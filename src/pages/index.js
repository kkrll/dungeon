// import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

// import Layout from "../components/layout"
// import Seo from "../components/seo"
// import { Box } from "../components/Box"

// const IndexPage = () => (
//   <Layout>
//     <Seo title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <StaticImage
//       src="../images/gatsby-astronaut.png"
//       width={300}
//       quality={95}
//       formats={["auto", "webp", "avif"]}
//       alt="A Gatsby astronaut"
//       style={{ marginBottom: `1.45rem` }}
//     />
//     <p>
//       <Link to="/page-2/">Go to page 2</Link> <br />
//       <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
//     </p>
//     <Box
//       css={{
//         height: "120px",
//         width: "120px",
//         backgroundColor: "black",
//       }}
//     />
//   </Layout>
// )

import React, { useState } from "react"
import { Box } from "../components/Box"
import { Text } from "../components/Text"
import { styled } from "../../stitches.config.js"

import Layout from "../components/layout"
import Career from "../components/career"
import WritingList from "../components/WritingList"
import WritingPreview from "../components/writingPreview"

const SpellInput = styled("input", {
  backgroundColor: "$background_primary",
  fontSize: "120px",
  width: "100%",
  border: "0px",
  fontFamily: "$serif",
  marginTop: "120px",
  textAlign: "center",

  "@bp2": {
    fontSize: "48px",
  },

  "&:focus": {
    border: "0",
    outlineWidth: "0",
  },
})

const IndexPage = () => {
  return (
    <Layout header>
      <Box
        flex={"row"}
        css={{
          width: "$full",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          // minHeight: "calc(100vh - 196px)",
          alignItems: "start",
          maxWidth: "1244px",
          margin: "0 auto $128",
          padding: "$64",

          "@bp3": {
            flexDirection: "column",
          },

          "@bp1": {
            padding: "$32",
          },
        }}
      >
        <WritingPreview />
        <WritingList />
      </Box>
      <Career />
    </Layout>
  )
}

export default IndexPage
