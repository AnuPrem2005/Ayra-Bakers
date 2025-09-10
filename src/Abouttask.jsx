import React from 'react'
import Abou from '../src/assets/About.png'
import About2 from '../src/assets/About2.png'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';

const About = () => {
  return (
    <div>
      <div className='abo'>
        <h1 className='ab'>About Us</h1>
      </div>
      <br /><br />
      <div>
        <h1 className='abou'>Our Story</h1>
        <div className='abc'>
          <Row className='align-items-center'>
            <Col xs={12} md={6} className='d-flex justify-content-center mb-4 mb-md-0'>
              <img src={Abou} alt="" className='img-fluid ai mt-0' />
            </Col>
            <Col xs={12} md={6} className='d-flex justify-content-center mt-3 mt-md-5'>
              <div>
                <p className='apara'>
                  Our journey began with one humble shop in Fort, Mumbai and grew to over one thousand locations throughout India under the inspiring vision of our founder, Hussein Khorakiwala in the early 1956. Since then, our family has combined their years of experience with the vision of a community of collaborative shop owners, suppliers and other partners working together to create a brand name in the market to grow their business to what it is today.
                </p>
                <br />
                <p className='abpara'>
                  In order to achieve this, the family offers franchises to budding entrepreneurs & distributors partnering with them to ensure success and excellence.
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <h1 className='abou'>Our Mission, Values, and Vision</h1>
        <br /><br />
        <p className='abopara'>
          Creating exceptional cakes is our way of life, and our customers and partners are the focus of everything that we do. Our unwavering commitment to both our customers, franchise partners & distributors is the key to our success in the future. We are dedicated to creating a dynamic environment, conducting ourselves with the highest integrity for every component in our value chain: our customers, suppliers, team members, and franchise partners. By acting in the best interest of everyone along our value chain, we are able to ensure our company’s sweet success.
        </p>
        <br /><br />
        <h1 className='abou'>Our Story</h1>
        <br /><br />
        <Row className='align-items-center'>
          <Col xs={12} md={6} className='mb-4 mb-md-0'>
            <img src={About2} alt="" className='img-fluid alll' />
          </Col>
          <Col xs={12} md={6}>
            <p className='apara'>
              Our journey began with one humble shop in Fort, Mumbai and grew to over one thousand locations throughout India under the inspiring vision of our founder, Hussein Khorakiwala in the early 1956. Since then, our family has combined their years of experience with the vision of a community of collaborative shop owners, suppliers and other partners working together to create a brand name in the market to grow their business to what it is today.
            </p>
            <br />
            <p className='abpara'>
              In order to achieve this, the family offers franchises to budding entrepreneurs & distributors partnering with them to ensure success and excellence.
            </p>
          </Col>
        </Row>
        <h1 className='abou'>Our Stories</h1>
        <br /><br />
        <p className='abopara'>
          Our Cake Shops are conveniently located in local markets and communities to ensure the easy availability of your favorite Monginis cakes, cupcakes, and more. Whether it is for a birthday, anniversary, wedding, or just an evening at home, Monginis has the perfect custom-made, personalized cake for you or your choice from our off-the-shelf customer favorites! Great quality, service, and ethics has developed Monginis into a household name with our 700+ outlets. On an average 1,40,000 customers visit our cake shop daily across the country. Our Cake Shops owners are dedicated to the absolute satisfaction of the customer. Additionally, our long shelf life packaged cakes products are available across 10,00,000 outlets nationally with a sizeable presence in Mall, Super markets and on Railway stations
        </p>
      </div>
      <br />
      <div className="n">
        <div className="con">
          CONTACT US
        </div>
        <div className="com">
          CONNECT WITH US
        </div>
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
      <br />
      <footer className='text-center'>
        Copyright©2025 by Ayra Bakers. All rights reserved
      </footer>
    </div>
  )
}

export default About
