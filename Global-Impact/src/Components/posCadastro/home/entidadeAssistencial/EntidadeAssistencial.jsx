import React from 'react'
import HeaderEntidade from '../../../headersEFooters/HeaderEntidade'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCheck } from "@fortawesome/free-solid-svg-icons";
import FooterPoscadas from '../../../Footer/FooterPoscadas';
// import { faEye } from "@fortawesome/free-solid-svg-icons";
import Card from 'react-bootstrap/Card'
import UmSuperCar from '../../../img/umsupercar.jpeg'
import DoisSuperCar from '../../../img/doissupercar.jpeg'
import TresSuperCar from '../../../img/tressupercar.jpeg'
import QuatroSuperCar from '../../../img/quatrosupercar.jpg'
import CincoSuperCar from '../../../img/cincosupercar.jpeg'
import FooterPoscadasEntidade from '../../../Footer/FooterPoscadasEntidade';

export default function EntidadeAssistencial() {

  return (
    <>
      <HeaderEntidade />

      {/* <!-- inicio dos cards de 2 funcionalidade --> */}
      {/* <!-- card 1 --> */}
      <div className="mrgx-pequena mrgt-pequena mrgb-media">
        <div className="row m-0 row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="ho-bor">
              <Link to="/verificaMReservas" className="linkreact">

                <div className="card h-100" style={{ border: "0px", position: "static" }}>

                  {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
                  <div className="d-flex justify-content-center mrgt-media">
                    <FontAwesomeIcon icon={faEye} className="tam-funcprin" style={{ color: "#cf8e30" }} />
                  </div>
                  <div className="card-body esp-car">
                    <h5 className="card-title d-flex justify-content-center titulos">Visualizar minhas reservas</h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* <!-- card 2 --> */}
          <div className="col ">
            <div className="ho-bor">
              <Link to="/funcEntidade" className="linkreact" >

                <div className="card h-100" style={{ border: "0px", position: "static" }}>

                  {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
                  <div className="d-flex justify-content-center mrgt-media">
                    <FontAwesomeIcon icon={faCheck} className="tam-funcprin" style={{ color: "#cf8e30" }} />
                  </div>
                  <div className="card-body esp-card">
                    <h5 className="card-title d-flex justify-content-center titulos" style={{ textAlign: 'center' }}>Reservar alimentos</h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- fim dos cards de 2 funcionalidade --> */}
      

      <h1 style={{ display: "flex", justifyContent: "center", color: "#72675b" }}>Apoiadores</h1>

      {/* inicio carrossel dos cards */}
      <div className="card-ca-suon">

        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <main className="car-suon">
          {/* inicio card 1 carrossel */}
          <div className="suon-cards">
            <Card className="ca-su-on" style={{ border: "2px solid #cf8e30", }} >
              <Card.Img variant="top" src={UmSuperCar} style={{ width: "100%", height: "70%" }} />
              <Card.Body>
                <Card.Title style={{ display: "flex", justifyContent: "center" }}>Extra</Card.Title>

              </Card.Body>
            </Card>
          </div>
          {/* fim card 1 carrossel */}

          {/* inicio card 2 carrossel */}
          <div className="suon-cards">
            <Card className="ca-su-on" style={{ border: "2px solid #72675b", }} >
              <Card.Img variant="top" src={DoisSuperCar} style={{ width: "100%", height: "70%" }} />
              <Card.Body>
                <Card.Title style={{ display: "flex", justifyContent: "center" }} >Carrefour</Card.Title>

              </Card.Body>
            </Card>
          </div>
          {/* fim card 2 de carrossel  */}

          {/* inicio card 3 carrossel */}
          <div className="suon-cards">
            <Card className="ca-su-on" style={{ border: "2px solid #cf8e30", }} >
              <Card.Img variant="top" src={TresSuperCar} style={{ width: "100%", height: "70%" }} />
              <Card.Body>
                <Card.Title style={{ display: "flex", justifyContent: "center" }}>Dia </Card.Title>

              </Card.Body>
            </Card>
          </div>
          {/* fim card 3 de carrossel  */}

          {/* inicio card 4 carrossel */}
          <div className="suon-cards">
            <Card className="ca-su-on" style={{ border: "2px solid #72675b", }} >
              <Card.Img variant="top" src={QuatroSuperCar} style={{ width: "100%", height: "70%" }} />
              <Card.Body>
                <Card.Title style={{ display: "flex", justifyContent: "center" }}>Oba</Card.Title>

              </Card.Body>
            </Card>
          </div>
          {/* fim card 4 de carrossel  */}

          {/* inicio card 5 carrossel */}
          <div className="suon-cards">
            <Card className="ca-su-on" style={{ border: "2px solid #cf8e30", }} >
              <Card.Img variant="top" src={CincoSuperCar} style={{ width: "100%", height: "70%" }} />
              <Card.Body>
                <Card.Title style={{ display: "flex", justifyContent: "center" }}>Big</Card.Title>

              </Card.Body>
            </Card>
          </div>
          {/* fim card 5 de carrossel  */}
        </main>
      </div>
      {/* fim carrossel dos cards */}

      {/* inicio video  */}
      <div class="d-flex justify-content-center mrgt-media mrgb-media">

      <iframe width="560" height="315" src="https://www.youtube.com/embed/0zsElXfMhnU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      
      {/* fim video */}
      <FooterPoscadasEntidade/>

    </>
  )
}