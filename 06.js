process.stdin.on('data', n => {
	for(var i = 1; i <= n; i++) console.log(i);
	process.exit();
});
