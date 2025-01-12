# Simple Webhook in Node.js

This project is an example of a simple webhook implemented in Node.js using the Express framework. The webhook receives data in JSON format and responds with a success message.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (included with Node.js)

## Project Structure

```plaintext
WEBHOOKS/
│
├── server.js # Main server file
├── package.json # Project configuration file
└── README.md # Project documentation
```

## Instructions for Using the Project
1. Clone the Repository

To clone this repository, use the following command:

 ```bash
 git clone https://github.com/Daniielpro/WEBHOOKS.git

 ```

2. Install the necessary dependencies:
Initialize and download the dependencies Required dependencies:
 
 ```bash
 npm install
 ```

3. Run the Server
Start the Webhook server:
 
 ```bash
  node server.js
  ```

## How to Make Queries
Interact with the API
You can use tools like curl, Postman, to make queries.

Query Example:

 Invoke-RestMethod -Uri http://localhost:3000/webhook -Method Post -Headers @{ "Content-Type" = "application/json" } -Body '{"mensaje": "Erroo 505 Microservicio 25 Fallo Conexcion"}'


## Author
EDWIN PROAÑO
GitHub: Daniielpro10
