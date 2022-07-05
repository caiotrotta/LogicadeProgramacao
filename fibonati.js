x=9
for(t=9;t>=0;t--){
    if(t==x){
        console.log(t);
    }else if(x>t){
        console.log(x);
        x=t-3;
    }else{
        t--;
    }
        x++;
}