import Router from 'express';
import list from './controller/list.js';
import create from './controller/create.js';

const router = Router();

router.route('/')
    .get(list);

router.route('/')
    .post(create);

export default router;