document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission
    
    // Collect form data
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Create an object to hold the form data
    const loginData = {
      email,
      password
    };
  
    try {
      // Send a POST request to the backend
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData)
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Login successful:', result);
        window.location.href = '/overview';
      } else {
        const error = await response.json();
        alert('Error: ' + error.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An unexpected error occurred.');
    }
  });