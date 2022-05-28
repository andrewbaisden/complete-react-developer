# The Complete React Developer

![The Complete React Developer](/img/complete-react-developer.png)

## Setup

1. Start the Docker Desktop Application on your computer

2. `cd` into the root folder for **backend-nest-mongodb** and **frontend** and then run the commands below to install the dependencies. You will probably need to force the installation when trying to install the dependencies for the frontend React application in this case otherwise it could give you an error.

```shell
# Run this command inside of the backend-nest-mongodb folder
npm install

# Run this command inside of the frontend folder
npm install --force
```

3. `cd` into the root folder for **docker-twitter-mongodb** and run the command below to start the MongoDB database inside of a Docker Container.

```shell
docker compose up
```

4. `cd` into the root folder for **backend-nest-mongodb** and run the command below to start the backend NestJS server.

```shell
npm run start:dev
```

5. `cd` into the root folder for **frontend** and run the command below to start the frontend React server.

```shell
npm run start
```

## The Twitter Clone App

You should see your database running inside of a Docker Container and your Twitter Clone React application open in the browser.

Run these commands inside of the root folder for frontend which is where React is. The command below starts Storybook.

```shell
# Starts Storybook
npm run storybook
```

You should see a Storybook component library open in the browser with a component for composing tweets. You can play around and change the names in the control to see how it looks in the demo. The command below runs the unit and integration tests.

```shell
# Runs the React testing library unit and integration tests
npm run jest
```

All of the tests should be passing in your console. The command below starts Cypress.

```shell
# Runs the Cypress End-To-End tests
npx cypress open
```

A new Cypress window should open. Run the integration test and get ready to be amazed as it automatically posts 3 tweets for you!

## REST API Testing

Use these example routes for testing in Postman or whatever REST API tool you are using:

### GET all tweets

Request: GET
Route: [http://localhost:8080/tweets](http://localhost:8080/tweets)

### GET tweet by ID

Request: GET
Route: [http://localhost:8080/tweets/d5d29839-788f-4d23-99ee-82b49ff1bbf1](http://localhost:8080/tweets/d5d29839-788f-4d23-99ee-82b49ff1bbf1)

### CREATE tweet

Request: POST
Route: [http://localhost:8080/tweets](http://localhost:8080/tweets)

Body raw: {"tweet": 'Hello World', img: ""}

### UPDATE tweet by ID

Request: POST
Route: [http://localhost:8080/tweets/d5d29839-788f-4d23-99ee-82b49ff1bbf1](http://localhost:8080/tweets/d5d29839-788f-4d23-99ee-82b49ff1bbf1)

Body raw: {"tweet": 'Hello Moon', img: ""}

### DELETE tweet by ID

Request: DELETE
Route: [http://localhost:8080/tweets/d5d29839-788f-4d23-99ee-82b49ff1bbf1](http://localhost:8080/tweets/d5d29839-788f-4d23-99ee-82b49ff1bbf1)
