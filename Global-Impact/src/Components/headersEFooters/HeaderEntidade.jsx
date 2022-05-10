import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import Logo from '../img/logo.png'

export default function HeaderEntidade() {

   return(
      <>
      {/*
            <!-- inicio menu  --> */}
            <Navbar collapseOnSelect expand="lg" variant="dark"
                className="back-menu m-0 p-0 d-flex justify-content-between">
                <div className="m-0 container-fluid ">
                    <Link to="/homeEntidade"><img src={Logo} alt="cerebro meditando, nome: calmamente"
                        className="logo m-0"></img>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <Nav className="">
                            <hr style={{backgroundColor: '#f5ebdf'}} />
                            <Link to="/homeEntidade" className="menu-di  mx-1 linkreact" aria-current="page">Home</Link>
                            <Link to="/funcEntidade" className="menu-di mx-1 linkreact">Reservar Alimentos</Link>
                            <Link to="/verificaMReservas" className="menu-dir  mx-1 linkreact">Visualizar minhas reservas</Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
            {/*
            <!-- fim menu --> */}
      </>
)}