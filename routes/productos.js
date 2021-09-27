const express = require("express")
const { Router } = express

const router = new Router();

products = []
id = 0

router.get("/", (req, res) => {
  res.json(products)
});

router.get("/:id", (req, res) => {
  const item = products.find(product => product.id == req.params.id);
  res.json(item ?? {error: "producto no encontrado"})
});

router.post("/", (req, res) => {
  id++
  products.push({
    id,
    title: req.body.title,
    price: req.body.price,
    thumbnail: req.body.thumbnail,
  })
  res.json({status: "ok", id})
});

router.put("/:id", (req, res) => {
  try { 
    const ind = products.findIndex(product => req.params.id == product.id);
    Object.assign(products[ind], req.body)
    res.json(products[ind])
  } catch (error) {
    res.json({error: "producto no encontrado"})
  }
});

router.delete("/:id", (req, res) => {
  try {
    const ind = products.findIndex(product => req.params.id == product.id);
    removed = products.splice(ind, 1)
    res.json(removed)
  } catch (error) {
    res.json({ error: "producto no encontrado" })
  }
});


module.exports = router;