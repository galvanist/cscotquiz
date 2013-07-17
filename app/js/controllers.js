angular.module('cscotquizApp', []);

function AwardListCtrl($scope, $http) {
  $scope.score = 0;
  $http.get('data/chs2013csawards.json').success(function(data) {
    $scope.data = data;
    $scope.award = rand($scope.data);
    $scope.values = values($scope.award,$scope.data);
  });
  $scope.guess = function(guess,answer) {
    if (guess == answer) {
        $('#yes').modal();
        $scope.score+=1
        $scope.lastAward = $scope.award;
        $scope.lastAward.title = $scope.lastAward.project_title?$scope.lastAward.project_title:$scope.lastAward.applicant_name;
        $scope.award = rand($scope.data);
        $scope.values = values($scope.award,$scope.data);
    } else {
        $('#no').modal();
        $scope.score-=1
    }
  }
}

function rand(data) {
    var leng = data.length;
    var rand = Math.floor((Math.random()*leng)+1);
    //return data.splice(rand, 1);
    return data[rand]
}

function value(entity) {
    return entity['award_made'];
}

function values(award,data) {
    var values = [
        value(award),
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
