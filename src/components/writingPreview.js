import React from "react"
import { Box } from "./box"

import { Paragraph, Subtitle, ArticleMeta, Title } from "./articleTypography"
import { Link } from "gatsby"

const WritingPreview = () => {
  return (
    <Box
      css={{
        maxWidth: "640px",
        paddingBottom: "0",
        marginRight: "$128",
        maxWidth: "$640",

        "@bp3": {
          paddingBottom: "$64",
          marginRight: "$0",
        },
      }}
    >
      <Title level={2}>Recent writing title</Title>
      <ArticleMeta>date</ArticleMeta>
      <Subtitle level={2}>
        It started as an attempt to add a bit of structure and ended up as an
        actionable instrument. Used as an ideation tool, it helped us to raise
        conversion addressing the users hidden from our sight.
      </Subtitle>
      <Paragraph>
        When I just had joined StarOfService as a product designer, I've
        received a tiny task - to prepare a marketing department research brief.
        We didn't have much data about our clients then, but I had to start
        somewhere. I definitely like structures - that's why I was looking for
        one. One of the things I began with was something I may call proto job
        stories - the hypothetical ones. To add some context, StarOfService is a
        specialists marketplace. We are providing access to specialists in
        different areas to help to find the best match for each request. So, to
        say it in a few words, we help our client search.
      </Paragraph>
      <Paragraph>
        Diving into specific services jobs, I discovered that they seemed to
        have much in common. And categorisation by urgency looked quite
        promising - all the stories...
      </Paragraph>
      <Link to="/writings/virality">Continue</Link>
    </Box>
  )
}

export default WritingPreview
