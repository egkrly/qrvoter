import mysql from 'mysql'

export const connectToDb = () => new Promise((resolve, reject) => {
    const connectionObj = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'qrvoter'
    })

    connectionObj.connect(error => {
        if (error) {
            reject(error)
            return
        }

        resolve(connectionObj)
    })
})
