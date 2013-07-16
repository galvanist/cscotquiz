function AwardListCtrl($scope, $http) {
  $http.get('data/chs2013csawards.json').success(function(data) {
    leng = data.length;
    rand = Math.floor((Math.random()*leng)+1);
    awards = data.splice(rand, 1);
    values = [
        awards[0]['award_made'],
        data.splice(Math.floor((Math.random()*leng)+1), 1)[0]['award_made'],
        data.splice(Math.floor((Math.random()*leng)+1), 1)[0]['award_made']
    ];
    $scope.awards = awards;
    $scope.values = shuffle(values);
    /*console.log(awards[0]['award_made']);
    console.log(values);*/
  });
  $scope.guess = function (guess,answer) {
    if (guess == answer) { $('#yes').modal(); score+=1 } else { $('#no').modal(); score-=1 }
  }
}

//faster shuffle http://stackoverflow.com/a/6274398
function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = (Math.random() * counter--) | 0;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}
