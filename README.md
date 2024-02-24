# REST-API built using Nest.js 

## How to use and run api ?
## Setting up database
- Download MongoDB Community Server at [MongoDB Community Server Download](https://www.mongodb.com/try/download/community). While installing also install MongoDB Compass (GUI tool for mongodb)
- Open MongoDB Compass and connect to the default local MongoDB server with the connection string provided during the installation or found in the MongoDB documentation. The default connection string usually is `mongodb://localhost:27017`.
- Create database named "vehicledb" . Inside the "vehicledb" create a collection named "vehicles"


## Setting up and running the backend
- Make sure Node is installed on local machine
```bash
# clone repo 
$ git clone https://github.com/iamabhas/vehicle_api.git

# install dependencies 
$ cd vechicle_api/
$ npm install

# run
$ npm run start

# This will run on port 5000
```


# API Testing with Postman 

This guide will help you import the Vehicle API Postman collection and test secured CRUD endpoints for managing vehicles. Ensure you follow the steps in order to test the endpoints effectively.

## Prerequisites

- Download and install Postman from [https://www.postman.com/downloads/](https://www.postman.com/downloads/)  or **you can use any other tools of your choice** 
- Ensure your Vehicle API server is running locally or accessible wherever it is hosted.

## Importing the Postman Collection

1. Download the Postman collection for the Vehicle API by visiting the following URL:  
   `https://github.com/iamabhas/vehicle_api/blob/main/VehicleAPITesting.postman_collection.json`
   
   Right-click on the `Raw` button and select "Save link as..." to download the `.json` file to your computer.

2. Open Postman and locate the `Import` button at the top left corner of the application.

3. Click on `Import`, then select the `File` tab in the dialog that appears. Drag and drop the downloaded `.json` file into the target area or use the `Upload Files` button to navigate to and select the file.

4. Once the file is selected, Postman will display the contents of the collection. Click on `Import` to add the collection to your Postman workspace.

## Testing CRUD Operations

The collection contains all necessary endpoints for performing CRUD operations on vehicles. These endpoints are secured, and each comes with predefined request types and bodies. Follow the sequence outlined below to authenticate and perform operations successfully.

1. **Login/Authenticate**: The first request in the collection is for authentication. Execute this request to obtain access to end points.

2. **Create Vehicle**: Use the provided endpoint to create a new vehicle after logging in.

3. **Read/Get Vehicles**: After creating a vehicle, you can retrieve the list of vehicles or a specific vehicle's details using the GET requests.

4. **Update Vehicle**: Choose the update requests to modify the details of an existing vehicle. You'll need to know the vehicle's registration number. Updating vehicle , assigning drivers and updating Maintenance tasks are done.

5. **Delete Vehicle**: Finally, use the delete request to remove a vehicle from the database using its registration number.

6. **Logout** : You can also logout.


By following these steps in order , you'll be able to test the full CRUD functionality of the Vehicle API using the imported Postman collection.


