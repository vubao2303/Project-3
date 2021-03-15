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
import "./style.css";

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
          <div className="col-sm-4 col-sm-offset-6"> </div>
          <div className="col-sm-8 col-sm-offset-3">
            <div>  <a href={item.linkedIn} target="_blank" >More about me! </a></div>
            <img height="500px" maxwidth="auto" src={item.image} style={{ "width": "50%", "objectFit": "cover" }} alt={item.altText} />

          </div>

        </div>
        <div className="studentQuote">  {item.quote} </div>
        <CarouselCaption className="carouselCaption" captionText={item.nickname} captionHeader={item.name}   >
        </CarouselCaption>
      </CarouselItem >
    );
  });

  return (
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
  );
}

export default StudentCard;


// B tryinng to put this in a card becuase the carousel is not very mobile friendly 

// import React from 'react';
// import { makeStyles, Card, CardContent, Typography } from '@material-ui/core';
// // import "./stats.css";

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//     background: 'linear-gradient(lightgrey, white, white, lightgrey)',
//   },
//   title: {
//     fontSize: 18,
//     textAlign: 'center',
//     fontFamily: 'Helvetica',
//     marginTop: 10,
//     color: 'black',
//   },
//   pos: {
//     marginBottom: 12,
//     fontSize: 30,
//     textAlign: 'center',
//     fontWeight: 'bold',
//     color: 'black',
//   },
// });

// function StudentCard(props) {
//   const classes = useStyles();
//   const items = props.students
//   return (
//     <Card className="animate__animated animate__flipInX card">
//       <CardContent>
//         <Typography className={classes.title} color="textSecondary" gutterBottom>
//           {items.name}
//         </Typography>
//         <Typography className={classes.pos} color="textSecondary">
//           {items.image}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }

// export default StudentCard;

// import React from "react";
// // import "./index.css";


// function StudentCard(props) {
//   return (
//     <div className="col-3">
//       <img alt="students" src={props.students.image} className="img-thumbnail" />
//     </div>
//   );
// }

// export default StudentCard;