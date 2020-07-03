import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';

import Badge from 'react-bootstrap/Badge'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Avatar from "../images/avatar.jpg"
import Product1 from "../images/avatar.jpg"
import Scissorhands from "../images/scissorhands.png"
import Shoes from "../images/mj-shoes.jpg"
import Maradona from "../images/maradona.jpg"
import Tiger from "../images/tiger.jpg"


import {ReactLogo} from '@styled-icons/boxicons-logos/ReactLogo'
import {Gatsby} from '@styled-icons/remix-line/Gatsby'
import {JsSquare} from '@styled-icons/fa-brands/JsSquare'
import {Bootstrap} from '@styled-icons/fa-brands/Bootstrap'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <hr />
<center><Container className="welcome" fluid>
<Row>
<Col>

    <h1 className="hello-friend">Hello friend</h1><p className="welcome">Welcome to "Gatsby - Snipcart E-commerce". A simple e-commerce shop built using Gatsby and Snipcart. </p> 
<Badge variant="dark">Styled Components</Badge> <Badge variant="dark">React - Bootstrap</Badge> <Badge variant="dark">Snipcart</Badge> <Badge variant="dark">E-commerce</Badge>
</Col>
</Row>
<hr />
</Container></center>

{/* SHOP SECTION STARTS HERE  */}

<Container fluid id="shop" className="container-shop">
<h1 className="shop-title">Shop</h1><p className="shop-description">Our selected products. </p> 
  <Row className="row-shop">
  <Col className="col-shop">
<Image className="product-1" src={Scissorhands} alt='Edwards Scissorhands' roundedCircle />
<p className="product-title"> Edwards Scissorhands.</p>
<p className="product-description"> A pair of Edwards Scissorhands. Stainless steel. Made in Cambodia. </p>
<button className="snipcart-add-item btn btn-dark" 
  data-item-id="Scissorhands"
  data-item-price="30.99"
  data-item-url="/paintings/starry-night"
  data-item-description="A pair of Edwards Scissorhands, latest model. Stainless steel, Made in Cambodia."
  data-item-image="https://studiokrass.com/wp-content/uploads/2020/06/scissorhands.png"
  data-item-name="Edwards Scissorhands.">
  Add to cart
</button>
</Col>
   <Col className="col-shop">
<Image className="product-1" src={Shoes} alt='MJ Shoes' roundedCircle />
<p className="product-title"> Air Jordan Shoes </p>
<p className="product-description"> A pair of michael jordan shoes, the best of all time. Made in Chicago. </p>
<button className="snipcart-add-item btn btn-dark" 
  data-item-id="air-jordan"
  data-item-price="150"
  data-item-url="/paintings/starry-night"
  data-item-description="A pair of michael jordan shoes, the best of all time."
  data-item-image="https://studiokrass.com/wp-content/uploads/2020/06/mj-shoes.jpg"
  data-item-name="Air Jordan Shoes">
  Add to cart
</button>
</Col>
   <Col className="col-shop">
<Image className="product-1" src={Maradona} alt='Maradona Course' roundedCircle />
<p className="product-title"> Diego Maradona Course. </p>
<p className="product-description"> How to invoke god in 8 weeks. <br/> Techniques with ayahuasca.</p>
<button className="snipcart-add-item btn btn-dark" 
  data-item-id="diego-maradona-course."
  data-item-price="315.99"
  data-item-url="/paintings/starry-night"
  data-item-description="How to invoke god in 8 weeks. Techniques with ayahuasca.."
  data-item-image="https://studiokrass.com/wp-content/uploads/2020/06/maradona.jpg"
  data-item-name="Diego Maradona Course.">
  Add to cart
</button>
</Col>
   <Col className="col-shop">
<Image className="product-1" src={Tiger} alt='Eye of the tiger' roundedCircle />
<p className="product-title"> Eye of the tiger. </p>
<p className="product-description"> It's the eye of the tiger, it's the thrill of the fight </p>
<button className="snipcart-add-item btn btn-dark" 
  data-item-id="starry-night"
  data-item-price="95.99"
  data-item-url="/paintings/starry-night"
  data-item-description="It's the eye of the tiger, it's the thrill of the fight."
  data-item-image="https://studiokrass.com/wp-content/uploads/2020/06/tiger.jpg"
  data-item-name="Eye Of The Tiger">
  Add to cart
</button>
</Col>
  </Row>
</Container>

{/* SHOP SECTION ENDS HERE  */}

{/* ABOUT SECTION STARTS HERE  */}
<Container fluid className="about">
<Row>
<Col>
    <Badge id="about" variant="dark">About Me / Sobre Mi</Badge>{' '}

<p>My name is Julian Battaglino. Front-End Web Developer.</p>
    <Image className="avatar" src={Avatar} alt='Avatar' roundedCircle />
<br />
</Col>

</Row>
</Container>
{/* ABOUT SECTION ENDS HERE  */}

  </Layout>
)

export default IndexPage
