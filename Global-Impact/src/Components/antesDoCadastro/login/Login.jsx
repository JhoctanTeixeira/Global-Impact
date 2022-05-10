import FooterAntesCadas from '../../Footer/FooterAntesCadas'
import React, { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import FoodTimeContext from '../../context/FoodTimeContext'
import HeaderAntesCadas from '../../headersEFooters/HeaderAntesCadas'



export default function Login() {

    function inicialState(){
        return {cnpj: '', senha: ''}
    }

    const [cliente, setCliente] = useState([])

    useEffect(() => {
        fetch("/rest/cliente").then((resp) => {
            return resp.json()
        }).then((resp) => {
            setCliente(cliente => ({
                ...cliente,
                cd_cliente: resp.map(( p ) => p.cd_cliente),
                sr_cnpj: resp.map(( p ) => p.sr_cnpj),
                sn_cliente: resp.map(( p ) => p.sn_cliente),
                ds_cliente: resp.map(( p ) => p.ds_cliente)
            }))
            
        }).catch((error) => {
            console.error(error)
        })
    }, [])
    

    const [values, setValues] = useState(inicialState);
    const { setToken } = useContext(FoodTimeContext);
    const history = useHistory();


    function login ({cnpj, senha}, {sr_cnpj, sn_cliente, ds_cliente}) {
        for (var i=0; i < sr_cnpj.length; i++) {
            for(var j=0; j < sn_cliente.length; j++) {
                for (var l=0; l < ds_cliente.length; l++){
                    if(sr_cnpj[i] === cnpj && sn_cliente[j] === senha && ds_cliente[i] === 'entidade assistencial'){
                        return {token: {sr_cnpj: sr_cnpj[i], ds_cliente: ds_cliente[i]}}
                    }
                    if (sr_cnpj[i] === cnpj && sn_cliente[j] === senha && ds_cliente[i] === 'supermercado'){
                        return {token: {sr_cnpj: sr_cnpj[i], ds_cliente: ds_cliente[i]}}
                    }
                }
            }
        }   
        
        return {error: 'Usuario invalido'};
        
    }




    function handleChange(event) {
        const {value, name } = event.target;
        setValues({
            ...values,
            [name]: value
        });
        console.log(values)
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        const { token } = login(values, cliente)


        if(token){
            if (token.ds_cliente === 'entidade assistencial'){
                setToken(token.sr_cnpj)
                return history.push('/homeEntidade');
            }
            if (token.ds_cliente === 'supermercado'){
                setToken(token.sr_cnpj)
                return history.push('/supermercado')
            }
        }
        setValues(inicialState)
            
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
                                        <label>Cnpj: </label>
                                        <input type="number" className="form-control" id="idCnpj" name="cnpj" onChange={handleChange} value={values.cnpj}
                                        />
                                    </div>

                                    <div className="mrgt-pequena">
                                        <label >Senha: </label>
                                        <input type="password" className="form-control" id="idSenha" name="senha" onChange={handleChange} value={values.senha}
                                        />
                                    </div>

                                    <div>
                                        <button type="submit" style={{ backgroundColor: "#cf8e30", color: "#fff", border: "2px solid #72675b" }} className="bt-login btn">Login</button>
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

