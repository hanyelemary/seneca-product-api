Product Microservice
====================

## Build/Run Instructions

Open the terminal and run the following command at the root of the project to fetch all dependencies:

```
npm install
```

Once all dependencies are installed, run the following command to fire up the application:

```
npm start
```

## Integration Tests

Now that you have an app running, you can run the integration tests via the following command:

```
npm run integration-test
```

Now, open up the browser (or postman) and go to the following url: 

```
http://localhost:3000/products/123
```

For a POST request to search for products by name or description, run this from the command line:

```
curl -m 1 -s -H 'Content-Type: application/json' -d '{"query":"camera"}' http://localhost:3000/products/
```