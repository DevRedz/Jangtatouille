// Import the Koa framework - a modern web framework for Node.js
const Koa = require("koa");
const Router = require("koa-router");

// Create a new Koa application instance
// This is the main object we'll use to handle web requests and responses
const app = new Koa();
const router = new Router();

// Add middleware to process all incoming requests
// Middleware functions run when a request comes in and allow us to modify the response
router.get("/", (ctx) => {
  // This function will be called when a GET request is made to the root URL
  ctx.body = "Home😉";
}
);
router.get("/about", (ctx) => {
  // This function will be called when a GET request is made to the /about URL
  ctx.body = "About🥲";
}
);

app.use(router.routes()).use(router.allowedMethods());

// Start the server and listen on port 4000
// This will make our application accessible via http://localhost:4000
app.listen(4000, () => {
  console.log("Listening to port 4000");
});
