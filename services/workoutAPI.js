const axios = require('axios');

const WORKOUT_APIKEY = process.env.WORKOUT_APIKEY;

const fetchWorkout = async (workoutName) => {
  try {
    const response = await axios.get(`https://exercisedb.p.rapidapi.com/exercises/name/${workoutName}`, {
      headers: {
        'X-RapidAPI-Key': WORKOUT_APIKEY,
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