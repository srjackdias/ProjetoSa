import React, { useState } from 'react';
import '../TelaDeBusca/NavBusca.css';
import DadosPessoais from './DadosPessoais';
import IconBusca from './IconBusca';

function NavBusca() {
  const [inputNome, setInputNome] = useState('');
  const [dados, setDados] = useState([
    {
      id: Date.now(),
      nome: "Marcos",
      funcao: "Faxineiro",
      localizacao: "Tapera",
      imagemPerfil: "/images/download 30.png"

    },
    {
      id: Date.now() + 1,
      nome: "Loan",
      funcao: "Porteiro",
      localizacao: "Balneário",
      imagemPerfil: "/images/download 8@2x.png"

    },

    {
      id: Date.now() + 1,
      nome: "Arthur",
      funcao: "Pedreiro",
      localizacao: "Ribeirao",
      imagemPerfil: "/images/download 30.png"

    },

    
    {
      id: Date.now() + 1,
      nome: "Flash",
      funcao: "Estudante",
      localizacao: "Manaus",
      imagemPerfil: "/images/download 8@2x.png"

    },

    {
      id: Date.now() + 1,
      nome: "Isabela",
      funcao: "Recepcionista",
      localizacao: "Algum lugar",
      imagemPerfil:  "/images/download 30.png"


    },

    {
      id: Date.now() + 1,
      nome: "Rosa",
      funcao: "Faxineira",
      localizacao: "Saco grande",
      imagemPerfil: "/images/download 8@2x.png"

    },

    
    {
      id: Date.now() + 1,
      nome: "Marcio",
      funcao: "Copeiro",
      localizacao: "Manaus",
      imagemPerfil:  "/images/download 30.png"

    },

    {
      id: Date.now() + 1,
      nome: "Marcia",
      funcao: "Domestica",
      localizacao: "Manaus",
      imagemPerfil: "/images/download 8@2x.png"

    },
    
    {
      id: Date.now() + 1,
      nome: "Rui costa",
      funcao: "Programador",
      localizacao: "Manaus",
      imagemPerfil:  "/images/download 30.png"

    },
    
    {
      id: Date.now() + 1,
      nome: "Luiz",
      funcao: "Engenheiro",
      localizacao: "Manaus",
      imagemPerfil: "/images/download 8@2x.png"

    },

    {
      id: Date.now() + 1,
      nome: "Matheus luiz",
      funcao: "Professor ",
      localizacao: "Manaus",
      imagemPerfil:  "/images/download 30.png"

    },

    
    {
      id: Date.now() + 1,
      nome: "Luiza",
      funcao: "Recepcionista",
      localizacao: "Manaus",
      imagemPerfil: "/images/download 8@2x.png"

    }
  ]);

  // function BuscarTrabalhador() {
    // let novoDado = {
    //   id: Date.now(),
    //   nome: inputNome,
    //   funcao: "Função não especificada",
    //   localizacao: "Localização não especificada"
    // };

    // setDados([novoDado, ...dados]);
  // }
  
  const [dadosFiltrados, setDadosFiltrados] = useState(dados); 

  function BuscarTrabalhador() {
    const filtrados = dados.filter(d => d.nome.toLowerCase().includes(inputNome.toLowerCase()));
    setDadosFiltrados(filtrados);
  }

  return (
    <>
      <div className='NavContainer'>
        <img className='imgLogo' src='/images/LogoRentWorkers.png' />

        <div className='divSelectPainel'>
          <h1 className='TituloUm'>Inicio</h1>

          <label className='ordernarpow'>ORDENAR POR:</label>

          <select className='selectFiltro' name=''>
            <option value="">Nenhum</option>
            <option value=""></option>
          </select>
        </div>

        <div className='divSelectPainelDois'>
          <div className='inputContainer'>
            <input
              className='inputStyle'
              placeholder='Buscar'
              value={inputNome}
              onChange={(event) => setInputNome(event.target.value)}
            />
            <button onClick={BuscarTrabalhador} className="btnBuscar">
              <IconBusca style={{ width: '20px', height: '20px' }} />
            </button>
          </div>
          <img className='imgPerfil' src='/images/download 46 (1).png' />
        </div>
      </div>

      <div className='cards'>
        {dadosFiltrados.map((d) => (
          <DadosPessoais dado={d} key={d.id} />
        ))}
      </div>
    </>
  );
}

export default NavBusca;