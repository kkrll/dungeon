// import React, { useRef, useState, useEffect } from "react"
// import { Box } from "../Box"
// import { styled } from "@stitches/react"
// import LunaIcon0 from "../../images/moon/icons/moon-icon-0.svg"
// import LunaIcon04 from "../../images/moon/icons/moon-icon-04.svg"
// import LunaIcon025 from "../../images/moon/icons/moon-icon-025.svg"
// import LunaIcon05 from "../../images/moon/icons/moon-icon-05.svg"
// import LunaIcon1 from "../../images/moon/icons/moon-icon-1.svg"
// import LunaIcon06 from "../../images/moon/icons/moon-icon-06.svg"
// import LunaIcon075 from "../../images/moon/icons/moon-icon-075.svg"

// const Button = styled("button", {
//   background: "transparent",
//   border: "none",
//   color: "$white",
//   width: "100%",
//   padding: "12px",
//   marginRight: "$8",
//   transition: "0.3s",
//   borderRadius: "$8",

//   "&:hover": {
//     background: "#333",
//     cursor: "pointer",
//   },
// })

// const MoonCanvas = () => {
//   const [currentFrame, setCurrentFrame] = useState(1)
//   const [targetFrame, setTargetFrame] = useState(currentFrame)
//   const currentFramePath = index => {
//     return `/moon/NASA${index.toString().padStart(5, "0")}.png`
//   }

//   const [frame, setFrame] = useState(currentFramePath(currentFrame))
//   const canvas = useRef(null)
//   const moonFrame = new Image()

//   const rotateMoon = value => {
//     setCurrentFrame(currentFrame + value)
//     setFrame(currentFramePath(currentFrame))
//     const ctx = canvas.current.getContext("2d")
//     moonFrame.src = frame
//     ctx.drawImage(moonFrame, 0, 0)
//   }

//   useEffect(() => {
//     setFrame(currentFramePath(currentFrame))
//     const ctx = canvas.current.getContext("2d")
//     moonFrame.src = frame
//     ctx.drawImage(moonFrame, 0, 0)
//   }, [])

//   useEffect(() => {
//     if (targetFrame > currentFrame) {
//       setInterval(rotateMoon(1), 1000 / 24)
//     } else if (targetFrame < currentFrame) {
//       setInterval(rotateMoon(-1), 1000 / 24)
//     }
//   }, [canvas, currentFrame, targetFrame])

//   return (
//     <Box
//       css={{
//         width: "100%",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         marginBottom: "$32",
//       }}
//     >
//       <canvas ref={canvas} width={360} height={360} />
//       <Box
//         css={{
//           display: "flex",
//           flexDirection: "column",
//           marginTop: "$32",
//         }}
//       >
//         <Box
//           css={{
//             display: "flex",
//             width: "360px",
//             flexDirection: "column",
//           }}
//         >
//           <Box
//             css={{
//               display: "flex",
//               justifyContent: "stretch",
//               width: "100%",
//               marginBottom: "$16",
//             }}
//           >
//             <Button onClick={() => setTargetFrame(0)}>
//               <LunaIcon1 />
//             </Button>
//             <Button onClick={() => setTargetFrame(15)}>
//               <LunaIcon075 />
//             </Button>
//             <Button onClick={() => setTargetFrame(30)}>
//               <LunaIcon06 />
//             </Button>
//             <Button onClick={() => setTargetFrame(45)}>
//               <LunaIcon05 />
//             </Button>
//             <Button onClick={() => setTargetFrame(60)}>
//               <LunaIcon04 />
//             </Button>
//             <Button onClick={() => setTargetFrame(75)}>
//               <LunaIcon025 />
//             </Button>
//             <Button onClick={() => setTargetFrame(90)}>
//               <LunaIcon0 />
//             </Button>
//           </Box>
//           <input
//             type="range"
//             min="1"
//             max="90"
//             value={currentFrame}
//             class="slider"
//             id="myRange"
//             onChange={e => setTargetFrame(+e.target.value)}
//           />
//         </Box>
//       </Box>
//     </Box>
//   )
// }

// export default MoonCanvas
