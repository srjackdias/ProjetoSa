import React from 'react'


import "../TelaPerfil/Perfil.css"

import { Hamburger, Plus } from './IconPerfil';


function Perfil() {
    return (
        <div className='container-Perfil'>
            <div className='divPainel'>
                <Hamburger style={{ width: '30px', height: '30px',marginTop: '2rem'  }} />
                <Plus style={{ width: '30px', height: '20px' }} />



            </div>

            <div className='divPerfil'>

                <div className='div-cima'>

                    <img className='imgPerfilum' src='/images/download 46 (1).png' alt="Perfil" />
                    <p className='fonteNome'>jackson arthur dudu dos santos</p>
                </div>

                <div className='divPerfil-Esquerda'>

                    <div className='div-dados'>
                        <p>Dados</p>

                    </div>

                    <div className='div-nota'>
                        <p>Nota e Avaliações</p>
                    </div>

                    <div className='div-solicitacoes'>
                        <p>Solicitações de trabalho</p>
                    </div>



                    <div className='div-vazio'>

                    </div>

                    <div className='div-Sair'>
                        <p>Sair</p>


                    </div>


                </div>


                <div className='div-meio'>
                    <p className='fonteUm'>Email: jacklo@gmail.com</p>
                    <p className='fonteDois'>CPF: 123.1235.552-55</p>
                    <p className='fonteTres'>Telefone: +55 48 99152.5325</p>
                    <p className='fonteQuadro'>Cep: 88725-095</p>

                    <div className='div-botoes'>

                        <button className='botaoSalvar'>Salvar</button>
                        <button className='botaoInfo'>Editar Informações</button>


                    </div>



                    <div className='div-form'>

                        <div className='div-formeio'>
                        <img className='imgPerfildois' src='/images/download 46 (1).png' alt="Perfil" />
                        <button className='botaoExcluir'>Excluir Foto</button>
                        <button className='botaoAlterar'>Alterar Foto</button>


                        </div>

                    </div>

                </div>

                
            </div>

        </div>
    )
}

export default Perfil
