import React from "react"
import { Box } from "./Box"
import { Text } from "./Text"

const Career = () => {
  return (
    <>
      <Box
        css={{
          display: "flex",
          flexDirection: "row",
          padding: "72px",
          alignItems: "flex-start",
          backgroundColor: "$background_secondary",
          justifyContent: "space-between",

          "@bp2": {
            padding: "0",
            flexDirection: "column",
          },
        }}
      >
        <Box
          flex={"column"}
          css={{
            maxWidth: "1024px",
            padding: "$64",

            "@bp1": {
              padding: "$32",
            },
          }}
        >
          <h3>Kiryl Kavalenka</h3>
          <Box flex={"row"}>
            <Text
              css={{
                maxWidth: "540px",
                marginRight: "$16",
                fontFamily: "$serif",

                "@bp1": {
                  marginRight: "0",
                },
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
        <Box
          flex={"column"}
          css={{
            maxWidth: "1024px",
            padding: "$64",

            "@bp1": {
              padding: "0 $32 $32",
            },
          }}
        >
          <Box>
            <Text as="h3" css={{ marginBottom: "$4" }}>
              Senior Product Designer
            </Text>
            <Text
              css={{
                maxWidth: "540px",
                marginRight: "$16",
                fontFamily: "$serif",

                "@bp1": {
                  marginRight: "0",
                },
              }}
            >
              at{" "}
              <a href="https://www.starofservice.com/" target="_blank">
                StarOfService
              </a>
            </Text>
          </Box>
          <Text
            css={{
              maxWidth: "540px",
              marginRight: "$16",
              fontFamily: "$serif",

              "@bp1": {
                marginRight: "0",
              },
            }}
          >
            <a href="mailto:k_kov@hotmail.com?subject=Hey%20Kiryl!%20Big%20fan%20of%20yours...">
              k_kov@hotmail.com
            </a>
          </Text>
          <Text
            css={{
              maxWidth: "540px",
              marginRight: "$16",
              fontFamily: "$serif",

              "@bp1": {
                marginRight: "0",
              },
            }}
          >
            See what I’m working on now
          </Text>
        </Box>
      </Box>
    </>
  )
}

export default Career
