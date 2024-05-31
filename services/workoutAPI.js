const axios = require('axios');

const WORKOUT_APIKEY = process.env.WORKOUT_APIKEY;

const fetchWorkout = async (workoutName) => {
  try {
    const response = await axios.get(`https://exercisedb.p.rapidapi.com/exercises/name/${workoutName}`, {
      headers: {
        'X-RapidAPI-Key': 'd9002529e1mshc2357c906886661p1b7351jsn8f241b2d0b59',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data from API:', error);
    throw error;
  }
};

module.exports = fetchWorkout;