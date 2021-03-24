// const path = require("path")

// // exports.onCreateNode = ({
// //   node,
// //   actions,
// //   createNodeId,
// //   createContentDigest,
// // }) => {
// //   const { createNode } = actions

// //   if (node.internal.type === "ServicesJson") {
// //     console.log(node)
// //     console.log(path.parse(node.image))
// //     const { name, ext } = path.parse(node.image)
// //     const absolutePath = path.resolve(__dirname, "./content/assets", node.image)
// //     const dir = path.join(__dirname, "/content/assets")

// //     const data = {
// //       name,
// //       ext,
// //       dir,
// //       absolutePath,
// //       extension: ext.substring(1),
// //     }

// //     const imageNode = {
// //       ...data,
// //       id: createNodeId(
// //         `imgae-${name}-${Math.random.toString(36).substr(3, 8)}`
// //       ),
// //       internal: {
// //         type: "ServiceImage",
// //         contentDigest: createContentDigest(data),
// //       },
// //     }

// //     createNode(imageNode)

// //     // const newNode = {
// //     //   ...node,
// //     //   id: `${Math.random.toString(36).substr(3, 9)}-${Math.random.toString(
// //     //     36
// //     //   )}`,
// //     //   image: imageNode,
// //     //   internal: {
// //     //     contentDigest: node.internal.contentDigest,
// //     //     type: "NewServiceJson",
// //     //   },
// //     // }

// //     // createNode(newNode)
// //   }
// // }

// exports.onCreateNode = ({ node, getNode, createContentDigest, actions }) => {
//   const { createNodeField, createNode } = actions
//   // console.log(
//   //   "=============================================================",
//   //   Object.keys(actions)
//   // )
//   // console.log(node.internal.type)
//   if (node.internal.type === `Projects1Json`) {
//     //const slug = createFilePath({ node, getNode, basePath: `pages` })

//     // console.log("+++", node.image, typeof node.image)

//     const { name, ext } = path.parse(node.image)
//     const absolutePath = path.resolve(__dirname, "./static/assets", node.image)
//     console.log(absolutePath)
//     const dir = path.join(__dirname, "/static/assets")

//     const data = {
//       name,
//       ext,
//       dir,
//       absolutePath,
//       extension: ext.substring(1),
//     }

//     const imageNode = {
//       ...data,
//       id: `${node.id}-ImageProject`,
//       parent: node.id,
//       internal: {
//         type: "Project1Image",
//         contentDigest: createContentDigest(data),
//       },
//     }

//     createNode(imageNode)

//     //const imagePath = "../../../static/assets" + node.image
//     createNodeField({
//       node,
//       name: "imageSh__NODE",
//       value: imageNode,
//     })
//   }
// }

// // gatsby-node.js
// const { fmImagesToRelative } = require("gatsby-remark-relative-images")

// exports.onCreateNode = ({ node }) => {
//   fmImagesToRelative(node)
// }

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = `
    type ImageSh @infer {
      image: File @fileByAssetPath
    }

    type Projects3Json implements Node @infer {
      video: ImageSh
    }
  `

  createTypes(typeDefs)
}
