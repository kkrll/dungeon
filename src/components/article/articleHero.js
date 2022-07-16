import React from "react"

import { keyframes } from "@stitches/react"

import { Box } from "../box"
import Header from "../header"
import { Title, Subtitle, ArticleMeta } from "../articleTypography"

const onLoadBg = keyframes({
  "0%": { minHeight: "calc(100vh - 196px)" },
  "100%": { minHeight: "50vh" },
})

// const onLoadContent = keyframes({
//   "0%": { opacity: "0" },
//   "66%": { opacity: "0" },
//   "100%": { opacity: "1" },
// })

const ArticleHero = ({ title, subtitle, date, image }) => {
  return (
    <Box
      css={{
        backgroundColor: "$background_tertiary",
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
          animation: `${onLoadBg} 750ms cubic-bezier(0.45, 0, 0.55, 1)`,
          padding: "$64",
          maxWidth: "$max",
          margin: "0 auto",

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
            // animation: `${onLoadContent} 750ms ease-out`,

            "@bp3": {
              marginRight: "0",
            },
          }}
        >
          <Title>{title}</Title>
          <ArticleMeta
            css={{
              marginBottom: "$24",
            }}
          >
            {date}
          </ArticleMeta>
          <Subtitle>{subtitle}</Subtitle>
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
