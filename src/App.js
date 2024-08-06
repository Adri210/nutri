import React, { useEffect , useState} from 'react';
import './index.css';
import './App.css';

function App () {
  const [nutri, setNutri] = useState([]);

  useEffect(()=>{
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
  
    fetch(url)
    .then((r)=> r.json())
    .then((json)=> setNutri(json))
  }, []);

  return(
    <div>
      <header>
        <strong class='titulo'>React Nutri</strong>
      </header>

      {nutri.map((item)=>{
        return(
          <article key={item.id} >
            <strong class='subtitulo'>{item.titulo}</strong>
            <div class='artigo'>
            <img src = {item.capa} alt={item.titulo} class='imagem' />
            <p>{item.subtitulo}</p>
            </div>
            
            <div class='botao'>
            <button>Acessar</button>
            </div>
          </article>
        )
      })}
    </div>

  );
}

export default App;