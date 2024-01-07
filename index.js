import express from 'express'
import mongoose from 'mongoose'
const Animal = mongoose.model('Animal', new mongoose.Schema({
  tipo: String,
  estado: String,
}))

const app = express()

//mongoose.connect('mongodb://angel:algjl@localhost:27017/miapp?authSource=admin')
mongoose.connect('mongodb://angel:algjl@monguito:27017/laprimera?authSource=admin')
app.get('/', async (_req, res) => {
  console.log('listando... guarrillos...o no, yo que se')
  const animales = await Animal.find();
  return res.send(animales)
})

app.get('/otro', async (_req, res) => {
  console.log('que leche, vale creo otro')
  await Animal.create({ tipo: 'tu prima la de doermana', estado: 'Cabreadamente_feliz' })
  return res.send('ah... ok otra vez')
})

app.get('/crear', async (_req, res) => {
  console.log('que si      creando que viene fernando...')
  await Animal.create({ tipo: 'Cochino_Jabalín', estado: 'Felizmente_cabreado' })
  return res.send('ok uno solo un uno uno')
})

app.listen(3000, () => console.log('escuchando puerto 3000...'))
