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

  async function DemoController($scope) {
    // Your Code Here
    const users = await getDataFromApi(`https://jsonplaceholder.typicode.com/users`) ; 
    const posts = await Promise.all(
      users.map(user=>{
        return getDataFromApi(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`) 
      })
    )
    console.log(posts);
    // const postsFlat = posts.flat() ; 
    // console.log(posts);
  }
})();
