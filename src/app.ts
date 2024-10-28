import express, { Request, Response } from 'express';
import Usuario from './models/usuario';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    testModel();
    res.send('Hello, world!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


async function testModel() {
    try {
      const usuarios = await Usuario.findAll();
      console.log("Se ejecuto la consulta pero no hay usuarios");
      console.log(usuarios);
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
    }
  }