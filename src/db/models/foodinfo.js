const mongoose=require('mongoose');
const foodSchema=new mongoose.Schema({
    foodName:String,
    category:String,
    Description:String,
    NutritionInfo:{
        calories:Number,
        micronutrients:String,
        fiber:String,
        sodium:String,
        cholestrol:Number
    },
    servingsize:String,
    allergens:String,
    ingridents:String,
    preparationMethod:String,
    certification:String,
    countryOfOrigin:String,
    brand:String,
    dietaryRestriction:String,
    healthBenefits:String,
    bestPractics:String
})
const foodInformation=new mongoose.model('foodinformation',foodSchema);
module.exports=foodInformation;