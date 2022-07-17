import React from "react"
import { styled } from "@stitches/react"

export const Title = styled("h1", {
  lineHeight: "1.4",
  variants: {
    level: {
      1: {
        marginBottom: "$8",
        fontSize: "$48",
        fontFamily: "$sans",
        fontWeight: "600",
      },
      2: {
        marginBottom: "$8",
        fontSize: "$32",
        fontFamily: "$sans",
        fontWeight: "600",
      },
      3: {
        marginBottom: "$20",
        fontSize: "$24",
        fontFamily: "$sans",
        fontWeight: "600",
      },
      4: {
        marginBottom: "$16",
        fontSize: "20px",
        fontFamily: "$sans",
        fontWeight: "600",
      },
      5: {
        marginBottom: "$4",
        marginTop: "$24",
        fontSize: "18px",
        fontFamily: "$serif",
        fontWeight: "500",
      },
    },
  },
  defaultVariants: {
    level: 1,
  },
})

export const ArticleMeta = styled("p", {
  fontSize: "$16",
  color: "$text_secondary",
  marginBottom: "$8",
})

export const Subtitle = styled("h2", {
  fontFamily: "$serif",
  fontWeight: "$400",
  lineHeight: "1.4",
  variants: {
    level: {
      1: {
        fontSize: "$24",
      },
      2: {
        fontSize: "$20",
      },
    },
  },
  defaultVariants: {
    level: 1,
  },
})

export const Paragraph = styled("p", {
  fontFamily: "$serif",
  fontSize: "18px",
  lineHeight: "1.5",
})

export const Caption = styled("p", {
  fontFamily: "$serif",
  fontStyle: "italic",
  fontSize: "18px",
  lineHeight: "1.5",
  color: "$text_secondary",
})

export const List = styled("ul", {
  fontFamily: "$serif",
  fontSize: "18px",
  lineHeight: "24px",
})

export const Divider = styled("div", {
  height: "1px",
  width: "$full",
  backgroundColor: "$background_tertiary",
  marginBottom: "$48",
})

export default {
  Title,
  ArticleMeta,
  Subtitle,
  Paragraph,
  Caption,
  List,
  Divider,
}
