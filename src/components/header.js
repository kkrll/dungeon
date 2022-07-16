import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Box } from "./box"

const Logo = ({ siteTitle }) => {
  return (
    <h4 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h4>
  )
}

const Header = () => (
  <header>
    <Box
      flex={"row"}
      css={{
        margin: "0 auto",
        maxWidth: "$max",
        padding: `72px $64`,
        justifyContent: "space-between",
        backgroundColor: "transparent",

        "@bp1": {
          padding: `$32 $32 72px `,
        },
      }}
    >
      <Logo siteTitle="kkrll" />
      <Box flex="row">
        <Link
          to="/"
          style={{
            textDecoration: `none`,
            marginLeft: "24px",
          }}
        >
          <h4>writings</h4>
        </Link>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
            marginLeft: "24px",
          }}
        >
          <h4>contact</h4>
        </Link>
      </Box>
    </Box>
  </header>
)

Logo.propTypes = {
  siteTitle: PropTypes.string,
}

Logo.defaultProps = {
  siteTitle: ``,
}

export default Header
