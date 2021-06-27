var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET photo listing. */
router.get('/', async (req, res, next) => {
  try {
    const results = await models('SELECT * FROM photo;');
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// GET one photo
router.get('/:photo_id', async (req, res, next) => {
  try {
    const results = await models(
      `select photo_id, title, description, image, price, topic_id from photo where photo_id = ${req.params.photo_id};`
    );
    res.send(results.data);
  } catch (err) {
    res.status(404).send(err);
  }
});

// INSERT a new photo into photos
router.post('/', async (req, res, next) => {
  try {
    await models(
      `insert into photo (title, description, image, price, topic_id) values ('${req.body.title}', '${req.body.description}', '${req.body.image}', '${req.body.price}', '${req.body.topic_id}');`
    );
    res.send({ msg: 'Photo inserted' });
  } catch (err) {
    res.status(404).send(err);
  }
});

//Delete a photo
router.delete('/:photo_id', async (req, res) => {
  try {
    await models(`delete from photo where photo_id = ${req.params.photo_id}`);
    res.send({ msg: 'Photo deleted' });
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
