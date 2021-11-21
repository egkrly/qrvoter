const express = require('express')
const moment = require('moment')
const mysql = require('mysql')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

// Example insert
// INSERT INTO `polls` (`id`, `publicId`, `name`, `startDate`, `endDate`, `creatorId`, `createdAt`, `archived`) VALUES (NULL, 'nfi4ciapo9dcy9rj', 'Teszt elso szavazas', '2021-11-20 19:56:31', NULL, '1', '2021-11-20 19:56:31', '0');

let connection;

const getTime = () => moment().format('LTS');

const log = (str) => {
    const time = getTime();
    console.log(`[${time}] ${str}`);
}

const connectToDb = () => new Promise((resolve, reject) => {
    connectionObj = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'qrvoter'
    });

    connectionObj.connect(error => {
        if (error) {
            reject(error);
            return;
        }

        resolve(connectionObj);
    });
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/poll/:id?', (req, res) => {
    const id = req.params.id;
    log(`[GET] /poll/${id}`);

    if (!id) {
        const error = {error: { message: "Not found" }};
        res.send(error);

        log(`No ID specified`);

        return;
    };

    const query = `SELECT publicId, name, startDate, endDate, archived FROM polls WHERE publicId="${id}"`;

    connection.query(query, (error, results, fields) => {
        if (error) {
            const errorResponse = {error: { message: "Unexpected error" }};
            res.send(errorResponse);

            log(`Unexpected error`);
            console.log(error);

            return;
        };

        res.send(results);

        console.log(results);
    })
});

app.listen(port, () => {
    console.log(`QrVoter backend | http://localhost:${port}`);

    connectToDb()
        .then(connObj => {
            connection = connObj;
            log('Connected to MYSQL');
        })
        .catch(error => { throw error });
});
