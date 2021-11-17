process.stdin.on('data', n => {
	console.log(n < 0 ? 'negative' : 'positive');
	process.exit();
});
