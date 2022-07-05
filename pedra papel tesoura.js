eu = "tesoura";
a = Math.floor(Math.random()*3);
// esta parte, serve para colocar como texto, a escolha do computador
if(a == 0){
    pc = "pedra";
}else if(a == 1){
    pc = "papel";
}else{
    pc = "tesoura"
}
// Agora o programa escreverá na tela, a escolha do usuário e PC
console.log("Computador: ", pc);
console.log("Minha escolha: ", eu);
// Este If escreverá quem ganhou o jogo
if((eu == "pedra" && pc == "tesoura") || (eu == "tesoura" && pc == "papel") || (eu == "papel" && pc == "pedra")){
    console.log("Você ganhou");
}else if(eu == pc){
    console.log("empate");
}else{
    console.log("computador ganhou");
}