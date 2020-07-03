import { Link } from "gatsby"
import React from "react"
import {ReactLogo} from '@styled-icons/boxicons-logos/ReactLogo'
import {Gatsby} from '@styled-icons/remix-line/Gatsby'
import {JsSquare} from '@styled-icons/fa-brands/JsSquare'
import {Bootstrap} from '@styled-icons/fa-brands/Bootstrap'
import {ShoppingCart} from '@styled-icons/typicons/ShoppingCart'



const Header = () => (
  <header>
      <h1><Link className="site-title" to="/">Gatsby - Snipcart E-commerce</Link></h1> 

 <ReactLogo size="40" title="Reactjs" /> <Gatsby size="40" title="Gatsby" /> <JsSquare className="js-square" size="40" title="JS" /> <Bootstrap className="bootstrap" size="40" title="Bootstrap" />

  </header>
)

export default Header
