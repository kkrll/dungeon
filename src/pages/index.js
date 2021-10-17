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
import { styled } from "../../stitches.config.js"

const Result = styled("h2", {
  fontSize: "196px",
  width: "$full",
  textAlign: "center",
  padding: "$16",
  height: "148px",
  lineHeight: "initial",

  "@bp2": {
    fontSize: "120px",
  },
})

const SidesNumber = styled("button", {
  width: "100%",
  textAlign: "center",
  padding: "$32 $16",
  color: "$white",
  borderRadius: "$32",
  transition: "$inOut1",
  lineHeight: "48px",
  fontFamily: "Newsreader, Bitter, Verdana, serif",
  margin: "$8",

  "@bp2": {
    padding: "$16",
    lineHeight: "24px",
    borderRadius: "$16",
    // width: "fit-content",
    flex: "1 1 72px;",
  },

  variants: {
    state: {
      normal: {
        backgroundColor: "$grey8",
        fontSize: "24px",
        border: "0",

        "@bp2": {
          fontSize: "16px",
        },
      },
      active: {
        backgroundColor: "#295162",
        fontSize: "32px",
        border: "1px solid $grey6",

        "@bp2": {
          fontSize: "18px",
        },
      },
    },
  },
})

const IndexPage = () => {
  const [inputValue, setInputValue] = useState("")
  const [previousInputValue, setPreviousInputValue] = useState({
    dice: 20,
    input: "",
  })
  const [dice, setDice] = useState(0)

  const diceSides = [
    {
      name: "d4",
      value: 4,
    },
    {
      name: "d6",
      value: 6,
    },
    {
      name: "d8",
      value: 8,
    },
    {
      name: "d10",
      value: 10,
    },
    {
      name: "d12",
      value: 12,
    },
    {
      name: "d20",
      value: 20,
    },
    {
      name: "d100",
      value: 100,
    },
  ]

  const cheats = [
    "kiryl",
    "kirill",
    "inter",
    "toroymoi",
    "puppy",
    "ptitim",
    "internazionale",
    "mother",
  ]

  const [previousResults, setPreviousResults] = useState([])

  const [activeSidesNumber, setActiveSidesNumber] = useState(20)

  const handleSubmit = e => {
    e.preventDefault()
    setPreviousInputValue({ dice: activeSidesNumber, input: inputValue })
    const convertValue = () => {
      let convertedValue
      let rawNumber = parseInt(inputValue, 36).toString()
      if (inputValue) {
        cheats.includes(inputValue)
          ? (convertedValue = activeSidesNumber)
          : (convertedValue =
              (rawNumber
                .slice(-1 * (Math.random() * rawNumber.length - 2))
                .substring(0, 2) /
                99) *
              activeSidesNumber)
      } else {
        convertedValue = Math.random() * activeSidesNumber
      }
      return convertedValue
    }
    setDice(Math.ceil(convertValue()))
    let updatedResults = []
    previousResults.length < 6
      ? (updatedResults = previousResults)
      : (updatedResults = previousResults.slice(1, 10))

    updatedResults.push({
      dice: previousInputValue.dice,
      result: dice,
      input: previousInputValue.input,
    })

    setPreviousResults(updatedResults)
  }

  const handleKeypress = e => {
    if (e.keyCode === 13) {
      handleSubmit(e)
    } else if (e.keyCode === 32) {
      e.preventDefault()
      setInputValue("")
      handleSubmit(e)
    }
  }

  return (
    <>
      <div
        className="dice-container"
        // css={{
        //   display: "flex",
        //   width: "$full",
        //   height: "100vh",
        //   justifyContent: "space-between",
        //   alignItems: "center",
        //   marginBottom: "$16",
        //   backgroundColor: "$grey9",
        //   color: "$white",
        // }}
      >
        <Box
          css={{
            display: "flex",
            flexWrap: "nowrap",
            width: "100%",
            padding: "$8",

            "@bp2": {
              flexWrap: "wrap",
            },
          }}
        >
          {diceSides.map(number => {
            return (
              <SidesNumber
                key={number.value}
                onClick={() => setActiveSidesNumber(number.value)}
                state={number.value === activeSidesNumber ? "active" : "normal"}
              >
                {number.name}
              </SidesNumber>
            )
          })}
        </Box>
        <Box
          css={{
            padding: "$16",
          }}
        >
          <form onSubmit={handleSubmit}>
            <input
              className="dice-input"
              type="search"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              placeholder="spell"
              onKeyDown={handleKeypress}
            />
            <input className="dice-submit" type="submit" value="Submit" />
          </form>
        </Box>
        <Box
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "96px",
            backgroundColor: "$grey9",

            "@bp2": {
              marginTop: "32px",
            },
          }}
        >
          {dice === previousInputValue.dice ? (
            <Box
              css={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Result>{dice}</Result>
              <Box
                css={{
                  fontSize: "96px",
                  lineHeight: "120px",
                  marginLeft: "48px",
                  margin: "$64 0 0 $32",

                  "@bp2": {
                    margin: "0 auto",
                  },
                }}
              >
                ʕ•́ᴥ•̀ʔっ
              </Box>
            </Box>
          ) : (
            <Result>{dice}</Result>
          )}
          {previousResults.length ? (
            <Box
              css={{
                height: "1px",
                backgroundColor: "#295162",
                width: "$320",
                margin: "$64 0",
              }}
            />
          ) : null}
          <Box
            css={{
              display: "flex",
              flexDirection: "row",

              "@bp2": {
                flexDirection: "column-reverse",
              },
            }}
          >
            {previousResults.map(previousResult => {
              return (
                <Box
                  css={{
                    padding: "$16",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom: "$8",
                  }}
                >
                  <p>d{previousResult.dice}</p>
                  <h2>{previousResult.result}</h2>
                  {previousResult.input ? (
                    <p>"{previousResult.input}"</p>
                  ) : (
                    <p>random</p>
                  )}
                </Box>
              )
            })}
          </Box>
        </Box>
      </div>
    </>
  )
}

export default IndexPage
