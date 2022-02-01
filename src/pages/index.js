// import React, { useState } from "react"
// import Img from "gatsby-image"
// import styled from "styled-components"
// import SEO from "../components/seo"
// import Hero from "../components/image"
// import StoryPicture from "../images/cam-adams.jpg"

// import "../components/layout.css"

// const Page = styled.div`
//   display: grid;
//   grid-template-columns: 1fr [start-content] 600px [end-content] 1fr;
//   grid-template-rows: 100vh repeat(3, 1fr) 200px;
//   grid-gap: 2rem;
//   grid-template-areas:
//     "hero    hero    hero"
//     ".       content ."
//     ".       content ."
//     ".       content ."
//     "footer  footer  footer";
//   .hero {
//     grid-area: hero;
//   }
//   main {
//     grid-area: content;
//   }
//   footer {
//     grid-area: footer;
//   }
// `

// const Main = styled.main`
//   display: grid;
//   grid-template-rows: repeat(3, 1fr);
//   grid-template-columns: repeat(2, minmax(200px, 1fr));
//   row-gap: 2rem;
// `

// const Card = styled.article`
//   grid-column: span 2;
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
//   transition: box-shadow 0.2s ease-out;
//   &:hover {
//     box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.1);
//     .content__title {
//       transform: translateY(0);
//     }
//     .content__text {
//       transform: translateY(0);
//       opacity: 1;
//     }
//   }
//   .story__picture {
//     grid-column: 1 / 3;
//     height: 100%;
//     object-fit: cover;
//   }
//   .story__content {
//     grid-column: 3 / 5;
//     padding: 1rem;
//     h2 {
//       font-size: 1rem;
//     }
//     p {
//       font-size: 0.8rem;
//     }
//   }
//   .content__title {
//     transform: translateY(100%);
//     transition: all 0.5s ease-out;
//   }
//   .content__text {
//     transform: translateY(40px);
//     opacity: 0;
//     transition: all 0.8s ease-out 0.2s;
//   }
// `

// const StoryText = styled.div`
//   transform: translateY(40px);
//   opacity: 0;
//   transition: all 0.4s ease-out;
//   &:hover {
//     transform: translateY(0);
//     opacity: 1;
//   }
// `

// const Divider = styled.hr`
//   width: 20%;
//   height: 0.2rem;
// `

// const Story = ({ picture, subTitle, title, children }) => {
//   const [state, setState] = useState({
//     isFullScreen: false,
//   });

//   return (
//     <Card isFullScreen={state.isFullScreen} >
//       <img className="story__picture" src={picture} alt="story-picture" />
//       <div className="story__content">
//         <div className="content__title">
//           <h4>{title}</h4>
//           <h2>{subTitle}</h2>
//           <Divider />
//         </div>
//         <div className="content__text">
//           <p>{children}</p>
//           <p>Read Story</p>
//         </div>
//       </div>
//     </Card>
//   )
// }

// const IndexPage = () => (
//   <Page>
//     <SEO title="Home" />
//     <div className="hero">
//       <Hero />
//     </div>
//     <Main>
//       <Story className="track" subTitle="केरा" title="Day 1" picture={StoryPicture} >
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Nibh sit amet
//         commodo nulla facilisi. Eget sit amet tellus cras adipiscing enim eu
//         turpis.
//       </Story>
//       <Story className="track" subTitle="केरा" title="Day 2" picture={StoryPicture} >
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Nibh sit amet
//         commodo nulla facilisi. Eget sit amet tellus cras adipiscing enim eu
//         turpis.
//       </Story>
//       <Story className="track" subTitle="केरा" title="Day 3" picture={StoryPicture} >
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Nibh sit amet
//         commodo nulla facilisi. Eget sit amet tellus cras adipiscing enim eu
//         turpis.
//       </Story>
//     </Main>
//     <footer style={{ background: "pink" }}></footer>
//   </Page>
// )

// export default IndexPage
