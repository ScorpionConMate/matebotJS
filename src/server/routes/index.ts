import { Router } from 'express';
import { MessageController } from '../controllers';
const router = Router();

router.get('/', (req, res) => {
	res.json({
		message: 'Welcome to the BondiolBot API',
		version: '1.0.0',
	});
});

router.post('/message/embed', MessageController.sendEmbed);
router.post('/message/user/:user', MessageController.sendMessage);

export default router;
