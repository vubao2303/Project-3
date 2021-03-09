// create carosel compoenent using new javascript library slick
// insert card component inside of carosel
// install packages
// import data from database into card using props

import React from "react";
// import API from Utils
import { Carousel, Card } from 'react-bootstrap';
// create carosel with enough slides for each class member and staff

function FinalPage() {

    return (
        <Carousel>
            <Carousel.Item>
                {/* build student card */}
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="student img" />
                    <Card.Body>
                        <Card.Title>Place Holder Student Name</Card.Title>
                        <Card.Text>Place Holder Hobbies</Card.Text>
                        <Card.Text>Place Holder Quote</Card.Text>
                        <Card.Text>Place Holder LinkedIn</Card.Text>
                        <Card.Text>Place Holder Title</Card.Text>
                    </Card.Body>
                </Card>

            </Carousel.Item>
        </Carousel>

    )

}

export default FinalPage;



// // B trying 
// <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
//     <div className="carousel-inner">
//         <div className="carousel-item active">
//             <div className="card mb-3">
//                 <h2>{props.name}</h2>
//                 <h3>Also known as {props.nickname}</h3>
//                 <h4>Hobbies:</h4>
//                 <p>{props.hobbies}</p>
//                 <h4>Quote:</h4>
//                 <p>{props.quote}</p>
//                 <h5>Link:</h5>
//                 <a href={props.linkedIn} >See more info on this person!</a>
//             </div>
//         </div>

//     </div>
//     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//     </button>
//     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//     </button>
// </div>


