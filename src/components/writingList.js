import React from "react"
import { Box } from "./Box"
import { Link } from "gatsby"
import { Text } from "./Text"

const WritingList = () => {
  return (
    <Box
      css={{
        width: "$full",
      }}
    >
      <Text
        as="h3"
        css={{
          lineHeight: "36px",
          fontSize: "$20",
          marginTop: "$4",
          marginBottom: "$48",
        }}
      >
        recent writings
      </Text>
      <ul>
        <li>Search types</li>
        <li>
          <Link to="/writings/virality">Virality</Link>
        </li>
        <li>Pro cards</li>
      </ul>
    </Box>
  )
}

export default WritingList
