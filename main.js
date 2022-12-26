let len=parseInt(prompt("enter the length"));
let ob={};
for(i=1;i<=len;i++){
        let a=prompt("enter your name");
        let b=prompt("enter your village");
        let c=parseInt(prompt("enter your age"));
        let sub={name:a,city:b,age:c};
        ob[i]=sub;
}
console.log(ob);