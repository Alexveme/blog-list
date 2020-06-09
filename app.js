import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import blogRouter from './blogRouter.js';

const app = express()

const mongoUrl = 'mongodb+srv://prueba:prueba@cluster0-cg3jl.mongodb.net/blogsdb?retryWrites=true&w=majority'
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors())
app.use(express.json())

app.use('/api/blogs', blogRouter);

const PORT = 9000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})