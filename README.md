# week-5-database-management-with-nodejs-austinibe15

# User Registration API  

## Summary  

This project is a simple User Registration API built with Node.js and Express. It allows users to sign up by submitting their email, username, and password. The application utilizes MySQL as the database to store user information securely, with password hashing/ encryption done using bcrypt.  

### Features  
- User registration with email, username, and password.  
- Email uniqueness check to prevent multiple registrations with the same email.  
- Password storage with hashing for security.  
- RESTful API design for easy integration with front-end applications.  

## Technologies Used  
- **Node.js**: JavaScript runtime for building the server-side application.  
- **Express**: Web framework for Node.js to develop APIs.  
- **MySQL**: Relational database for storing user data.  
- **bcrypt**: Library for hashing passwords securely.  
- **dotenv**: For managing environment variables.  

## Getting Started  

### Prerequisites  
- Node.js and npm [Install Node.js](https://nodejs.org/)  
- MySQL [Install MySQL](https://www.mysql.com/)  

### Installation  

1. Clone the repository:  
   ```bash  
   git clone <https://github.com/austinibe15/week-5-database-management-with-nodejs-austinibe15.git>

   Navigate to the project directory:

cd <project-directory>  
Install dependencies:

npm install  
Create a .env file in the root directory with the following variables:

DB_HOST=your_mysql_host  
DB_USER=your_mysql_user  
DB_PASSWORD=your_mysql_password  
PORT=3000  
Start the application:

node app.js  
The server will start on port 3000 (or the port you specified in the .env file).

API Endpoints
Register User
POST /api/register
Request Body:

{  
  "email": "user@example.com",  
  "username": "exampleUser",  
  "password": "yourSecurePassword"  
}  
Response:

201 Created: User created successfully.
409 Conflict: User already exists.
500 Internal Server Error: If there is an issue with the server.
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or features that can be added.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
Thanks to all contributors and libraries that made this project possible.

### Explanation of Sections  

- **Summary**: A brief description of what the project does.  
- **Features**: Highlights the main functionalities of the API.  
- **Technologies Used**: Lists the main technologies employed in the project.  
- **Getting Started**: Provides steps to set up the project locally, including installations and environment configurations.  
- **API Endpoints**: Describes the endpoints available, including method types, request/response formats.  
- **Contributing**: Encourages others to contribute to the development of the project.  
- **License**: Indicates which license applies to the project.  
- **Acknowledgements**: Thanks any contributors or resources that assisted in the project.  

Feel free to adapt this template based on your specific project needs and additional features you may have included!

   
