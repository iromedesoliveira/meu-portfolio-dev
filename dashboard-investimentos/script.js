const planoInvestimento = {
    savings: 0.30,
    dividendStocks: 0.30,
    dayTrade: 0.40
};

function calcularAlocacao(valorTotal) {
    return {
        poupanca: valorTotal * planoInvestimento.savings,
        dividendos: valorTotal * planoInvestimento.dividendStocks,
        dayTrade: valorTotal * planoInvestimento.dayTrade
    };
}

console.log("Alocação para R$ 300,00:", calcularAlocacao(300));