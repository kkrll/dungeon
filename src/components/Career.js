import React from "react"
import { Box } from "./box"
import { Text } from "./text"

const Career = () => {
  return (
    <>
      <Box
        flex={"column"}
        css={{
          padding: "72px",
          alignItems: "center",
          backgroundColor: "$background_secondary",

          "@bp2": {
            padding: "0",
          },
        }}
      >
        <Box
          flex={"column"}
          css={{
            maxWidth: "1024px",
            justifyContent: "center",
          }}
        >
          <h3>Kiryl Kavalenka</h3>
          <Box flex={"row"} align={"center"}>
            <Text
              css={{
                maxWidth: "540px",
                marginRight: "$16",
                fontFamily: "$serif",
              }}
            >
              I’ve gained my first theory and practice as a freelancer, but it
              would be more fare to say as an arty handyman, working with
              engravings, murals, illustrations, posters and, finally,
              interfaces. Next I’ve learnt to make elaborate and tangible
              products out of ideas helping startups to start at Zensoft. EPAM
              brought order and taught me to work with grownups. Next was time
              to switch from projects to products and with Valve I’ve started to
              learn to do everything. Now I’m doing a bit of everything in
              StarOfService.
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Career
