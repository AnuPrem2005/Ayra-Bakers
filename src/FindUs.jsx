import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Cake from '../src/assets/c cakes.webp'
import Brow from '../src/assets/c browinies.webp'
import Des from '../src/assets/c desserts.webp'
import Pas from '../src/assets/c pastries.webp'
import Gif from '../src/assets/gifting.webp'
import Ham from '../src/assets/hampers.webp'
import Cook from '../src/assets/cookies.webp'
import Ccak from '../src/assets/chocolate cake.webp'
import Myus from '../src/assets/CARROT-MYSURPAK.WEBP'
import Tea from '../src/assets/teacakes.webp'
import Col from '../src/assets/collectibles.webp'
import Com from '../src/assets/combos.jpg'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './Task.css'

const Find = () => {
  return (
    <div className="container">
      {/* Products */}
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {[ 
          {img: Cake, title: 'CAKES'}, 
          {img: Brow, title: 'BROWINIES'}, 
          {img: Des, title: 'DESSERTS'}, 
          {img: Pas, title: 'PASTRIES'},
          {img: Gif, title: 'GIFTING'}, 
          {img: Ham, title: 'HAMPERS'}, 
          {img: Cook, title: 'COOKIES'}, 
          {img: Ccak, title: 'CHOCOLATE CAKE'},
          {img: Myus, title: 'MYSURPAK'}, 
          {img: Tea, title: 'TEA CAKES'}, 
          {img: Col, title: 'COLLECTIBLES'}, 
          {img: Com, title: 'COMBOS'},
        ].map((item, index) => (
          <div className="col" key={index}>
            <Card>
              <Card.Img variant="top" src={item.img} className="img-fluid" />
              <Card.Body>
                <Card.Title className="cak">{item.title}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="n text-center my-4">
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

      <footer className="text-center mt-4">
        Copyright©2025 by Ayra Bakers. All rights reserved
      </footer>
    </div>
  )
}

export default Find
