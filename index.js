const { allowedNodeEnvironmentFlags } = require('process');

const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
	res.send('<h1>Hello World!</h1>')
})

io.on('connection', (socket) => {
	console.log('A user has connected!');
	socket.on('disconnect', () => {
		console.log('A user has disconnected!');
	})
})

http.listen(3000, () => {
	console.log('Listening on port :3000');
})