import express from 'express';
import {
	createUrl,
	deleteUrl,
	getAllUrl,
	getUrl,
} from '../controllers/shortUrl';

const router = express.Router();

router.post('/shortUrl', createUrl);
router.get('/shortUrl', getAllUrl);
router.get('/shortUrl', getUrl);
router.delete('/shortUrl', deleteUrl);

export default router;
