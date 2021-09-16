var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  setTimeout(() => {
    let jsonResponse = {
      "mobileCards": [
        { imageName: "id1", title: 'Offer 1', cols: 2, rows: 1 },
        { imageName: "id2", title: 'Offer 2', cols: 2, rows: 1 },
        { imageName: "id3", title: 'Offer 3', cols: 2, rows: 1 },
        { imageName: "id4", title: 'Offer 4', cols: 2, rows: 1 }
      ],
      "webCards": [
        { imageName: "id1", title: 'Offer 1', cols: 2, rows: 1 },
        { imageName: "id2", title: 'Offer 2', cols: 1, rows: 1 },
        { imageName: "id3", title: 'Offer 3', cols: 1, rows: 2 },
        { imageName: "id4", title: 'Offer 4', cols: 1, rows: 1 }
      ] 
    };
  
    res.json(jsonResponse);
  }, 3000);

});

module.exports = router;
