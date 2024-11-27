# INI8_UserRegistration
# Procedure for Running Frontend Code
1 -> Download the Code :
     Download the ZIP file from GitHub and unzip it.
     Add the React project folder to your code editor (e.g., Visual Studio Code).
2 -> Open the Project Directory :
     Open a new terminal and navigate to the project directory:
     cd <your-project-directory-path>
3 -> Install Dependencies
     Run the following commands to install required libraries :
     npm install axios
     npm install react-bootstrap bootstrap
     npm install react-router-dom
4 -> Add Bootstrap to the project:
     In main.jsx, import the Bootstrap stylesheet:
      import 'bootstrap/dist/css/bootstrap.min.css';
5 -> Start the Frontend Application
     Run the following command to start the React development server:
     npm run dev
6 -> Prepare the Backend Code
     Before running the React application, ensure the backend server is correctly set up.
# Procedure for Running the Backend Code
1 -> Open the Project
     Use an IDE like Eclipse EE or Apache NetBeans to import the Spring Boot project.
2 -> Set Up the Database
     Create a new database in MySQL.
     Open the application.properties file in the Spring Boot project and configure the 
     following details:
        Database Name
        MySQL Username and Password
        Port Number (if different from default 8080)
3 -> Run the Backend
     Start the Spring Boot application. Ensure it connects to the MySQL database.
4 -> Test the Backend with Postman
     Install and open Postman.
     Verify the backend API  by sending requests.
     Example for the POST method:
     URL: http://localhost:8080/ini8/register
     Body (JSON format):
        {
        "date_of_birth": "2000-10-10",
        "email": "satyaprakashpanda@gmail.com",
        "name": "Satya Prakash Panda"
        }
    Test other endpoints as well:  DELETE, PATCH, and GET.
# Final Step: Run the Full Application
 Ensure the backend server is running and correctly connected to the database.
 Run the React application using:
   npm run dev
# Notes
  Ensure that your MySQL service is running and properly configured.
  




       
