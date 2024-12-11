const ingredentsController = require('../controllers/ingredentsController')
const dishesController =require('../controllers/dishesController')
const MealsController =require('../controllers/mealsController')
const {uploadFile}=require('../utility/utility')
const {login} = require('../controllers/loginController')
const cors =require('cors')
const express= require('express')

const app = express();
app.use(cors());
app.use(express.json());

app.get('/getAllIngredients',ingredentsController.getIngredients);
app.post('/setIngredients',ingredentsController.setIngredients);
app.get('/deleteIngredients',ingredentsController.deleteIngredients);
app.post('/updateIngredients',ingredentsController.updateIngredients);
app.get('/getDishes',dishesController.getDishes);
app.post('/setDishes',uploadFile,dishesController.setDishes);
app.get('/deleteDishes',dishesController.deleteDishes);
app.post('/updateDishes',uploadFile,dishesController.updateDishes);
app.get('/getMeals',MealsController.getMeals);
app.post('/setMeals',MealsController.setMeals);
app.get('/deleteMeals',MealsController.deleteMeals);
app.post('/login',login);

module.exports={
    app
}