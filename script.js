function rolarDadoD6 () {
    return Math.floor(Math.random() * 6 ) +1;
}

const botaoRolarD6 = document.getElementById('rolarD6');
const resultadoDivD6 = document.getElementById('resultadoD6');

botaoRolarD6.addEventListener('click', () => {
    const resultadoD6 = rolarDadoD6();
    resultadoDivD6.innerHTML = `<p>${resultadoD6}</p>`;
})





function rolarDadoD20 () {
    return Math.floor(Math.random() * 20 ) +1;
}

const botaoRolarD20 = document.getElementById('rolarD20');
const resultadoDivD20 = document.getElementById('resultadoD20');

botaoRolarD20.addEventListener('click', () => {
    const resultadoD20 = rolarDadoD20();
    resultadoDivD20.innerHTML = `<p>${resultadoD20}</p>`;
})


function rolarDadoD50 () {
    return Math.floor(Math.random() * 50 ) +1;
}

const botaoRolarD50 = document.getElementById('rolarD50');
const resultadoDivD50 = document.getElementById('resultadoD50');

botaoRolarD50.addEventListener('click', () => {
    const resultadoD50 = rolarDadoD50();
    resultadoDivD50.innerHTML = `<p>${resultadoD50}</p>`;
})









