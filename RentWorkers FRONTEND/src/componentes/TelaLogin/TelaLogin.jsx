import '../TelaLogin/Login.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function TelaLogin() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    function verificarLogin(e) {
        e.preventDefault();

        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        const usuario = usuarios.find(user => user.email === email && user.senha === senha);

        if (usuario) {
            alert('Login bem-sucedido!');
            navigate('/');
        } else {
            alert('Email ou senha inválidos.');
        }
    }

    return (
        <div className="containerLogin">
            <div className="divImagem">
                <img className='imgStyle' src='/images/empregados2.png' alt="Empregados"/>
            </div>
            <div className="divFormLogin">
                <form className='divForm' onSubmit={verificarLogin}>
                    <div>
                        <h1>Login</h1>
                    </div>

                    <input
                        className='inptLogin'
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <input
                        className='inptLogin'
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        placeholder="Senha"
                    />

                    <button className="buttonStyle" type="submit">Entrar</button>
                </form>
            </div>
        </div>
    )
}

export default TelaLogin;
