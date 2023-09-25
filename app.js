const express = require('express');
const app = express()
/*
const fruity = {
  "genus": "Malus",
  "name": "Apple",
  "id": 6,
  "family": "Rosaceae",
  "order": "Rosales",
  "nutritions": {
      "carbohydrates": 11.4,
      "protein": 0.3,
      "fat": 0.4,
      "calories": 52,
      "sugar": 10.3
  }}
*/
app.put("/api/fruit", (req, res) => {
  const fruity = req.body
  console.log(fruity)
  res.send(JSON.stringify(fruity))
  
}) 

app.get("/api/fruit/all", (req, res) => {
  const fruity = req.query
  console.log(fruity)
  res.send(JSON.stringify(fruity))
  
}) 

app.get("/api/fruit/2", (req, res) => {
  const fruity = req.params.id
  console.log(fruity)
  res.send(JSON.stringify(fruity))
  
}) 

app.delete("/api/fruit/3", (req, res) => {
  const fruity = req.params.id
  console.log(fruity)
  res.send(JSON.stringify(fruity))
  
})
app.delete("/api/fruit/orange", (req, res) => {
  const fruity = req.params.id
  console.log(fruity)
  res.send(JSON.stringify(fruity))
  
})  





app.listen(3000, () => console.log('listening on port 3000'));