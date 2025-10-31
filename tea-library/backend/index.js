const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();


mongoose.connect('mongodb://localhost:27017/backend', {
}).then(() => {
    console.log('Connected');
}).catch((err) => {
    console.log('Error connecting to database', err);
});

const RecepieScema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    properties: {
        type: [String],
        required: true,
    },
    ingredients: [{
        ingredient: String,
        amount: Number,
        metric: String
    }],
    image: String,
})

const IngredientScema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    properties: {
        type: [String],
        required: true,
    },
    image: String
})

const Recepies = mongoose.model('recepies', RecepieScema);
const Ingredient = mongoose.model('ingredients', IngredientScema);

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));


app.get("/", (req, res) => {
    res.send("App is working");
});

//Add one ingredient to the Ingredient scema
app.post("/add-ingredient", async (req, resp) => {
    try {
        const ingredient = new Ingredient(req.body);
        let result = await ingredient.save();
        if (result) {
            resp.status(201).send(result);
        } else {
            console.log("Ingredient already exisits");
            resp.status(400).send("Ingredient already exisits");
        }
    } catch (e) {
        resp.status(500).send({ message: "Something went wrong", error: e.message });
    }
});

//Get all saved ingredients
app.get("/get-ingredients", async (req, res) => {
    try {
        const allIngredients = await Ingredient.find();
        await res.json({ allIngredients });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

// Start the server
app.listen(5000, () => {
    console.log("App is running on port 5000");
});