const net = require('net');

const port = process.env.PORT ||  3000;
const server = net.createServer(conn => {
    console.log('new client');

    conn.on('data', data => {
        conn.write(data + '\r\n');
    });

    conn.on('end', () => {
        console.log('client left');
    });
});

server.listen(port);