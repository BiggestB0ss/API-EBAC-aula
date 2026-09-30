// localStorage carregando o cep

const cepSalvo = localStorage.getItem("cep");

if (cepSalvo) {
    document.getElementById("cep").value = cepSalvo;
}
document.getElementById("cep").addEventListener("blur", (evento) => {
})

// evento
document.getElementById("cep").addEventListener("blur", (evento)=> {
    const elemento = evento.target;
    const cepInformado = elemento.value;

    // validação do cep
    if (!(cepInformado.length === 8)) {
        return;
    }

    // buscar cep
    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
        .then(response => response.json())
        .then(data => {
            // processamento
            if (!data.erro) {
                document.getElementById("logradouro").value = data.logradouro;
                document.getElementById("bairro").value = data.bairro;
                document.getElementById("cidade").value = data.localidade;
                document.getElementById("uf").value = data.uf;
                document.getElementById("estado").value = data.uf;
             // localStorage
                localStorage.setItem("cep", cepInformado);
            }else{alert("CEP não encontrado!")

            }
        })
        .catch(error => console.error("Erro ao buscar o CEP ", error));
})