import { Router } from 'express';
import auth from './auth';
import user from './user';
import post from './post';
import patient from './patient';
import group from './group';

const routes = Router();

routes.use('/auth', auth);
routes.use('/post', post);
routes.use('/user', user);
routes.use('/patient', patient);
routes.use('/group', group);

export default routes;
