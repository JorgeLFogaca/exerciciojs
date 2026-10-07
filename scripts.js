//cotações de moedas do dia
const USD = 4.98
const EUR = 5.61
const GBP = 6.61

//funcao para converter moedas
const form = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency')
const footer = document.querySelector('main footer')
const description = document.getElementById('description')
const result = document.getElementById('result')

//manipulação do input amount
amount.addEventListener("input", () => {
    //expressão em regex
    const hasCharacterRegex = /\D+/g
    amount.value = amount.value.replace(hasCharacterRegex, '')
})

form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value) {
        case 'USD':
            convertCurrency(amount.value, USD, 'USD')
            break

        case 'EUR':
            convertCurrency(amount.value, EUR, 'EUR')
            break

        case 'GBP':
            convertCurrency(amount.value, GBP, 'GBP')
            break

    }
}

//função para converter valores 
function convertCurrency(amount, price, symbol) {
    // console.log(amount, price, symbol)

    try {
        //exibir a cotação da moeda
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        //calcular total
        let total = amount * price
        result.textContent = `${formatCurrencyBRL(total).replace('R$', '')} Reais`

        //mostrar o resultado
        footer.classList.add("show-result")

    } catch (error) {
        console.error(error)
    }

}

//formatação para real brasileiro
function formatCurrencyBRL(value) {
    return Number(value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
}