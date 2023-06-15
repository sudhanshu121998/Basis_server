import express from 'express';

import {submitBasicData} from "../controller/prepaidCardController"
const router = express.Router();

router.post('/submitbasicdata',submitBasicData);




module.exports = router;
