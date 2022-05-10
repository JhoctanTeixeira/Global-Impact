import React from 'react'
import HeaderEntidade from '../../headersEFooters/HeaderEntidade'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'
import FooterPoscadas from '../../Footer/FooterPoscadas'
import FooterPoscadasEntidade from '../../Footer/FooterPoscadasEntidade';

export default function VerificarMinhasReservas() {

return(
<>
   <HeaderEntidade />
   <div className="mrgt-media d-flex justify-content-center">
      <h1 style={{ display: "flex", color: "#72675b" }}>Minhas reservas</h1>
   </div>
   <div className="mrgt-pequena mrgx-grande">
      <table className="table table-hover">
         <thead>
            <tr>
               <th>ID</th>
               <th>Nome</th>
               <th>Quantidade (Kg)</th>
               <th>Validade</th>
               <th>Excluir reserva</th>
            </tr>
         </thead>
         <tbody>
            <tr key="">
               <td>1</td>
               <td>Banana</td>
               <td>1,5</td>
               <td>12/01/2022</td>
               <td>
                  <Link title="Excluir" to="/verificaMReservas"> {/* onClick={handleDelete.bind(this, p.cd_usuario)}*/}
                     <FontAwesomeIcon icon={faTrash} style={{ color: "crimson" }} />
                  </Link>
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
                  <Link title="Editar" to={`/editar/${p.cd_usuario}`}>UPDATE |</Link> <Link title="Excluir" to="/"
                     onClick={handleDelete.bind(this, p.cd_usuario)}> EXCLUIR</Link>
               </td>
            </tr>))} */}
         </tbody>

      </table>

   </div>
   <FooterPoscadasEntidade/>

</>
)}