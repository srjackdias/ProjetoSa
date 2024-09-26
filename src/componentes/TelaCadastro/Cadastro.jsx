import React, { useState } from 'react';
import '../TelaCadastro/Cadastro.css';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
    const [email, setEmailCadastro] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');
    const navigate = useNavigate(); 

    function checkLoginCadastro(e) {
        e.preventDefault(); 

        if (email !== "" && senha !== "" && telefone !== "") {
            cadastrarUsuario(); 
            
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    }

    function cadastrarUsuario() {
        let usuario = {
            email: email,
            senha: senha,
            telefone: telefone,
        };

        const usuariosArmazenados = JSON.parse(localStorage.getItem('usuarios')) || [];

        usuariosArmazenados.push(usuario);

        localStorage.setItem('usuarios', JSON.stringify(usuariosArmazenados));

        alert("Cadastro realizado com sucesso");

        setEmailCadastro('');
        setSenha('');
        setTelefone('');

        console.log(`Email: ${usuario.email}\nSenha: ${usuario.senha}\nTelefone: ${usuario.telefone}`);

        navigate('/login'); 
    }

    return (
        <div className='containerCadastro'>
            <div className='divImagemCadastro'>
                <img className='imgStyleCadastro' src='/images/empregados2.png' alt="Empregados" />
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
                        placeholder="Telefone"
                    />

                    <button className='buttonStyleCadastro' type='submit'>Cadastrar-se</button>
                </form>
            </div>
        </div>
    );
}

export default Cadastro;
