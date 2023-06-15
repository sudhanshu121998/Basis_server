import express from 'express';

import prepaidCardRoutes from './prepaidCardRoutes'
const v1_Routes = express.Router();

v1_Routes.use("/prepaidcard",prepaidCardRoutes);

