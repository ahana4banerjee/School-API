import { Router } from 'express';
import { addSchool } from '../apis/addSchool.js';
import { listSchools } from '../apis/listSchools.js';

const router = Router();

router.post('/addSchool', addSchool);
router.get('/listSchools', listSchools);

export default router;
