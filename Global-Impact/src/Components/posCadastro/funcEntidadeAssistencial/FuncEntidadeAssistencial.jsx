import React, {useState, useEffect, useContext} from 'react'
import HeaderEntidade from '../../headersEFooters/HeaderEntidade'
import Accordion from 'react-bootstrap/Accordion'
import FooterPoscadas from '../../Footer/FooterPoscadas'
import FooterPoscadasEntidade from '../../Footer/FooterPoscadasEntidade'



export default function FuncEntidadeAssistencial() {


return(
<>
   <HeaderEntidade />
   <div className="mrgt-grande mrgx-media">
      <Accordion defaultActiveKey="0">
         <Accordion.Item eventKey="0" className="mrgt-pequena acordeao"
            style={{backgroundColor: '#f5ebdf', border: '2px solid #cf8e30'}}>
            <Accordion.Header>
               <p>Supermercado DIA</p>
               <p class="mrgl-grande" style={{fontSize: '12.5px'}}>Rua André vidal, 228 - 03065070</p>
            </Accordion.Header>
            <Accordion.Body>
               <table class="table table-hover">
                  <thead>
                     <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Quantidade (Kg)</th>
                        <th>Validade</th>
                        <th>Reservar</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr key="">
                        <td>1</td>
                        <td>Banana</td>
                        <td>1,5</td>
                        <td>12/01/2022</td>
                        <td>
                           <label class="chk">
                              <input type="checkbox"></input><span></span>
                           </label>
                        </td>
                     </tr>
                     {/* {usuario.map((p, i) => (
                     <tr key={i}>
                        <td>{p.cd_usuario}</td>
                        <td>{p.nm_usuario}</td>
                        <td>{p.ds_email}</td>
                        <td>{p.sn_usuario}</td>
                        <td>{p.dt_nascimento}</td>
                        <td>{p.ds_gosto_pessoal}</td>
                        <td>{p.gr_genero}</td>
                        <td>
                           <Link title="Editar" to={`/editar/${p.cd_usuario}`}>UPDATE |</Link> <Link title="Excluir"
                              to="/" onClick={handleDelete.bind(this, p.cd_usuario)}> EXCLUIR</Link>
                        </td>
                     </tr>))} */}
                  </tbody>
               </table>
            </Accordion.Body>
         </Accordion.Item>
      </Accordion>
   </div>
   <FooterPoscadasEntidade/>
</>
)}