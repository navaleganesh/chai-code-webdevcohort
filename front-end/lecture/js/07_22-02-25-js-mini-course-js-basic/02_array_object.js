let chaiTypes = ["Masala Chai","Ginger Chai","Green Tea", "Lemon Tea"]

console.log(chaiTypes[2]); //'Green Tea'

console.log(`Total chai Types: ${chaiTypes.length}`);

chaiTypes.push("Herbal Tea");
const data = chaiTypes.pop();
console.log(data);

let index = chaiTypes.indexOf("Green Tea");
console.log(index); // 2

if(index !== -1){
    chaiTypes.splice(index, 1)
}
console.log(chaiTypes); //[ 'Masala Chai', 'Ginger Chai', 'Lemon Tea' ]

chaiTypes.forEach((chai, index, ) => {
    console.log(`${index + 1}: ${chai}`); //'1: Masala hai' '2: Ginger Chai' '3: Lemon Tea' 
})

let moreChaiTypes = ["Oolong Tea", "White Tea"];

let allChaiTypes = chaiTypes.concat(moreChaiTypes)

let newChaiTypes = [...chaiTypes, "Chamolina Tea"];
console.log(newChaiTypes); //[ 'Masala Chai', 'Ginger Chai', 'Lemon Tea', 'Chamolina Tea' ]



/* Object */
let chaiRecipe = {
    name:"Masala Chai",
    ingredients : {
        teaLeaves : "Assam Tea",
        milk:"Full cream Milk",
        sugar:"Brown Sugar",
        spices:["Daalchini", "Ginger"]
    },
    instruction: "Boil water, add tea leaves, milk, sugar and spices"
};

console.log(chaiRecipe.name);
console.log(chaiRecipe.ingredients.spices[1]);

let updatedChaiRecepie = {
    ...chaiRecipe,
    instruction:"Boil water add teas leaves, milk, sugar, spicies with some love"
}
console.log(updatedChaiRecepie);

let {name, ingredients} = chaiRecipe //called object destructuring
let [firstChai, secondChai] = chaiTypes // called array destructuring

console.log(secondChai); //'Ginger Chai'

