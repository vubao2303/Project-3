// create carosel compoenent using new javascript library slick
// insert card component inside of carosel
// install packages
// import data from database into card using props

import React from "react";
// import API from Utils
import { } from 'react-bootstrap';
// create carosel with enough slides for each class member and staff

function FinalPage() {

return(
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



