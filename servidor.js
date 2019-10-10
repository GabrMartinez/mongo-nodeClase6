const express = require("express");
const mongodb = require("mongodb");
const servidor = express();

servidor.use(express.json());
servidor.use(express.static("public"));

let { MongoClient } = mongodb;
let db;
let pokemon_collection;

MongoClient.connect("mongodb://localhost:27017", {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
    },( error , cliente )=> {
        //  cliente es la referencia del cliente conectado al daemon
        if(error){
        throw new Error(error);
        } else {
            console.log("Base de datos!!!!");
            
            db = cliente.db("SampleCollections");

            servidor.listen(8000,()=>{
                console.log("Servidor web!");
                });
        }
});


servidor.get("/",(req,res)=> {
    res.sendFile(__dirname+"/index.html");
});
servidor.get("/pokemones",(req,res)=> {
    if(req.query.tipo){
        res.json({tipo:"hierba"});
    }else{
        pokemon_collection = db.collection("samples_pokemon");
        let pokemones = pokemon_collection.find({});
        pokemones.toArray((err,data)=>{
            console.log(data);
            
            console.log(pokemones);
            res.json(data);
        });
    }
});
servidor.get("/pokemones/:id",(req,res)=> {
    res.json({id:req.params.id});
});

servidor.post("/pokemones",(req,res)=> {
    console.log(req.body);
    res.status(201).send("Pokemon creado");
});