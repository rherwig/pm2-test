const express = require('express');

const app = express();

app.get('/', (req, res) => res.end('200 OK'));

app.listen(9999, () => {
    console.info('Server listening...');
});
