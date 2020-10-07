import 'reflect-metadata';
import 'dotenv/config';
import express, { Request, Response, NextFunction} from 'express';
import {errors} from 'celebrate';

import 'express-async-errors'
import rateLimiter from './middlewares/rateLimiter';


import routes from './routes/index';
import AppError from '@shared/errors/AppErro';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();
app.use(rateLimiter);
app.use(express.json());
app.use(routes);
app.use(errors);
app.use( (err:Error,request:Request,response:Response, _:NextFunction) =>{
  if(err instanceof AppError){
    return response.status(err.statusCode).json({
      status:'error',
      message:err.message,
    });
  }


  console.error(err);// precisa instalar um biblioteca express async error para pode captar os erros async do express
  return response.status(500).json({
    status:'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () =>{
  console.log('Server subiu !!!');
});
///
