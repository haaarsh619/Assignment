let f = new Array(10);

function preCompute()
{
 f[0] = f[1] = 1;
 for (let i = 2; i<10; ++i)
  f[i] = f[i-1] * i;
}

function isStrong(x)
{
 let factSum = 0;

 let temp = x;
 while (temp)
 {
  factSum += f[temp%10];
  temp = Math.floor(temp/10);
 }

 return (factSum == x);
}

 preCompute();

 let x = 145;
 isStrong(x) ? console.log("Yes") :
 console.log("No");
