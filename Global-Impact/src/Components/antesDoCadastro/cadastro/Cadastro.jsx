import React, {useState, useContext} from 'react'
import HeaderAntesCadas from '../../headersEFooters/HeaderAntesCadas'
import FooterAntesCadas from '../../Footer/FooterAntesCadas'
import FoodTimeContext from '../../context/FoodTimeContext'
import { Link, useHistory } from 'react-router-dom'
 
export default function Cadastro() {


    const { setToken } = useContext(FoodTimeContext);
    const history = useHistory();

    const [novo, setNovo] = useState({
        razao: "",
        nome: "",
        cnpj: "",
        cep: "",
        endereco: "",
        senha: "",
        descricao: ""
    })


    const handleChange = (e) => {
        setNovo({ ...novo, [e.target.name]: e.target.value })
    }    

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("/rest/cliente/", {
            method: "POST",
            headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nm_razao_social: novo.razao,
            nm_fantasia: novo.nome,
            sr_cnpj: novo.cnpj,
            nr_cep: novo.cep,
            ds_endereco: novo.endereco,
            sn_cliente: novo.senha,
            ds_cliente: novo.descricao
        })
        }).then(() => {
            console.log(novo)
            if (novo.descricao == 'entidade assistencial') {
                setToken(novo.cnpj)
                return history.push('/homeEntidade') 
            }
            if(novo.descricao == 'supermercado'){
                setToken(novo.cnpj)
                return history.push('/supermercado') 
            }
        })
    }


    return (
        <>
            <div id="container">
                <div id="main">
                    {/*
            <!-- inicio menu  --> */}
                    <HeaderAntesCadas />
                    {/* <!-- fim menu --> */}

                    {/*<!-- inicio formulario --> */}
                    <div className="formul mrgb-media">
                        <div className="for-cadastro">
                            <form onSubmit={handleSubmit} >
                                <fieldset>
                                    <div>
                                        <label>Razão Social: </label>
                                        <input type="text" className="form-control" id="idRazSocial" name="razao" value={novo.razao} onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mrgt-pequena">
                                        <label>Nome: </label>
                                        <input type="text" className="form-control" id="idNome" name="nome" value={novo.nome} onChange={handleChange}
                                        />
                                    </div>
                                    <div className=" mrgt-pequena">
                                        <label >Cnpj: </label>
                                        <label className="form-tex-cep">Cep: </label>
                                    </div>
                                    <div className="form-cep-cnpj">
                                        <input type="text" className="form-control" id="idCnpj" name="cnpj" value={novo.cnpj} onChange={handleChange}
                                        />
                                        <input type="text" className="form-control mrgl-pequena" id="idCep" name="cep" value={novo.cep} onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mrgt-pequena">
                                        <label>Endereço: </label>
                                        <input type="text" className="form-control" id="idEndereco" name="endereco" value={novo.endereco} onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mrgt-pequena">
                                        <label >Senha: </label>
                                        <input type="password" className="form-control" id="idSenha" name="senha" value={novo.senha} onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mrgt-pequena d-flex justify-content-center">
                                        <label className="mrgr-pequena  " for="idSupermercado">Supermercado: </label>
                                        <input className="mrgt-pequena" type="radio" id="idSupermercado" name="descricao" checked={novo.descricao} onChange={handleChange} value="supermercado"
                                        />
                                        <label className=" ch-supe mrgr-pequena" for="idOng">Entidade Assistencial: </label>
                                        <input className="mrgt-pequena" type="radio" id="idOng" name="descricao" checked={novo.descricao} onChange={handleChange} value="entidade assistencial"
                                        />
                                    </div>



                                    <div className="bt-cadas">
                                         <button type="submit" style={{ backgroundColor: "#cf8e30", color: "#fff", border: "2px solid #72675b" }} className=" btn">Cadastrar</button>

                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                    {/*
            <!-- fim formulario --> */}
                </div>
            </div>
            <FooterAntesCadas/>
        </>
    )


}