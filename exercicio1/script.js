console.log('<--------------Parte.1--------------->');

//Parte 1: fazendo os arrays e os emprimindos.

const jogo = [27, 16, 81, 38];
const bixo = ["cavalo", "cachorro", "galor"];
const jogoDoBixo = [21, "cavalo", true];


console.log('Apenas números:\n', jogo);
console.log('Apenas strings:\n', bixo);
console.log('Jogo do Bixo:\n', jogoDoBixo);


console.log('<--------------Parte.2--------------->');

//Checando quantidade de itens em cada array.

console.log('Quantidade de itens em cada array:', jogo.length);
console.log('Array "jogo":', jogo.length);
console.log('Array "bixo":', bixo.length);
console.log('Array "jogo do bixo":', jogoDoBixo.length);

console.log('<--------------Parte.2.1--------------->');

//Imprimindo cada item de um array por posição.

console.log('Primeiro item do array "jogo":', jogo[0]);
console.log('Primeiro item do array "bixo":', bixo[1]);
console.log('Primeiro item do array "jogo do bixo":', jogoDoBixo[2]);

console.log('<--------------Parte.2.2--------------->');

//Imprimindo um valor boleano

console.log(jogo.includes(27));
console.log(jogoDoBixo.includes(27));

console.log('<--------------Parte.3--------------->');

//fazendo cópias das arrays e adicionando itens.

const bixoCop = bixo.slice();
const jogoCop = jogo.slice();
const jogoDoBixoCop = jogoDoBixo.slice();

jogoCop.push(32)
console.log('Original:', jogo);
console.log('Cópia:', jogoCop);

console.log('<--------------Parte.3.1--------------->');

//removendo itens do array.

bixoCop.pop();
console.log('Original:', bixo);
console.log('Cópia:', bixoCop);

console.log('<--------------Parte.3.2--------------->');

//removendo não específico e específico.

jogoDoBixoCop.splice(1,1);
console.log('Original:', jogoDoBixo);
console.log('Cópia:', jogoDoBixoCop);