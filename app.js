const express = require ('express');
const app = express();
const htmlContent = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>JC</title>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    margin: 40px;
                    padding: 20px;
                    background-color: #f0f0f0;
                }

                h1 {
                    color: #333;
                    text-align: center;
                }

                p {
                    color: #555;
                    text-align: justify;
                }
            </style>
        </head>
        <body>
            <h1>JC</h1>
            <p>
                Fernando Alonso es un piloto de automovilismo español, dos veces campeón del mundo de Fórmula 1.
                Es conocido por su habilidad y dedicación en las pistas de carreras, y ha dejado una marca significativa
                en el mundo del automovilismo a lo largo de su carrera.
            </p>
        </body>
        </html>
    `;

app.get('/',(req,res) => {
    res.send(htmlContent);
});

app.listen(3000,() => {
    console.log('Aplicación escuchcando en el puerto 3000');
});