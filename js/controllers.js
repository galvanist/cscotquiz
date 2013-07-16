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
}

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};
