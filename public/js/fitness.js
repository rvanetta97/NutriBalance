document.getElementById('fitnessForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission
    
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
  
    try {
      // Send a POST request to the backend
      const response = await fetch('/api/fitness', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fitnessData)
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Fitness activity logged successfully:', result);
      } else {
        const error = await response.json();
        console.error('Error:', error.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
});