import axios from 'axios';

document.getElementById('fitButton').addEventListener('click', async (event) => {
  event.preventDefault();

  // Collect form data
  const activity_name = document.getElementById('activityName').value;
  const duration = document.getElementById('duration').value;
  const date = document.getElementById('date').value;

  // Create an object to hold the form data
  const fitnessData = {
    activity_name,
    duration,
    date
  };

  const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/name/curls',
    params: {limit: '10'},
    headers: {
      'X-RapidAPI-Key': 'd9002529e1mshc2357c906886661p1b7351jsn8f241b2d0b59',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  try {
    // Fetch data from ExerciseDB API
    const apiResponse = await axios.request(options);
    console.log('API Data:', apiResponse.data);

  } catch (apiError) {
    console.error('Error fetching data from ExerciseDB:', apiError);
    return; // Exit if API request fails
  }

  try {
    // Send a POST request to the backend
    const backendResponse = await fetch('/api/fitness', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fitnessData)
    });

    if (backendResponse.ok) {
      const result = await backendResponse.json();
      console.log('Fitness activity logged successfully:', result);
    } else {
      const error = await backendResponse.json();
      console.error('Error:', error.message);
    }
  } catch (backendError) {
    console.error('Error posting data to backend:', backendError);
  }
});