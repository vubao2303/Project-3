// import React from "react";

// function StudentCard(props) {
//   return (
//       <div className="container">

//         <div className="card mb-3">
//           <h2>{props.name}</h2>
//           <h3>Also known as {props.nickname}</h3>
//           <h4>Hobbies:</h4>
//           <p>{props.hobbies}</p>
//           <h4>Quote:</h4>
//           <p>{props.quote}</p>
//           <h5>Link:</h5>
//           <a href = {props.linkedIn} >See more info on this person!</a>
//         </div>

//       </div>
//   )
// }
// export default StudentCard;
// import react and use state
// import componets in order to use carosel
// create var of items that host the student data from props
// create carousel functionality
// return item data indside of carosel component
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import { UncontrolledCarousel } from 'reactstrap';
import "./style.css";
import Final from "../FinalPage/FinalPage"



const StudentCard = (props) => {

  const items = props.students

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"

        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item}
      >
        {/* <Final /> */}
        <div className="row">

          <div className="col-md-4 col-md-offset-6"> </div>
          <div className="col-md-7 col-md-offset-3">
            <img height="550px" width="auto" src={item.image} style={{ "width": "50%", "objectFit": "cover" }} alt={item.altText} />
          </div>

        </div>

        <CarouselCaption captionText={item.quote} captionHeader={item.name} >

        </CarouselCaption>
      </CarouselItem>
    );
  });






  return (
    // <div>
    //   <style>
    //     {
    //       `.custom-tag {
    //           max-width: 100%;
    //           height: 500px;

    //         }`
    //     }
    //   </style>

    <Carousel height="500px" width="auto"
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>

    // </div>
  );
}

export default StudentCard;

//   // CarouselCaption
// } from 'reactstrap';

// // set hook to grab data from yearbook 
// // 
// // const [student, setStudent] = useState({})



// function StudentCard(props) { 
//   const items = props.students
//   console.log(items)

//   return (
//     <Carousel />
//     // activeIndex={activeIndex}
//     // next={next}
//     // previous={previous}
//     >
//       {/* <CarouselIndicators items={items.name} activeIndex={activeIndex} onClickHandler={goToIndex} />
//       {slides}
//       <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
//       <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
//     </Carousel> */}


//   );
// }












// import React from "react";

// function StudentCard(props) {
//   return (
//     <div className="container">

//       <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <div className="card mb-3">
//               <h2>{props.name}</h2>
//               <h3>Also known as {props.nickname}</h3>
//               <h4>Hobbies:</h4>
//               <p>{props.hobbies}</p>
//               <h4>Quote:</h4>
//               <p>{props.quote}</p>
//               <img alt="student" src={props.image} />
//               <h5>Link:</h5>
//               <a href={props.linkedIn} >See more info on this person!</a>
//             </div>
//           </div>

//         </div>
//         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </div>
//   )
// }


// export default StudentCard;