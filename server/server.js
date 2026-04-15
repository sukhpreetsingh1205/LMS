import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import { clerkWebhooks } from './controllers/webhooks.js'
import connectdb from './configs/mongodb.js'

const app = express()
await connectdb()
app.use(cors())

app.get('/', (req,res)=> res.send("Api is running"))

app.post('/clerk', express.json(), clerkWebhooks)

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server is running : http://localhost:${PORT}`)
})