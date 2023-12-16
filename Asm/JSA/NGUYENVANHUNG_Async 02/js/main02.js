(function () {
  var app = angular.module('myApp', []);
  function getDataFromApi(url) {
    return new Promise(function (resolve, reject) {
      $.get(url, function (data) {
        resolve(data);
      });
    });
  }

  app.controller('demoCtrl', ['$scope', DemoController]);

  function DemoController($scope) {
    // Your Code Here
    // getDataFromApi(`https://jsonplaceholder.typicode.com/users`)
    //   .then(users => {
    //     $scope.$apply(function () {
    //       users.forEach(user => {
    //         getDataFromApi(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
    //           .then(posts=>{
    //             user.posts = posts ; 
    //             $scope.$apply(function(){
    //               posts.forEach(post=>{
    //                 getDataFromApi(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
    //                 .then(comments=>{
    //                   post.comments = comments ; 
    //                   $scope.$apply(function(){
    //                     $scope.users = users;
    //                     console.log(users);
    //                   })
    //                 })
    //               })
    //             })
    //           })
    //       });
    //     });
    //   })
    //   .catch(error => console.log(error))

    getDataFromApi(`https://jsonplaceholder.typicode.com/users`)
      .then(users => {
        users.forEach(user => {
          getDataFromApi(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
            .then(posts => {
              user.posts = posts;
              posts.forEach(post => {
                getDataFromApi(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
                  .then(comments => {
                    post.comments = comments;
                    console.log(users);
                    $scope.$apply(function () {
                      $scope.users = users;
                    });

                  })
              })
            })
        });
      })
      .catch(error => console.log(error))

    getDataFromApi(`https://jsonplaceholder.typicode.com/users`)
    .then(users=>{
      Promise.all([...users]).then(user=>{
        console.log(users);
      })
    })
    .catch(error=>console.log(error))
  }
})();
