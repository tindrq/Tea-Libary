//api call to mongodb server for ingredient scema

//add an ingredient that is temporary already specified
async function addIngredient(name, description, imageURL) {
    const res = await fetch('http://localhost:5000/add-ingredient', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            description: description,
            properties: [],
            image: `/images/${imageURL}`
        })
    })
    await res.json();
}

//get all ingredients
async function getAllIngredients() {
    const ingredients = await fetch('http://localhost:5000/get-ingredients')
    const formatedData = await ingredients.json();
    // console.log(formatedData);
    return formatedData;
}

export { addIngredient, getAllIngredients };