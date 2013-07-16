function AwardListCtrl($scope, $http) {
  $http.get('data/chs2013csawards.json').success(function(data) {
    leng = data.length;
    rand = Math.floor((Math.random()*leng)+1);
    $scope.awards = data.splice(rand, 1);
  });
}
