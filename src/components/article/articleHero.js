import React from "react"

import { keyframes } from "@stitches/react"

import { Box } from "../Box"
import Header from "../header"
import { Title, Subtitle, ArticleMeta } from "../articleTypography"

const onLoadBg = keyframes({
  "0%": { backgroundColor: "$background_primary" },
  "100%": { backgroundColor: "$background_tertiary" },
})

const onLoadSize = keyframes({
  "0%": { minHeight: "calc(100vh - 196px)" },
  "100%": { minHeight: "50vh" },
})

const ArticleHero = ({ title, subtitle, date, image, extra }) => {
  return (
    <Box
      css={{
        backgroundColor: "$background_tertiary",
        animation: `${onLoadBg} 750ms cubic-bezier(0.45, 0, 0.55, 1)`,
      }}
    >
      <Header />
      <Box
        css={{
          width: "$full",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh",
          padding: "$64",
          maxWidth: "$max",
          margin: "0 auto",
          animation: `${onLoadSize} 750ms cubic-bezier(0.45, 0, 0.55, 1)`,

          "@bp3": {
            flexDirection: "column-reverse",
            alignItems: "start",
          },

          "@bp1": {
            padding: "$32",
          },
        }}
      >
        <Box
          css={{
            maxWidth: "640px",
            marginRight: "$64",

            "@bp3": {
              marginRight: "0",
            },
          }}
        >
          <Title
            css={{
              marginBottom: "$24",
            }}
          >
            {title}
          </Title>
          <Subtitle>{subtitle}</Subtitle>
          <Box flex="row">
            <ArticleMeta>{date}</ArticleMeta>
            {extra && <ArticleMeta>{extra}</ArticleMeta>}
          </Box>
        </Box>
        <Box
          as={"img"}
          src={image}
          alt={title}
          css={{
            width: "420px",
            "mix-blend-mode": "multiply",
            // animation: `${onLoadContent} 750ms ease-out`,
          }}
        />
      </Box>
    </Box>
  )
}

export default ArticleHero
