let mes = "Janeiro";
console.log(mes);

switch (mes.toLowerCase()) {
    case "janeiro":
        console.log(`Seu mês tem 31`);
        break;
    case "fevereiro":
        console.log(`Seu mês tem 28 ou 29`);
        break;
    case "março":
        console.log(`Seu mês tem 31`);
        break;
    case "abril":
        console.log(`Seu mês tem 30`);
        break;
    case "maio":
        console.log(`Seu mês tem 31`);
        break;
    case "junho":
        console.log(`Seu mês tem 30`);
        break;
    case "julho":
        console.log(`Seu mês tem 31`);
        break;
    case "agosto":
        console.log(`Seu mês tem 31`);
        break;
    case "setembro":
        console.log(`Seu mês tem 30`);
        break;
    case "outubro":
        console.log(`Seu mês tem 31`);
        break;
    case "novembro":
        console.log(`Seu mês tem 30`);
        break;
    case "dezembro":
        console.log(`Seu mês tem 31`);
        break;
    default:
        console.log(`Não é um mes`);
        break;
}