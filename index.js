const server= require('./api/server.js');

const port= process.env.PORT || 5200;

server.listen(port, () => {
    console.log(`Server listening on port ${port}..`);
});