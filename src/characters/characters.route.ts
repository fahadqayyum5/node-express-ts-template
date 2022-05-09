import express, { Router } from 'express';

import { createCharacter } from './characters.controller';

const router: Router = express.Router();

//Create new Character
router.route('/').post(createCharacter);


export default router;
