import Logger from '../logger';
import { Connection, createConnection, useContainer } from 'typeorm';
import { Container } from 'typedi';

export default async (): Promise<Connection> => {
  useContainer(Container); 
  try { 
    return await createConnection();
  } catch (err) {
    Logger.error(err);
    throw err;
  }
};
