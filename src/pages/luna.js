// import { styled } from "@stitches/react"
// import * as React from "react"
// import { Box } from "../components/Box"
// import MoonCanvas from "../components/luna/moonCanvas"
// import { StaticImage } from "gatsby-plugin-image"
// import PlusIcon from "../images/moon/icons/plus.svg"
// import { Link } from "gatsby"

// const LunaText = styled("p", {
//   lineHeight: "1.4",
//   fontFamily: "sans-serif",

//   variants: {
//     color: {
//       grey: {
//         color: "#888",
//       },
//       white: {
//         color: "#fff",
//       },
//     },
//     size: {
//       h1: {
//         fontSize: "48px",
//       },
//       h2: {
//         fontSize: "24px",
//       },
//       h3: {
//         fontSize: "18px",
//       },
//       h4: {
//         fontSize: "16px",
//       },
//       p: {
//         fontSize: "16px",
//       },
//     },
//   },
// })

// const LunaPage = () => {
//   return (
//     <Box
//       css={{
//         backgroundColor: "#242424",
//         height: "100vh",
//         width: "100vw",
//         color: "$white",
//         padding: "0 32px",
//         display: "grid",
//         gridTemplateColumns: "1fr 1fr 2fr",
//         gridGap: "24px",
//       }}
//     >
//       <Box
//         css={{
//           paddingTop: "$16",
//           paddingBottom: "$64",
//           display: "flex",
//           flexDirection: "column",
//           borderLeft: "1px solid #333",
//         }}
//       >
//         <Link to="/">
//           <LunaText
//             css={{
//               lineHeight: "24px",
//               borderBottom: "1px solid #fff",
//               width: "fit-content",
//               color: "$white",
//               textDecoration: "none",
//             }}
//           >
//             Home
//           </LunaText>
//         </Link>
//         <LunaText
//           size="h2"
//           css={{
//             lineHeight: "24px",
//             marginTop: "128px",
//             marginBottom: "128px",
//           }}
//         >
//           Lunnar Phases Viewer/
//         </LunaText>
//         <PlusIcon style={{ marginLeft: "-8px" }} />
//         <Box
//           css={{
//             display: "flex",
//             flexDirection: "column",
//             height: "100%",
//             justifyContent: "center",
//           }}
//         >
//           <LunaText color="grey" size="h3">
//             02
//           </LunaText>
//           <LunaText size="h2">Waxing Gibbous</LunaText>
//           <Box
//             css={{
//               margin: "$32 $16 $32 0",
//               display: "flex",
//             }}
//           >
//             <StaticImage
//               src="../images/moon.png"
//               width={120}
//               height={120}
//               quality={95}
//               formats={["auto", "webp", "avif"]}
//               alt="A Gatsby astronaut"
//               style={{ marginBottom: `1.45rem`, width: "120px" }}
//             />
//             <Box
//               css={{
//                 marginLeft: "$16",
//                 width: "120px",
//                 display: "flex",
//                 justifyContent: "end",
//               }}
//             >
//               <LunaText>N.H.</LunaText>
//               <LunaText
//                 css={{
//                   marginLeft: "$8",
//                 }}
//               >
//                 S.H.
//               </LunaText>
//             </Box>
//           </Box>
//           <Box
//             css={{
//               display: "flex",
//             }}
//           >
//             <Box
//               css={{
//                 marginRight: "$32",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//               }}
//             >
//               <LunaText color="white">Northers Hemisphere</LunaText>
//               <LunaText color="grey">Northers Hemisphere</LunaText>
//             </Box>
//             <Box
//               css={{
//                 marginRight: "$32",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//               }}
//             >
//               <LunaText color="white">Southern Hemisphere</LunaText>
//               <LunaText color="grey">Northers Hemisphere</LunaText>
//             </Box>
//             <Box
//               css={{
//                 marginRight: "$32",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//               }}
//             >
//               <LunaText color="white">Visibility</LunaText>
//               <LunaText color="grey">Northers Hemisphere</LunaText>
//             </Box>
//           </Box>
//         </Box>

//         <PlusIcon style={{ marginLeft: "-8px" }} />
//       </Box>
//       <Box
//         css={{
//           paddingTop: "$64",
//           paddingBottom: "$64",
//           display: "flex",
//           flexDirection: "column",
//           borderLeft: "1px solid #333",
//         }}
//       >
//         <LunaText
//           css={{
//             lineHeight: "24px",
//             marginTop: "128px",
//             marginBottom: "128px",
//           }}
//         >
//           Interaction/
//         </LunaText>
//         <PlusIcon style={{ marginLeft: "-8px" }} />
//         <Box
//           css={{
//             display: "flex",
//             flexDirection: "column",
//             height: "100%",
//             justifyContent: "center",
//           }}
//         >
//           <Box
//             css={{
//               display: "flex",
//             }}
//           >
//             <Box
//               css={{
//                 marginRight: "$32",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//               }}
//             >
//               <LunaText color="white">Mid-phase Standart Time</LunaText>
//               <Box
//                 css={{
//                   display: "flex",
//                   alignItems: "baseline",
//                 }}
//               >
//                 <LunaText
//                   size="h1"
//                   css={{
//                     marginRight: "$4",
//                   }}
//                 >
//                   9
//                 </LunaText>
//                 <LunaText color="grey">p.m.</LunaText>
//               </Box>
//             </Box>
//             <Box
//               css={{
//                 marginRight: "$32",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//               }}
//             >
//               <LunaText color="white">Southern Hemisphere</LunaText>
//               <Box
//                 css={{
//                   display: "flex",
//                   alignItems: "baseline",
//                 }}
//               >
//                 <LunaText
//                   size="h1"
//                   css={{
//                     marginRight: "$4",
//                   }}
//                 >
//                   3
//                 </LunaText>
//                 <LunaText color="grey">p.m.</LunaText>
//               </Box>
//             </Box>
//             <Box
//               css={{
//                 marginRight: "$32",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//               }}
//             >
//               <LunaText color="white">Visibility</LunaText>
//               <Box
//                 css={{
//                   display: "flex",
//                   alignItems: "baseline",
//                 }}
//               >
//                 <LunaText
//                   size="h1"
//                   css={{
//                     marginRight: "$4",
//                   }}
//                 >
//                   3
//                 </LunaText>
//                 <LunaText color="grey">a.m.</LunaText>
//               </Box>
//             </Box>
//           </Box>
//         </Box>

//         <PlusIcon style={{ marginLeft: "-8px" }} />
//       </Box>
//       <Box
//         css={{
//           paddingTop: "$64",
//           paddingBottom: "$64",
//           display: "flex",
//           flexDirection: "column",
//           borderLeft: "1px solid #333",
//         }}
//       >
//         <LunaText
//           size="h2"
//           css={{
//             lineHeight: "24px",
//             marginTop: "128px",
//             marginBottom: "128px",
//           }}
//         >
//           sequence goes there
//         </LunaText>
//         <PlusIcon style={{ marginLeft: "-8px" }} />
//         <Box
//           css={{
//             display: "flex",
//             flexDirection: "column",
//             height: "100%",
//             width: "100%",
//             justifyContent: "center",
//           }}
//         >
//           <Box>
//             <MoonCanvas />
//           </Box>
//         </Box>
//         <PlusIcon style={{ marginLeft: "-8px" }} />
//       </Box>
//     </Box>
//   )
// }

// export default LunaPage
