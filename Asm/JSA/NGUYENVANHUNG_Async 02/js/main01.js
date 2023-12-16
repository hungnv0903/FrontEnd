(function () {
  var app = angular.module('myApp', []);

  app.controller('demoCtrl', ['$scope', DemoController]);

  function DemoController($scope) {
    // Your Code Here
    $.get('https://jsonplaceholder.typicode.com/users', function (users) {
      // if we are here, which means the data is retrieved from the API
      users.forEach((user , index) => {
        $.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`, function (posts){
              user.posts = posts ; 

              posts.forEach(post => {    
                $.get(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`, function (comments){
                    post.comments = comments ; 
                    console.log(user);
                    $scope.$apply(function () {
                      $scope.users = users;
                    });
                })             
              });
        });
        
      });
    });
  }
})();
