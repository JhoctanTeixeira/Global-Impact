import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Index from '../antesDoCadastro/index/Index'
import Cadastro from '../antesDoCadastro/cadastro/Cadastro'
import Login from '../antesDoCadastro/login/Login'
import CadastrarAlimentos from '../posCadastro/cadastrarAlimentos/CadastrarAlimentos'
import Supermercado from '../posCadastro/home/supermercado/Supermercado'
import EntidadeAssistencial from '../posCadastro/home/entidadeAssistencial/EntidadeAssistencial'
import FuncEntidadeAssistencial from '../posCadastro/funcEntidadeAssistencial/FuncEntidadeAssistencial'
import VerificarMinhasReservas from '../posCadastro/verificarMinhasReservas/VerificarMinhasReservas'
import FuncSupermercado from '../posCadastro/funcSupermercado/FuncSupermercado'
import Provider from '../provider/Provider'
import RoutesPrivate from '../Routes/private/Private'

export default function Main() {


return (
<>
   <Provider>
      <Switch>
         <Route exact path="/">
            <Redirect to="/index" />
         </Route>
         <Route path="/index" component={Index} />
         <Route path="/cadastro" component={Cadastro} />
         <Route path="/login" component={Login} />
         <RoutesPrivate path="/cadastraralimentos" component={CadastrarAlimentos} />
         <RoutesPrivate path="/supermercado" component={Supermercado} />
         <RoutesPrivate path="/homeEntidade" component={EntidadeAssistencial} />
         <RoutesPrivate path="/funcEntidade" component={FuncEntidadeAssistencial} />
         <RoutesPrivate path="/funcSupermercado" component={FuncSupermercado} />
         <RoutesPrivate path="/verificaMReservas" component={VerificarMinhasReservas} />
      </Switch>
   </Provider>
</>
)

}