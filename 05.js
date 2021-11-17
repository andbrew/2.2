var oddCount = 0;
for(var i = 100; i >= 0; i--)
	if(i%2) {
		console.log(i);
		oddCount++;
	}
console.log(oddCount + ' odds');
