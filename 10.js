process.stdin.on('data', n => {
	console.log(n%2 ? 'odd' : 'even');
	process.exit();
});
