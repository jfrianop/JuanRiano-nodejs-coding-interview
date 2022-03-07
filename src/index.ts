import 'reflect-metadata'

import { createExpressServer } from 'routing-controllers'
import { db } from './memory-database'
require('dotenv').config()

const port = process.env.PORT

const app = createExpressServer({
    routePrefix: '/v1',
    controllers: [`${__dirname}/controllers/*.controller.*`],
    validation: true,
    classTransformer: true,
    defaultErrorHandler: true,
})

// Connect to In-Memory DB
const initializeDataBase = async () => await db({ test: false })



app.listen(port, () => {
    console.log(`[Live Coding Challenge] Running at http://localhost:${port}`)
    initializeDataBase()
})

export default app
