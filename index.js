let querjogar = "SIM"
console.log("Quer jogar jokenpô?" );
let msg1 = prompt(" ")
msg1 = msg1.toUpperCase()
if(msg1 !== "SIM"){
console.log("Que pena!!! Até a próxima vez.");
}

while(querjogar === "SIM"){




let jogadasusuario = prompt("Digite o numero de jogadas: ");


let vitoriasu=0
let vitoriaspc=0
let empates=0

for (let i = 1; i <= jogadasusuario; i++){
  
let lista = ["PEDRA", "PAPEL", "TESOURA"];

let listarandom = lista[Math.floor(Math.random() * 3)];



let respostau = prompt("Escolha: Pedra, Papel ou tesoura ");
respostau = respostau.toUpperCase()
if(respostau !== "PEDRA"  && respostau !==  "PAPEL" && respostau !== "TESOURA"){
console.log("RESPOSTA INVÁLIDA! Escolha Pedra, Papel ou Tesoura");
}

console.log(listarandom);




if (respostau === "PAPEL" && listarandom === "PEDRA"){
console.log("Parabéns você ganhou");
vitoriasu=vitoriasu=1;
} else if (respostau === "PEDRA" && listarandom === "TESOURA"){
console.log("Parabéns você ganhou");
vitoriasu=vitoriasu=1;
} else if (respostau === "TESOURA" && listarandom === "PAPEL"){
console.log("Parabéns você ganhou");
vitoriasu=vitoriasu=1;
} else if (respostau === listarandom){
console.log("EMPATE!!!");
empates=empates+1
} else {
  console.log("Vc perdeu :(");
  vitoriaspc=vitoriaspc+1;
}
}

 console.log("as vitorias do usuário são "+vitoriasu);
 console.log("as vitorias do pc são "+vitoriaspc);
 console.log("o numero de empates é "+empates);


let querjogar2 = prompt("Quer jogar novamente?");
querjogar2 = querjogar2.toUpperCase()
querjogar = querjogar2
}

console.log("Obrigada por jogar! Até a próxima.");