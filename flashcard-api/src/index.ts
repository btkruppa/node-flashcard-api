import bodyParser from 'body-parser';
import express from 'express';
import { sessionMiddleware } from './middleware/session.middleware';
import { userRouter } from './routers/user-router';
import { flashcardRouter } from './routers/flashcard-router';

const app = express();

// set port based on environment variable or default to 8080
const port = process.env.FLASHCARD_PORT || 8080;

/**
 * Logging middleware to log info about each request comming in
 */
app.use((req, res, next) => {
  console.log(`request made with url: ${req.url} and method: ${req.method}`);
  // const headers = req.rawHeaders;
  // console.log(headers);
  next();
});

// attach an actual object to req.body
app.use(bodyParser.json());

// attach the specific users session data to req.session
app.use(sessionMiddleware);

/**
 * Register Routers
 */
app.use('/users', userRouter);
app.use('/flashcards', flashcardRouter);

// start up the application
app.listen(port, () => {
  console.log(`application started on port: ${port}`);
});