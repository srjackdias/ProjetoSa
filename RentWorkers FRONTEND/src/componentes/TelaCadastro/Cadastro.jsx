import React, { useState } from 'react';
import '../TelaCadastro/Cadastro.css';

function Cadastro() {
    const [email, setEmailCadastro] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');

    function checkLoginCadastro(e) {
        if (email !== "" && senha !== "" && telefone !== "") {
            e.preventDefault();
        }
    }

    return (
        <div className='containerCadastro'>
            <div className='divImagemCadastro'>
                <img className='imgStyleCadastro' src='/images/empregados2.png' alt="Empregados"/>
            </div>

            <div className='divFormCadastro'>
                <form className='divForm' onSubmit={checkLoginCadastro}>
                    <div>
                        <h1>Cadastrar</h1>
                    </div>

                    <input
                        className='inptCadastro'
                        type='text'
                        value={email}
                        onChange={(e) => setEmailCadastro(e.target.value)}
                        placeholder="Email"
                    />
                    <input
                        className='inptCadastro'
                        type='password'
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        placeholder="Senha"
                    />
                    <input
                        className='inptCadastro'
                        type='text'
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        placeholder="55"
                    />

                    <button className='buttonStyleCadastro' type='submit'>Cadastrar-se</button>
                </form>
            </div>
        </div>
    );
}

export default Cadastro;
