let totalIdades = 0;      // Soma de todas as idades inseridas
let quantidade = 0;       // Quantidade total de pessoas
let categorias = {        // Contador de cada categoria
    crianca: 0,
    adolescente: 0,
    adulto: 0,
    idoso: 0
};

let idade;

do {
    // Pede para o usuário inserir a idade
    idade = parseInt(prompt("Insira a idade da pessoa (ou 0 para sair):"));

    // Se a idade estiver no intervalo válido (1 a 120), classifica
    if (idade > 0 && idade <= 120) {
        quantidade++;
        totalIdades += idade;

        // Classificação e contagem por categoria
        if (idade <= 12) {
            categorias.crianca++;
            console.log("Criança");
        } else if (idade <= 17) {
            categorias.adolescente++;
            console.log("Adolescente");
        } else if (idade <= 59) {
            categorias.adulto++;
            console.log("Adulto");
        } else {
            categorias.idoso++;
            console.log("Idoso");
        }

    } else if (idade !== 0) { // Se for inválida e diferente de 0
        console.log("Idade inválida! Insira uma idade entre 1 e 120.");
    }

} while (idade !== 0); // Sai do loop se idade for 0

// Exibe os resultados após a inserção de idades
if (quantidade > 0) {
    const mediaIdade = totalIdades / quantidade;
    console.log(`
    Programa encerrado.
    Total de pessoas: ${quantidade}
    Média das idades: ${mediaIdade.toFixed(2)}
    Crianças: ${categorias.crianca}
    Adolescentes: ${categorias.adolescente}
    Adultos: ${categorias.adulto}
    Idosos: ${categorias.idoso}
    `);
} else {
    console.log("Nenhuma idade válida foi inserida.");
}
