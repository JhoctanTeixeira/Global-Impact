import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import CarouselOne from '../../img/CarouOpOne.jpg'
import CarouselTwo from '../../img/CarouOpTwo.jpg'
import CarouselThree from '../../img/CarouOpThree.jpg'
import HeaderAntesCadas from '../../headersEFooters/HeaderAntesCadas'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot, faHamburger, faPizzaSlice, faHotdog, faCheese, faAppleAlt, faCookieBite, faHandHoldingHeart,
faGripLines } from
'@fortawesome/free-solid-svg-icons'
import FooterAntesCadas from '../../Footer/FooterAntesCadas'

export default function Index() {

return (
<>
    <div>
        {/*
        <!-- inicio menu  --> */}

        <HeaderAntesCadas />
        {/*
        <!-- fim menu --> */}

        {/* Inicio Carousel */}
        <div>
            <Carousel className="carouIndex" style={{webkitBoxShadow: '3px 5px 34px 10px #72675B', 
    boxShadow: '3px 5px 34px 10px #72675B'}}>

                <Carousel.Item interval={1000}>
                    <img className="d-block w-100" src={CarouselOne} alt="Food One" />
                    <Carousel.Caption>
                        <p className="carouTexto" style={{position: 'top'}}>Consuma</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img className="d-block w-100" src={CarouselTwo} alt="Food Two" />
                    <Carousel.Caption>
                        <p className="carouTexto">Alimentos</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={CarouselThree} alt="Food Three" />
                    <Carousel.Caption>
                        <p className="carouTexto texThree">com qualidade</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        {/* Fim Carousel */}


        {/* Init Texto Propósito */}
        <div className="textIndex">
            <h3 className="prop">Propósito</h3>
            <p>Com o propósito de diminuir a fome na sociedade, criamos esta plataforma para que haja menos disperdicio de alimentos de supermercados. Assim as entidades assistenciais poderão reservar alimentos que estão próximos da validade, para assim poderem resgatar o alimento e utiliza-lo imediatamente, os supermercados por sua vez irão cadastrar esses alimentos. Com isso conseguiremos reduzir o disperdicio de alimento e poderemos assim alimentar mais pessoas. Food Time, todos juntos contra a fome.
            </p>
        </div>
        {/* Fim Texto Propósito */}


        {/* Inicio icon */}
        <div className="iconsFont">
            <FontAwesomeIcon icon={faHandHoldingHeart} style={{color: '#72675B', marginLeft: '5%' }} />
            <FontAwesomeIcon icon={faGripLines} style={{color: '#7e2c2c', marginLeft: '5%'}} />
            <FontAwesomeIcon icon={faCarrot} style={{color: '#eb9800', marginLeft: '5%'}} />
            <FontAwesomeIcon icon={faHamburger} style={{color: '#457723', marginLeft: '5%'}} />
            <FontAwesomeIcon icon={faPizzaSlice} style={{color: '#ffe600', marginLeft: '5%' }} />
            <FontAwesomeIcon icon={faHotdog} style={{color: '#9c8436',  marginLeft: '5%'}} />
            <FontAwesomeIcon icon={faCheese} style={{color: '#7675bd',  marginLeft: '5%'}} />
            <FontAwesomeIcon icon={faAppleAlt} style={{color: '#ff0000',  marginLeft: '5%'}} />
            <FontAwesomeIcon icon={faCookieBite} style={{color: '#493b25',  marginLeft: '5%'}} />
        </div>
        {/* Fim icon */}

    </div>
    

    {/* Init Video Turorial */}
    <div className="d-flex justify-content-center">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/0zsElXfMhnU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    {/* Fim Video Turorial */}
    <FooterAntesCadas/>
</>
)
}

