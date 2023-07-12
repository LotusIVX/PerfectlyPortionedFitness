function generateMealPlan() {
    // Get user input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var goal = document.getElementById("goal").value;
    var breakfast = document.getElementById("breakfast").value;
    var snack1 = document.getElementById("snack1").value;
    var lunch = document.getElementById("lunch").value;
    var snack2 = document.getElementById("snack2").value;
    var dinner = document.getElementById("dinner").value;
    
    // Validate email
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    
    // Generate meal plan page
    var mealPlanPage = "<!DOCTYPE html>\n" +
                       "<html>\n" +
                       "<head>\n" +
                       "  <title>Meal Plan</title>\n" +
                       "</head>\n" +
                       "<body>\n" +
                       "  <h1>Meal Plan for the Week</h1>\n" +
                       "  <h2>Name: " + name + "</h2>\n" +
                       "  <h3>Email: " + email + "</h3>\n" +
                       "  <h3>Goal for the Week:</h3>\n" +
                       "  <p>" + goal + "</p>\n" +
                       "  <h3>Meals:</h3>\n" +
                       "  <ul>\n" +
                       "    <li>Breakfast: " + breakfast + "</li>\n" +
                       "    <li>Snack 1: " + snack1 + "</li>\n" +
                       "    <li>Lunch: " + lunch + "</li>\n" +
                       "    <li>Snack 2: " + snack2 + "</li>\n" +
                       "    <li>Dinner: " + dinner + "</li>\n" +
                       "  </ul>\n" +
                       "</body>\n" +
                       "</html>";
    
    // Open a new window/tab with the meal plan page
    var newWindow = window.open();
    newWindow.document.write(mealPlanPage);
  }
  
  function validateEmail(email) {
    // Simple email validation using a regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  