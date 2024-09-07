function pesquisar() {
    // Obter a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa =document.getElementById("campo-pesquisa").value 

    //se campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p> Nada foi encontrado, em caso de dúvidas digite 'Ajuda!'</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

  console.log(campoPesquisa);
    // Inicializar a string que irá armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Iterar sobre os dados da pesquisa e construir o HTML para cada resultado
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags =dado.tags.toLowerCase()
        // se titulo includes campoPesquisa 
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) ||tags.includes(campoPesquisa) ) {  resultados += `
        <div class="item-resultado">
          <h2>${dado.titulo}</h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">[+] Saiba mais </a>
        </div>
      `;
    }
     if (!resultados){
        resultados = "<p>Nada foi encontrado!</p>"
     }

    // Inserir o HTML construído na seção
    section.innerHTML = resultados;
             
       console.log( dado.titulo.includes(campoPesquisa))
   
  }   
}