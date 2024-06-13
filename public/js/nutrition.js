const axios = require('axios');
require('dotenv').config();

document.getElementById('nutritionButton').addEventListener('click', async (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Collect form data
  const meal_name = document.getElementById('mealName').value;
  const date = document.getElementById('date').value;

  const FOOD_APIKEY = process.env.FOOD_APIKEY;
  const FOOD_APPID = process.env.APPID;
  
  const getAutocomplete = async (query) => {
      try {
        const response = await axios.get('https://api.edamam.com/auto-complete', {
          params: {
            q: query,
            app_id: FOOD_APPID,
            app_key: FOOD_APIKEY,
          },
        });
        return response.data;
      } catch (error) {
        console.error('Error fetching autocomplete suggestions:', error);
        throw error;
      }
  };
  
  const getFoodDetails = async (meal_name) => {
      try {
        const response = await axios.get('https://api.edamam.com/api/food-database/v2/parser', {
          params: {
            ingr: meal_name,
            app_id: FOOD_APPID,
            app_key: FOOD_APIKEY,
            'nutrition-type': 'logging',
          },
        });
        return response.data;
      } catch (error) {
        console.error('Error fetching food details:', error);
        throw error;
      }
  }
});
  
  module.exports = {
      getAutocomplete,
      getFoodDetails
    };