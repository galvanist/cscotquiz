function AwardListCtrl($scope, $http) {
  $http.get('data/chs2013csawards.json').success(function(data) {
    $scope.awards = data.splice(0, 5);
  });
}
