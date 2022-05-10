import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../antesDoCadastro/login/Login.jsx'
import Cadastro from '../antesDoCadastro/cadastro/Cadastro.jsx'
import facebook from '../img/faceImpact.png'
import twitter from '../img/twitterImpact.png'
import instagram from '../img/instaImpact.png'
import LogoI from '../img/logo-icon.png'

export default function FooterPoscadasEntidade() {
return (
<div>
    {/*
    <!-- inicio rodapé --> */}
    <footer className="m-0" id="roda" style={{backgroundColor: '#f2eadf'}}>
        <div className=" rodape">
            <div className="rodape-icone">
                <img src={LogoI} style={{ width: "100%" }} alt="" />
            </div>

            <div className="d-flex justify-content-center align-items-start mrgr-grande" style={{ width: "100%" }}>
                <ul className="rodape-itens mx-1">
                    <li>
                        <Link to="/funcEntidade" className="linkreact text-dimgrayroda-link font-weight-bold itens">Reservar alimentos</Link>
                    </li>

                </ul>

                <ul className="rodape-itens mx-1">
                    <li>
                        <Link to="/verificaMReservas" className="linkreact text-black roda-link font-weight-bold itens">Visualizar minhas reservas</Link>
                    </li>
                </ul>
            </div>

            <div className="rodape-contatos ">
                <ul
                    className="rodape-itens list-group list-group-horizontal list-group-horizontal-sm list-group-horizontal-md list-group-horizontal-xl">
                    <li className="text-light roda-link-redes mx-1"><a href="" target="_blank"><img src={instagram}
                                alt="" /></a></li>
                    <li className="text-light roda-link-redes mx-1"><a href="" target="_blank"><img src={twitter}
                                alt="" /></a></li>
                    <li className="text-light roda-link-redes mx-1"><a href="" target="_blank"><img src={facebook}
                                alt="" /></a></li>
                </ul>
                <p className=" roda-email itens">foodteambej.gg@gmail.com</p>
            </div>
        </div>
    </footer>
    {/*<!-- fim rodapé  --> */}

</div>
)
}