import '../TelaHome/Body.css';
import { useNavigate } from 'react-router-dom';

function Body() {

    const navigate = useNavigate();

    function irParaCadastro() {
        navigate('/cadastro'); 
    }

    return (
        <div className="bodyContainer">
            <div className='mensagemHome'>
                <h2>Bem-vindo à RentWorkers</h2>
                <label>Encontrar ajuda para o trabalho doméstico nunca foi tão fácil.
                Conecte-se com profissionais qualificados para cuidar do seu lar com eficiência e confiança.</label>
                <div className='buttonsHome'>
                    <button className='buttonHomeUm'>Trabalhe-conosco</button>
                    <button onClick={irParaCadastro} className='buttonHomeDois'>Crie uma conta</button>

                </div>
            </div>
           
            <div className='imagemHome'> 
                <img src="/images/LandpageHomeImage.png" width={500} height={500}/>
            </div>
           


        </div>
    )
}

export default Body;
