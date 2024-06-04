document.getElementById('nutritionForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission
    
    // Collect form data
    const meal_name = document.getElementById('mealName').value;
    const date = document.getElementById('mealDate').value;

    // Create an object to hold the form data
    const nutritionData = {
      meal_name,
      date
    };
  
    try {
      // Send a POST request to the backend
      const response = await fetch('/api/nutrition', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('User created successfully:', result);
      } else {
        const error = await response.json();
        console.error('Error:', error.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });