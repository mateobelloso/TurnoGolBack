import { Request, Response } from 'express';
import Usuario from '../models/Usuario';

//Funcion que permite crear un usuario (faltan los verdaderos atributos de la tabla)
const createUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const newUser = await Usuario.create({ username, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
};

export default { createUser };
