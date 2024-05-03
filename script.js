const repairPrices = [...document.querySelectorAll('.repair select')];
const repairPricesDisplay = [...document.querySelectorAll('.repair p')];

window.addEventListener('load', () => {
    repairPricesDisplay.map((element, index) => element.innerHTML = `Valor Máximo: R$ ${repairPrices[index].value}`);
    calculateTotal();
})


repairPrices.map((element, index) => {
    element.addEventListener('change', (e)=>{
        repairPricesDisplay[index].innerHTML = `Valor Máximo: R$ ${e.target.value}`;
        calculateTotal();
    })
})

function calculateTotal (){
    let sum = 0;
    repairPrices.map(element => sum += Number(element.value));
    document.querySelector('.total h3').innerHTML = `Valor Máximo Total: R$ ${sum}`;
}

