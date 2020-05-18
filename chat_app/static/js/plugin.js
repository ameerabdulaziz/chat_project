$(document).ready(() => {
	let socket = new WebSocket('ws://127.0.0.1:8000/chat/');
	socket.onopen = websocket_welcome;
	socket.onmessage = websocket_message_show;

	$('#Chatform').submit(e => {
		e.preventDefault();
		message_data = {
			'username': $('input[name="username"]').val(),
			'message': $('input[name="message"]').val(),
		};
		socket.send(JSON.stringify(message_data));
		$('#Chatform')[0].reset();
	})
});

websocket_welcome = () => {
	console.log('Chat is open');
}

websocket_message_show = e => {
	let message_data = JSON.parse(e.data);
	console.log(message_data)
	let coding = `<h5>${message_data.username}</h5><p class="coding">${message_data.message}</p>`;
	$('#messageCanvas').append(coding);
}
