import express from 'express'
import cors from 'cors'

import { connectToDb, log } from 'helpers'

const app = express()
const port = 3000

let connection
connectToDb().then(instance => connection = instance)

app.use(cors())


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/poll/:id?', (req, res) => {
    const id = req.params.id
    log(`[GET] /poll/${id}`)

    if (!id) {
        const error = {error: { message: "Not found" }}
        res.send(error)

        log(`No ID specified`)

        return
    }

    const query = `SELECT publicId, name, startDate, endDate, archived FROM polls WHERE publicId="${id}"`

    connection.query(query, (error, results) => {
        if (error) {
            const errorResponse = { error: { message: "Unexpected error" } }
            res.send(errorResponse)

            log(`Unexpected error`)
            console.log(error)

            return
        }

        res.send(results)

        console.log(results)
    })
})

app.listen(port, () => {
    console.log(`QrVoter backend | http://localhost:${port}`)

    connectToDb()
        .then(connObj => {
            connection = connObj
            log('Connected to MYSQL')
        })
        .catch(error => {
            log(`Couldn't connect to MySQL. The API won't start until this issue has been solved.`)
            log(`=========================================================================`)
            throw error
        })
})
