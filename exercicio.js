nome = ['Andre','Maria','Camila','Jose','Andreia'];
idade = []
max = 0
nomeMaior = ""
for(i=0;i < nome.length; i++){
    x = Math.floor(Math.random()* 80-0);
    idade[i] =  x;
    console.log(nome[i], ' - ', idade[i]);
    if(x > max){
        max = idade[i];
        nomeMaior = nome[i]
    }
}
console.log("Maior: ", nomeMaior, "com idade", max);
