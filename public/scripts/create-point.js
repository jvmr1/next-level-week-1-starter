// fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then(
//     function(res){
//         return res.json()
//     }
// ).then(
//     function(data){
//         console.log(data)
//     }
// )

// document
//     .querySelector(
//     "select[name=uf]"
//     ).addEventListener(
//         "change", () => {
//             console.log("mudei")
//         }
//     )


function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
        .then(
            res => res.json()
        )
        .then(
            states => {
                for (const state of states) {
                    ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
                }

            }
        )

}

populateUFs()


function getCitites(event) {
    // const citySelect = document.querySelector("select[name=city]")
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
        .then(
            res => res.json()
        )
        .then(
            cities => {
                for (const city of cities) {
                    citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
                }

                citySelect.disabled = false
            }
        )


}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCitites)

//itens de coleta

//pegar todos os li's
const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event) {

    const itemLi = event.target

    // .toggle = adicionar ou remover uma classe: .add se nao tiver, .remove  se tiver
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    console.log("itemId: ", itemId)

    // verificar se existem itens selecionados, se sim, pegar os itens selecionados
    // const alreadySelected = selectedItems.findIndex(item => item == itemId)

    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId //isso ser?? true ou false
        return itemFound
    })

    // se ja estiver selecionado, tirar da sele????o
    if (alreadySelected >= 0) {
        // tirar da selecao
        const filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId //false
            return itemIsDifferent
        })

        selectedItems = filteredItems

    } else {
        // se nao estiver selecionado, adicionar ?? sele????o
        selectedItems.push(itemId)
    }
    // console.log(selectedItems)

    console.log("selectedItems: ", selectedItems)

    // atualizar o campo escondido com os itens selecionados
    collectedItems.value = selectedItems

}

