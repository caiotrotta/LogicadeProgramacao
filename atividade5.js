v = []
t = 0
for(i=0; i < 5; i++){
    x = Math.floor(Math.random()*100-0);
    v.push(x)
    t = t+v[i]
}
console.log(v)
console.log("A soma dos vetores é",t)
md = t/5
console.log("A media é",md)
