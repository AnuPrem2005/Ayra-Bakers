import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import After from '../src/assets/after.webp'
import Almond from '../src/assets/almond.webp'
import Capp from '../src/assets/capp.webp'
import Car from '../src/assets/carrot.webp'
import Theme from '../src/assets/themecake.webp'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';

const Speciality = () => {
  return (
    <div>
      {/* Section: Speciality Cakes */}
      <Row>
        <div className='bpi text-center'>
          <h1 className="sp">SPECIALITY CAKES</h1>
          <br />
          <p className='sppara'>
            Our made-to-order range of speciality cakes is here to make any celebration great! From <br />
            Ayra classic cakes to gourmet cakes to customized theme cakes, we have something for <br />
            every special occasion.
          </p>
        </div>
      </Row>

      {/* Section: Ayra Classic Cakes */}
      <div className='spi text-center'>
        <h1 className="sp">Ayra Classic Cakes</h1>
        <br />
        <p className='sppara'>
          A specially curated range of signature Ayra cakes with unique flavours and original homestyle recipes. <br />
          The classics are here to make your special moments more joyous!
        </p>
        <br /><br />

        <CardGroup className="justify-content-center flex-wrap gap-3">
          <Card style={{ minWidth: '250px' }}>
            <Card.Img variant="top" src={After} />
            <Card.Body>
              <Card.Title className='cam'>After Nine Cake</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ minWidth: '250px' }}>
            <Card.Img variant="top" src={Almond} />
            <Card.Body>
              <Card.Title className='cam'>Almond Nougatine Cake</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ minWidth: '250px' }}>
            <Card.Img variant="top" src={Capp} />
            <Card.Body>
              <Card.Title className='cam'>Cappuccino Cake</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ minWidth: '250px' }}>
            <Card.Img variant="top" src={Car} />
            <Card.Body>
              <Card.Title className='cam'>Carrot Cake</Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>

        {/* VIEW ALL button now responsive & color safe */}
        <div className="d-flex justify-content-center mt-4">
          <button className='spbut'>VIEW ALL</button>
        </div>
      </div>

      {/* Section: Customised Theme Cakes */}
      <div className='pinkbg py-4'>
        <h1 className='sp text-center'>Customised Theme Cakes</h1>
        <div className='d-flex flex-wrap justify-content-center align-items-center text-center text-md-start'>
          <img src={Theme} alt="" className='imgwe img-fluid' />
          <p className='lpara mt-3 mt-md-0 ms-md-3'>
            We handcraft and customize celebration cakes for all special occasions. <br />
            From theme-based and personalized birthday cakes to exquisite multi-tiered <br />
            wedding cakes, we have all your celebrations covered!
            <br /><br />
            Write to us with your customized theme cake requirements at <br /> - contact@ayrabakers.in
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="n">
        <div className="con">CONTACT US</div>
        <div className="com">CONNECT WITH US</div>
      </div>
      <div className="wh row">
        <div className="conus col-12 col-md-6 p-3">
          <h1 className='nn'>Our Bakery</h1>
          <p>
            <b className='namen'>AYRA Bakers</b><br />
            123 Cupcake Street,<br />
            Pastry Town, PT 45678
          </p>
          <p>
            <b>📞 Phone</b>: +91 98765 43210 <br />
            <b>📧 Email</b>: hello@sweetdelights.com
          </p>
        </div>

        <div className="mb-3 col-12 col-md-6 p-3">
          <FloatingLabel controlId="floatingInput" label="Enter Email address">
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <br />
          <FloatingLabel controlId="floatingInput" label="Enter Contact Number">
            <Form.Control type='text' placeholder="0123456789"/> 
          </FloatingLabel>
          <br />
          <FloatingLabel controlId="floatingInput" label="Enter Address">
            <Form.Control type="text" placeholder="address" />
          </FloatingLabel>
          <br />
          <div className="bu">
            <button className='but'>Submit</button>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="text-center mt-4">
        Copyright ©2025 by Ayra Bakers. All rights reserved
      </footer>
    </div>
  )
}

export default Speciality
