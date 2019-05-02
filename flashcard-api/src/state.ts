import { User } from './model/user';
import { Flashcard } from './model/flashcard';

export let users: User[] = [
  {
    name: 'blake',
    password: 'pass',
    role: 'admin',
    userId: 1,
    username: 'btkruppa'
  }
];

export let flashcards: Flashcard[] = [
  {
    id: 1,
    front: 'What Is Node.js',
    back: `Node.js is a JavaScript runtime build on Chrome's V8 Engine`
  },
  {
    id: 2,
    front: 'What Is express',
    back: `express is a JavaScript framework to simplify the process of handling http requests in Node.js`
  },
  {
    id: 3,
    front: 'What are Middleware',
    back: `Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.`
  },
  {
    id: 4,
    front: 'What is an express router',
    back: `A router represents a subset of middleware in an express application`
  }
];