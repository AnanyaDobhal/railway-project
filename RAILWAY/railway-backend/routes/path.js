const express = require('express');
const router = express.Router();
const graph = require('../graph');
const { dijkstra } = require('../utils.js');
const { sendPathToESP } = require('../iot.js'); // IoT integration

router.post('/', (req, res) => {
  const { from, to, busy } = req.body;
  console.log('Graph:', graph); 
  const { path, distance } = dijkstra(graph, from, to, busy);
  if (path.length === 0) {
    return res.status(404).json({ message: 'No valid path found', path: [], distance: null });
  }
  res.json({ path, distance });
});

module.exports = router;
