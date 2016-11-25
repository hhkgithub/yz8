var express = require('express');
var querystring = require('querystring');
var router = express.Router();
var lol_token = "5B8B0-CB943-99805-88BB5";
var http = require('http');
var url = require('url');
var request = require('request');
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

router.post('/userarea', function (req, res, next) {
    console.log(req.body.userid);
    var options = {
        url: encodeURI('http://lolapi.games-cube.com/UserArea?keyword=无敌王老吉'),
        headers: {
            'DAIWAN-API-TOKEN': '5B8B0-CB943-99805-88BB5'
        }
    };
    request(options,function(error, response, body){
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            console.log(info);
        }else{
            console.log(response.statusCode);
        }
    })
    // var postData = querystring.stringify({
    //     'keyword': req.body.userid
    // });
    //
    // var options = {
    //     hostname: 'lolapi.games-cube.com',
    //     port: 80,
    //     path: '/UserArea',
    //     method: 'GET',
    //     headers: {
    //         'DAIWAN-API-TOKEN': '5B8B0-CB943-99805-88BB5',
    //     }
    // };
    //
    // var requestC = http.request(options,function(result){
    //     result.on('data', function(chunk){
    //         console.log(1);
    //         console.log(chunk.toString());
    //     });
    //     result.on('end', function()  {
    //         console.log('No more data in response.');
    //     });
    // })
    //
    // requestC.write(postData);
    // requestC.end();

})
module.exports = router;
