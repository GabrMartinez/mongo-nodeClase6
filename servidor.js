const express = require("express");
const servidor = express();

servidor.use(express.json())

servidor.get("/",(req,res)=> {
    res.send("Bienvenidos al Pokedex!");
})
servidor.get("/pokemones",(req,res)=> {
    if(req.query.tipo){
        res.json({tipo:"hierba"});
    }else{
        
    }
});
servidor.get("/pokemones/:id",(req,res)=> {
    res.json({id:req.params.id})
});

servidor.post("/pokemones",(req,res)=> {
    console.log(req.body);
    res.status(201).send("Pokemon creado");
});
servidor.listen(8000,()=>console.log("Servidor web!"));
