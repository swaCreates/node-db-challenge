const express= require('express');
const helmet= require('helmet');

const server= express();

// middleware
server.use(express.json());
server.use(helmet());

// routes
server.get('/', async (req, res) => {
    await res.send(`<h4 align='center'>Welcome to my server! :)</h4>`);
});

// when there is no route, handler
server.use((req, res) => {
    res.status(404).send(
        `<h4 align='center'>The url ${req.url.toUpperCase()} was not found.</h4>`
    );
});

// error, handler
server.use((err, req, res, next) => {
    console.log('Server error:', err)
	res.status(500).json({
		message: "Oops, something went wrong. Please try again later.",
	});
});

module.exports= server;