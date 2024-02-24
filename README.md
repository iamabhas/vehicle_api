# REST-API built using Next.js with API authentication and CRUD operations

## How to use and run api ?

## Setting up database
- Download and install mongodb community server and start the server 
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


## API Testing 
```bash
# First test a get all vehicles endpoint without login
$ Request Type -> GET
$ Route -> "http://localhost:5000/get-all-vehicles"

# The route is protected so login to access the route using username - "admin"
$ Request Type -> POST
$ Route -> "http://localhost:5000/auth/login"
$ Request body -> {"username":"admin"}

# After logging in access all other routes

# For logging out :
$ Request Type -> POST
$ Route -> "http://localhost:5000/auth/logout"
 
```

