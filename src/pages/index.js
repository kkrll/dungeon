import React from "react"
import { Box } from "../components/box"

import Layout from "../components/layout"
import Career from "../components/career"
import WritingList from "../components/writingList"
import WritingPreview from "../components/writingPreview"

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
