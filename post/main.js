
var app = angular.module('myApp', []);

app.filter('limitWord', function() {
  return function(desc) {
    var msg = desc;
    console.log(desc);
    if(desc.length > 2)
      msg = desc.substring( 0,2 ) + "...";
    return msg;
  };
})
app.controller('ProfileController', function ($scope) {

  $scope.blogs = [
    {
      title: "Hello",
      description: "First",
      date: new Date()    
    }, 
  ];

  $scope.addBlog = function (title,desc) {
     $scope.blogs.push({
        title: title,
        description: desc,
        date: new Date()
    });
  }
});
