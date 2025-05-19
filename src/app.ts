import express,{Application, Express,Request,Response} from 'express'
const app :Application= express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('first server! ');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
