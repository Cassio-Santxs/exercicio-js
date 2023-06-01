document.addEventListener("DOMContentLoaded", () => {
    let raInput = document.getElementById("ra-input");
    let nameInput = document.getElementById("name-input");

    let succesMsg = document.getElementById("succes-msg");

    let btnCadastro = document.getElementById("btn-cadastro");
    let btnExcluir = document.getElementById("btn-excluir");

    let infoContainer = document.getElementById("info-table");

    btnCadastro.addEventListener("click", () => {
        if(nameInput.value != "" && raInput != "") {
            succesMsg.classList.remove("invisible");
            succesMsg.classList.add("visible");

            let tr = document.createElement("tr");

            tr.innerHTML = 
            `
            <td class="info-container">
                <h3>${nameInput.value}</h3>
                <h3>${raInput.value}</h3>
            </td>
            `;

            infoContainer.appendChild(tr);
        }
    });

    btnExcluir.addEventListener("click", () => {
        raInput.value = ""
        nameInput.value = ""
    });
});