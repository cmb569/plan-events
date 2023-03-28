import express, { Request, Response, Router } from 'express';
import FloralStyle from '../models/floralStyle';
import floralStyleSeedData from '../models/floralStyle_seeds';

const floralStyle: Router = express.Router();

floralStyle.get('/data/seed', (req: Request, res: Response) => {
  FloralStyle.insertMany(floralStyleSeedData)
    .then(() => res.redirect('/florals'))
    .catch((err: Error) => res.status(500).send(err.message));
});

// Index
floralStyle.get('/', (req: Request, res: Response) => {
  FloralStyle.find()
    .populate('floralStyle')
    .then((foundFlorals: Array<any>) => {
      res.send(foundFlorals);
    })
    .catch((err: Error) => res.status(500).send(err.message));
});

// Show
floralStyle.get('/:id', (req: Request, res: Response) => {
  FloralStyle.findById(req.params.id)
    .populate('florals')
    .then((foundFloralStyle: any) => {
      res.render('floralsShow', {
        floralStyle: foundFloralStyle,
      });
    })
    .catch((err: Error) => res.status(500).send(err.message));
});

// Delete
floralStyle.delete('/:id', (req: Request, res: Response) => {
  FloralStyle.findByIdAndDelete(req.params.id)
    .then((deletedFloralStyle: any) => {
      res.status(303).redirect('/florals');
    })
    .catch((err: Error) => res.status(500).send(err.message));
});

export default floralStyle;
