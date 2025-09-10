import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

import './Task.css'

import Caro from '../src/assets/caro1.jpg';
import Caro2 from '../src/assets/caro2.webp';
import Caro3 from '../src/assets/caro3.webp';
import Bday from '../src/assets/bday.avif';
import Wed from '../src/assets/wedd.avif';
import Ani from '../src/assets/anni.avif';
import Xep from '../src/assets/xpress.avif';
import Cel from '../src/assets/cele.avif';
import Class from '../src/assets/classic.webp';
import Gour from '../src/assets/gourmet.webp';
import Desi from '../src/assets/designer.webp';
import Dess from '../src/assets/desserts.webp';
import Cooki from '../src/assets/cookies1.webp';
import Bis from '../src/assets/BisoffCheesecake.webp';
import Choco from '../src/assets/Chocolat.webp';
import Bisc from '../src/assets/Bisco.webp';
import Ch from '../src/assets/ChocolateCheeseca.webp';
import Sticks from '../src/assets/Sticks.webp';
import Sweet from '../src/assets/SweetBuns.webp';
import Gar from '../src/assets/Garlic.webp';
import Crou from '../src/assets/Croutons.webp';

const Task = () => {

  const poster = [
    { image: Bday, imgName: 'Bday', des: 'Birthday Cakes' },
    { image: Wed, imgName: 'Wed', des: "Wedding Cakes" },
    { image: Ani, imgName: 'Ani', des: "Anniversary" },
    { image: Xep, imgName: 'Xep', des: 'Xpress Bees' },
    { image: Cel, imgName: 'Cel', des: 'Celebration Cakes' },
  ];

  const menuItems = [
    { image: Class, name: 'CLASSIC' },
    { image: Gour, name: 'GOURMET' },
    { image: Desi, name: 'DESIGNER' },
    { image: Dess, name: 'DESSERTS' },
    { image: Cooki, name: 'COOKIES' },
  ];

  const topSellers = [
    { image: Bis, name: 'Biscoff Cheesecake Slice' },
    { image: Choco, name: 'Chocolate Cheesecake' },
    { image: Bisc, name: 'Biscoff Cheesecake' },
    { image: Ch, name: 'Cheesecake Slice' },
  ];

  const breads = [
    { image: Sticks, name: 'Bread Sticks' },
    { image: Sweet, name: 'Sweet Buns' },
    { image: Gar, name: 'Garlic Bread' },
    { image: Crou, name: 'Sourdough Croutons' },
  ];

  return (
    <div>
      {/* Carousel */}
      <Carousel>
        <Carousel.Item>
          <img src={Caro} alt="slide1" className='d-block w-100 img-fluid' style={{ maxHeight: 500, objectFit: 'cover' }} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Caro2} alt="slide2" className='d-block w-100 img-fluid' style={{ maxHeight: 500, objectFit: 'cover' }} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Caro3} alt="slide3" className='d-block w-100 img-fluid' style={{ maxHeight: 500, objectFit: 'cover' }} />
        </Carousel.Item>
      </Carousel>

      {/* Poster Section */}
      <Container className='my-5'>
        <Row className='justify-content-center text-center g-4'>
          {poster.map((item, idx) => (
            <Col key={idx} xs={6} sm={4} md={3} lg={2}>
              <img src={item.image} alt={item.imgName} className='img-fluid rounded' />
              <p className='mt-2'>{item.des}</p>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Menu */}
      <Container className='text-center my-5'>
        <h1 className='spo'>MENU</h1>
        <h2 className='menuh mt-3 mb-4'>What Will You Wishing For?</h2>
        <Row className='justify-content-center text-center g-4'>
          {menuItems.map((m, i) => (
            <Col key={i} xs={6} sm={4} md={3} lg={2}>
              <img src={m.image} alt={m.name} className='img-fluid rounded' />
              <p className='mt-2'>{m.name}</p>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Top Sellers */}
      <Container className='my-5 text-center'>
        <h1 className='spo'>OUR TOP SELLERS</h1>
        <Row className='g-4 mt-3'>
          {topSellers.map((s, i) => (
            <Col key={i} xs={12} sm={6} md={3}>
              <Card className='h-100'>
                <Card.Img variant="top" src={s.image} className='img-fluid' />
                <Card.Body>
                  <Card.Title>{s.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Breads */}
      <Container className='my-5 text-center'>
        <h1 className='spo'>BREADS</h1>
        <Row className='g-4 mt-3'>
          {breads.map((b, i) => (
            <Col key={i} xs={12} sm={6} md={3}>
              <Card className='h-100'>
                <Card.Img variant="top" src={b.image} className='img-fluid' />
                <Card.Body>
                  <Card.Title>{b.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className='text-center mt-4'>
          <button className='spbutt'>VIEW ALL</button>
        </div>
      </Container>

      {/* Contact */}
      <Container fluid className='bg-light py-5'>
        <Row className='justify-content-center text-center mb-4'>
          <Col xs={12}>
            <h1>CONTACT US</h1>
            <h4>CONNECT WITH US</h4>
          </Col>
        </Row>
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
      </Container>

      {/* Footer */}
      <footer className='text-center py-3'>
        Copyright © 2025 Ayra Bakers. All rights reserved.
      </footer>
    </div>
  );
}

export default Task;
