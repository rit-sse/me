import express from 'express';
import path from 'path';

const app = express();

app.use('/me', express.static('dist'));

app.get('/me', (req, res)  => res.sendFile(path.join(__dirname, 'dist', 'index.html')));

export default app;
