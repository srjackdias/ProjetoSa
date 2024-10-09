import React from 'react'


import "../TelaPerfil/Perfil.css"

function Perfil() {
    return (
        <div className='container-Perfil'>
            <div className='divPainel'>




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
                </div>

            </div>

        </div>
    )
}

export default Perfil
