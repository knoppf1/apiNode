import express, {Request, Response, NextFunction} from 'express';


const app = express();

app.get('/status', (req: Request, res: Response, next: import('express').NextFunction) => {
    res.status(200).send({ foo: 'teste 2'});
});

// Inicialização do servidor
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!');
});


