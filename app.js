function pesquisar() {

    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(!campoPesquisa){
        section.innerHTML = "<p>Nada foi digitado. Tente novamente.</p>.";
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados) {
        titulo.toLowerCase();
        descricao.toLowerCase();
        tags.toLowerCase();

        if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa) 
         || dado.tags.includes(campoPesquisa))
        {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
        }  
    }

    if (!resultados)
    {
        resultados = "<p>Nenhum conteúdo foi encontrado.</p>"
    }

    section.innerHTML = resultados;

 } 