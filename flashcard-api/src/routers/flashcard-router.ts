import express from 'express';
import { flashcards } from '../state';
import { authMiddleware } from '../middleware/auth.middleware';

/**
 * User router will handle all requests starting with
 *  /users
 */
export const flashcardRouter = express.Router();


/**
 * find all spaceships
 * endpoint: /flashcards
 */
flashcardRouter.get('', async (req, res) => {
  res.json(flashcards);
});

/**
 * find flashcard by id
 * endpoint: /flashcards/:id
 */
flashcardRouter.get('/:id', async (req, res) => {
  const id = +req.params.id;
  const flashcard = flashcards.find(card => card.id === id);
  res.json(flashcard);
});

/**
 * create flashcard
 * endpoint: /flashcards
 */
flashcardRouter.post('', [
  authMiddleware('admin', 'trainer'),
  (req, res) => {
    console.log(`creating flashcard`, req.body);
    flashcards.push(req.body);
    res.status(201);
    res.send('created flashcard');
  }
]);


/**
 * update flashcard
 * endpoint: /flashcards
 */
flashcardRouter.patch('', [
  authMiddleware('amin', 'trainer'),
  (req, res) => {
    console.log(`updating flashcard`, req.body);
    const flashcard = flashcards.find(card => card.id === req.body.id);
    if (flashcard === undefined) {
      res.status(400);
      res.send('no flashcard existed with provided id');
    } else {
      flashcards.map(card => {
        if (card.id === req.body.id) {
          return card;
        } else {
          return {
            ...flashcard, // spread operator
            ...req.body
          };
        }
      });
      res.json(flashcard);
    }
  }
]);