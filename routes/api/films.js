const express = require('express');
const router = express.Router();

//Film model
const Film = require('../../models/Film');

//@route    GET api/items
//@desc     get all items
//@access   public

router.get('/', (req, res) => {
  Film.find()
    .sort({ date: -1 })
    .then(films => res.json(films));
});

//@route    POST api/items
//@desc     create a film
//@access   public

router.post('/', (req, res) => {
  const newFilm = new Film({
    name: req.body.name,
    link: req.body.link
  });

  newFilm.save().then(film => res.json(film));
});

//@route    DELETE api/items/:id
//@desc     delete a film
//@access   public

router.delete('/:id', (req, res) => {
  Film.findById(req.params.id)
    .then(film => film.remove().then(() => res.json({ success: true })))
    .catch(err => res.stats(404).json({ success: false }));
});

module.exports = router;
