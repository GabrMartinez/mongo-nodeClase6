fetch("/pokemones")
    .then(res => res.json())
    .then(res =>{
        res.forEach(pokemones => {
            
        
        let div = document.createElement("div");
        let p = document.createElement("p");
        let h2 = document.createElement("h2");
        let img = document.createElement("img");

        div.className = "pokemones";
        h2.innerText = `#${pokemones.num} - ${pokemones.name}`;
        p.innerText= `Altura: ${pokemones.height} / peso : ${pokemones.weight}`;
        img.src = pokemones.img;

        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(img);
        document.body.appendChild(div);
    });
});