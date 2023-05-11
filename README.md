# RESTful-DOcker
RESTful Web Service Implementation + Docker
# Customer Orders Web Service

This web service allows you to manage customer records and their orders using a simple RESTful API. The API is built using Node.js and Express, and the data is stored in a hard-coded JSON file.

## API Endpoints

The following API endpoints are implemented:

- `GET /customers`: Retrieve a list of all customer records.
- `GET /customers/:customerId`: Retrieve a single customer record by its ID.
- `GET /customers/:customerId/orders`: Retrieve a list of orders for a specific customer.
- `GET /customers/:customerId/orders/:orderId`: Retrieve a specific order record, including the customer ID and customer name.

All data returned from the API endpoints is in JSON format.

## How to Build and Run the Application

1. Ensure you have Node.js and npm installed on your system.

2. Clone the repository or download the source files.

3. Navigate to the project directory and install the required dependencies using the following command:
npm install
4. Start the application using the following command:
npm start

5. The web service will be running on `http://localhost:3000`. You can access the API endpoints using a web browser or a tool like Postman or curl.

6. To run the client application, open `http://localhost:3000` in your web browser.
