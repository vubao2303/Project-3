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