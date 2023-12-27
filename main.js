const imagenes = "./imagenes/"
let divContenedor = document.getElementById("div-contenedor")

class Pokemon{
    constructor (id,nombre,tipo,vida,poder,defensa,velocidad,imagen){
        this.id=id;
        this.nombre=nombre;
        this.tipo=tipo;
        this.vida=vida;
        this.poder=poder;
        this.defensa=defensa;
        this.velocidad=velocidad;
        this.imagen=imagen
    
    }
}

let arrayPokes = [
    new Pokemon(0,"Charmander","Fuego",45,70,30,43,"charmander.jpeg"),
    new Pokemon(1,"Squirtle","Agua",60,50,40,35,"squirtle.jpeg"),
    new Pokemon(2,"Bulbasaur","Planta",50,65,35,40,"bulbasaur.jpeg"),
    new Pokemon(3,"Eevee","Normal",20,35,40,55,"eevee.jpeg"),
    new Pokemon(4,"Onix","Roca",70,30,70,20,"onix.jpeg"),
    new Pokemon(5,"Machamp","Lucha",50,70,35,50,"machamp.jpeg"),
    new Pokemon(6,"Gengar","Fantasma",45,80,20,70,"gengar.jpeg"),
    new Pokemon(7,"Mewtwo","Psiquico",90,120,70,100,"mewtwo.jpeg"),
    new Pokemon(8,"Electabuzz","Electrico",45,70,30,45,"electabuzz.jpeg"),
    new Pokemon(9,"Digglet","Tierra",45,60,80,30,"diglett.jpeg"), 
    new Pokemon(10,"Pidgeotto","Volador",50,70,30,75,"pidgeotto.jpeg"),

]

class TiposPoke{
    constructor(tipo){
        this.tipo=tipo
    }
}

function cardOfPokemon(pokemon){

    const container =document.createElement("div");
    container.className = "pokemon-card"
    container.id = "card-" +pokemon.id
    //container.textContent= pokemon.nombre

    const image = document.createElement("img");
    image.className = 'pokemon-imagen'
    image.src = imagenes+pokemon.imagen

    const button = document.createElement("button");
    button.id = "btn-poke"+ pokemon.id
    button.textContent = "Elegir"
    button.className= "btn-poke"
    const nombre = document.createElement("h3")
    nombre.textContent = pokemon.nombre

    container.append(image,nombre,button)

    return container
}


// for (const poke of arrayPokes) {
//     divContenedor.appendChild(cardOfPokemon(poke))



console.log(divContenedor);

function lista (){
    let index = 0
    let caja = cardOfPokemon(arrayPokes[index])
    const buttonR = document.createElement("button");
        buttonR.className = "R"
        buttonR.textContent = ">"
    const buttonL = document.createElement("button");
        buttonL.className = "L"
        buttonL.textContent = "<"
divContenedor.append(buttonL,caja,buttonR)

    buttonL.onclick=()=>{
        index --
        if(index < 0){index= arrayPokes.length - 1}
        caja = cardOfPokemon(arrayPokes[index])
        divContenedor.innerHTML=""
    divContenedor.append(buttonL,caja,buttonR)
    
    console.log(caja)
    }
    buttonR.onclick=()=>{
        index ++ 
        if(index == arrayPokes.length){index=0}
        caja = cardOfPokemon(arrayPokes[index])
        divContenedor.innerHTML=""
    divContenedor.append(buttonL,caja,buttonR)
    

    }
}

lista()