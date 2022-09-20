function primecheck(N){

for(let i=1; i<=N; i++)
{
	
		if(N%i==0)
		{
			count=0;
		}
	}
	if(count==2)
	{
	console.log(N, "is Prime");
	}
	else
	{
	console.log(N, "is not Prime");
	}
}
	
primecheck(10)
