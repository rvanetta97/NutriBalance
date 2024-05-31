const axios = require('axios');

const FOOD_APIKEY = process.env.FOOD_APIKEY;
const FOOD_APPID = process.env.APPID;
const getAutocomplete = async (query) => {
    try {
      const response = await axios.get('https://api.edamam.com/auto-complete', {
        params: {
          q: query,
          app_id: '725bbf8c',
          app_key: '9fc17b4f64383e1e5610bb8b6b04c497',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching autocomplete suggestions:', error);
      throw error;
    }
};

const getFoodDetails = async (food) => {
    try {
      const response = await axios.get('https://api.edamam.com/api/food-database/v2/parser', {
        params: {
          ingr: food,
          app_id: '725bbf8c',
          app_key: '9fc17b4f64383e1e5610bb8b6b04c497',
          'nutrition-type': 'logging',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching food details:', error);
      throw error;
    }
};

module.exports = {
    getAutocomplete,
    getFoodDetails
};