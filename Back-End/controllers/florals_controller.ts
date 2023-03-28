//DEPENDENCIES
import express, { Request, Response } from 'express';
const florals = express.Router();
import Florals from '../models/florals';
import { IFloralStyle } from '../models/floralStyle';

//INDEX
florals.get('/', (req: Request, res: Response) => {
FloralStyle.find()
.then((foundFloralStyleChoice: any) => {
Florals.find()
.then((foundFlorals: any) => {
res.render('index', {
florals: foundFlorals,
//floralStyle: foundFloralStyle,
title: 'Vendor DataBase'
})
})
})
})

//NEW
florals.get('/new', (req: Request, res: Response) => {
FloralStyle.find()
.then((foundFloralStyle: any) => {
res.render('new', {
floralStyle: foundFloralStyle
})
})
})

//SHOW
florals.get('/:id', (req: Request, res: Response) => {
Florals.findById(req.params.id)
.populate('floralStyle')
.then((foundFloralStyle: any) => {
res.render('show', {
florals: foundFloralStyle
})
})
.catch((err: Error) => {
res.send('404')
})
})

//CREATE
florals.post('/', (req: Request, res: Response) => {
if (!req.body.image) {
req.body.image = undefined;
}
if (req.body.inSeason === 'on') {
req.body.inSeason = true;
} else {
req.body.inSeason = false;
}
Florals.create(req.body);
res.redirect('/florals');
});

//EDIT
florals.get('/:id/edit', (req: Request, res: Response) => {
FloralStyle.find()
.then((foundFloralStyle: any) => {
Florals.findById(req.params.id)
.then((foundFlorals: any) => {
res.render('edit', {
florals: foundFlorals,
floralStyle: foundFloralStyle
})
})
})
})

//UPDATE
florals.put('/:id', (req: Request, res: Response) => {
if(req.body.inSeason === 'on'){
req.body.inSeason = true
} else {
req.body.inSeason = false
}
Florals.findByIdAndUpdate(req.params.id, req.body, { new: true })
.then((updatedFlorals: any) => {
console.log(updatedFlorals)
res.redirect(`/florals/${req.params.id}`);

})
})

//DELETE
florals.delete('/:id', (req: Request, res: Response) => {
Florals.findByIdAndDelete(req.params.id)
.then((deletedFlorals: any) => {
res.status(303).redirect('/florals')
})
})

export = florals;