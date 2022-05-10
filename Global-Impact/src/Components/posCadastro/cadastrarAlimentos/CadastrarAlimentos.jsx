import FooterPoscadas from '../../Footer/FooterPoscadas'
import HeaderAntesCadas from '../../headersEFooters/HeaderAntesCadas'
import React, { useState, useContext, useEffect } from 'react'
import HeaderSupermercado from '../../headersEFooters/HeaderSupermercado'
import { useHistory } from 'react-router-dom'
import FoodTimeContext from '../../context/FoodTimeContext'


export default function CadastroAlimento() {

    const [cliente, setCliente] = useState([])
    const { token } = useContext(FoodTimeContext);
    const [cnpjtok, setCnpjtok] = useState(token);
    const [codusertok, setCodusertok] = useState();
    const { setToken } = useContext(FoodTimeContext);
    const history = useHistory();
    console.log(cnpjtok)
    

    useEffect(() => {
        fetch("/rest/cliente").then((resp) => {
            return resp.json()
        }).then((resp) => {
            setCliente(cliente => ({
                ...cliente,
                cd_cliente: resp.map(( p ) => p.cd_cliente),
                sr_cnpj: resp.map(( p ) => p.sr_cnpj)
            }))
            
        }).catch((error) => {
            console.error(error)
        })
    }, [])

    const [novo, setNovo] = useState({
        codCliente: "", //aq vai ficar o token
        nome: "",
        quantidade: "",
        validade: ""
    })

    const [insert, setInsert] = useState(null)


    const handleChange = (e) => {
        setNovo({ ...novo, [e.target.name]: e.target.value })
    } 
    
    function getCdUsuario (token_cnpj, {sr_cnpj, cd_cliente}) {
        for (var i=0; i < sr_cnpj.length; i++) {
            for(var j=0; j < cd_cliente.length; j++) {        
                if(sr_cnpj[i] === token_cnpj){
                    console.log(sr_cnpj[i])
                    console.log(cd_cliente[i])
                    return {token: {sr_cnpj: sr_cnpj[i], cd_cliente: cd_cliente[i]}}
                }       
            }
        }       
        return {error: 'Usuario invalido'};   
    }

    function getSrCnpj (token_cod, {sr_cnpj, cd_cliente}) {
        for(var i=0; i < cd_cliente.length; i++) {        
            for (var j=0; j < sr_cnpj.length; j++) {
                if(cd_cliente[i] === token_cod){
                    console.log(sr_cnpj[i])
                    console.log(cd_cliente[i])
                    return {token: sr_cnpj[i]}
                }       
            }
        }       
        return {error: 'Usuario invalido'};   
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const { token } = getCdUsuario(cnpjtok, cliente)


        if(token){
            setCodusertok(token.cd_cliente)
            setToken(token.cd_cliente)
            console.log(token)
            setInsert(insert => ({
                ...insert,
                codCliente: token.cd_cliente,
                nome: novo.nome,
                quantidade: novo.quantidade, 
                validade: novo.validade
            }))
            console.log(novo)
            
            if (insert != null){
                console.log(insert)
                fetch("/rest/alimentos/", {
                    method: "POST",
                    headers: {
                    Accept: 'application/json',
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    cd_cliente: insert.codCliente,
                    nm_alimento: insert.nome,
                    qt_alimento: insert.quantidade,
                    dt_validade: insert.validade
                })
                }).then(() => {
                    console.log(insert)
                    const { token } = getSrCnpj(codusertok, cliente)
                    if(token){
                        setToken(token)
                        console.log(token)
                        return history.push('/supermercado')
                    }
                })
            }
            

        }
        
    }

    const [confirmacao, setConfirmacao] = useState('')

    const confirmaCadastro = () =>{
        setConfirmacao('Clique de novo para confirmar')
    }

    return (
        <>
            <div id="container">
                <div id="main">
                    {/* <!-- inicio menu  --> */}
                    <HeaderSupermercado />
                    {/* <!-- fim menu --> */}

                    {/*<!-- inicio formulario --> */}
                    <div className="formul mrgb-media">
                        <div className="for-cadastro">
                            <form onSubmit={handleSubmit} >
                                <fieldset>
                                    <div>
                                        <label>Nome do alimento: </label>
                                        <input type="text" className="form-control" id="idNomeAlimento" name="nome" values={novo.nome} onChange={handleChange}
                                        />
                                    </div>
                                    <div className=" mrgt-pequena">
                                        <label >Quantidade: </label>
                                        <label className="form-tex-da">Vencimento: </label>
                                    </div>
                                    <div className="form-cep-cnpj">
                                        <input type="text" className="form-control" id="idQuantidade" name="quantidade" value={novo.quantidade} onChange={handleChange}
                                        />
                                        <input type="Date" className="form-control mrgl-pequena" id="idData" name="validade" value={novo.validade} onChange={handleChange}
                                        />
                                    </div>


                                    <div className="bt-cadas">
                                        <button type="submit" onClick={()=> confirmaCadastro() }  style={{ backgroundColor: "#cf8e30", color: "#fff", border: "2px solid #72675b" }} className="bt-cadas btn">Cadastrar</button>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center ">
                        <p style={{fontSize: '30px', color: '#cf8e30'}}>{confirmacao}</p>
                    </div>
                    {/*
            <!-- fim formulario --> */}
                </div>
            </div>
            <FooterPoscadas/>
        </>
    )


}