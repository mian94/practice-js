//引入readline模块，该模块提供了按行读取输入流。
const readline = require("readline");

rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});//创建了一个新的readline接口实例，连接到标准输入和输出

let n=0,m=0;
let h=[];
let size=0;
let result=[];

//事件监听器
rl.on("line",(data)=>{
    if(n===0) [n,m]=data.split(" ").map((i)=>+i);//.map((i) => +i) 对数组中的每个元素应用箭头函数 +i，将字符串转换为数字（+ 操作符在这里用于类型转换）
    else main(data);
});

function main(data)
{
    h=[0,...data.split(" ").map((i)=>+i)];
    size = n;
    for(let i=Math.floor(n/2);i;i--) down(i);
    while(m--)
    {
        result.push(h[1]);
        h[1]=h[size];
        size--;
        down(1);
    }
    console.log(result.join(' '))//result.join(' ')将 result 数组中的所有元素连接成一个以空格分隔的字符串
}

function down(x)
{
    let t=x;
    if(x*2<=size&&h[x*2]<h[t]) t=x*2;
    if(x*2+1<=size&&h[x*2+1]<h[t]) t=x*2+1;
    if(t!=x){
        swap(t,x);
        down(t);
    }
}

function swap(a,b)
{
    let t=h[a];
    h[a]=h[b];
    h[b]=t;
}


