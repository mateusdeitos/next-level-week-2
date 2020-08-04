/* eslint-disable no-console */
import express from 'express';

const app = express();
app.use(express.json());

app.listen(3333, () => {
  console.log('Server rodando na porta 3333');
});
