require('dotenv').config();

document.getElementById('nutritionButton').addEventListener('click', async (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Collect form data
  const meal_name = document.getElementById('mealName').value;
  const date = document.getElementById('date').value;

  // Create an object to hold the form data
  const nutritionData = {
    meal_name,
    date
  };
console.log(nutritionData)
  try {
    // Send a request to the Edamam API
    const response = await fetch(`https://api.edamam.com/api/food-database/v2/parser?ingr=${meal_name}&app_id=${process.env.FOOD_APPID}&app_key=${process.env.FOOD_APIKEY}&nutrition-type=logging`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (response.ok) {
      // Process the response from the Edamam API
      console.log(response)
      const nutritionResult = await response.json();
      console.log('Nutrition data fetched successfully:', nutritionResult);

      // Create a new object to hold the combined data
      const completeNutritionData = {
        ...nutritionData,
        calories,
        fat,
        protein
      };
      console.log(completeNutritionData)
      // Send the combined data to your backend
      const backendResponse = await fetch('/api/nutrition', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nutritionData)
      });
    } 
  } catch (error) {
    console.error('Error:', error);
    alert('An unexpected error occurred.');
  }
});
