
var path = require("path");

var friendsArray = require("../data/friends.js");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
       // console.log(typeof friendsArray)
//console.log(res.json(friends))
        res.json(friendsArray)
    })

    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        var scores = newFriend.scores;
        var bestFriend;
        var totalDiff = 0;
        var maxDiff = 100000;
        for(var i = 0; i< friendsArray.length; i++) {
            var currentFriend = friendsArray[i];
            // console.log(currentFriend)
            // console.log(currentFriend.scores)
            var currentScores = currentFriend.scores;
            
            for(var j = 0; j < 10; j++) {
                totalDiff += Math.abs(parseInt(scores[j]) - parseInt(currentScores[j]));

            }
            if (totalDiff < maxDiff) {
                console.log(totalDiff);
                console.log(maxDiff);
                bestFriend = currentFriend;
                maxDiff = totalDiff;
                console.log(maxDiff)
                
                
            }


        }
       // console.log(bestFriend.name);
        

        friendsArray.push(req.body);
        
        res.json({matchImage : bestFriend.photo, matchName : bestFriend.name});
        
        

        //console.log(scores);
        
        


    })

};
