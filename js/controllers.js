function AwardListCtrl($scope, $http) {
  $scope.score = 0;
  $http.get('data/chs2013csawards.json').success(function(data) {
    $scope.data = data;
    $scope.awards = rand($scope.data);
    $scope.values = values($scope.awards,$scope.data);
  });
  $scope.guess = function (guess,answer) {
    if (guess == answer) {
        $('#yes').modal();
        $scope.score+=1
        $scope.awards = rand($scope.data);
        $scope.values = values($scope.awards,$scope.data);
    } else {
        $('#no').modal();
        $scope.score-=1
    }

  }
}

function rand(data) {
    var leng = data.length, rand;
    rand = Math.floor((Math.random()*leng)+1);
    return data.splice(rand, 1);
}

function value(entity) {
    return entity[0]['award_made'];
}

function values(awards,data) {
    var values = [
        value(awards),
        value(rand(data)),
        value(rand(data))
    ];
    return shuffle(values);
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
