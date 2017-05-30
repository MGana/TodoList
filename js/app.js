
var app = angular.module('todo', []);

app.directive('ngBlur' , function(){
	return function(scope, elem, attrs){
		elem.bind('blur', function() {
			scope.$apply(attrs.ngBlur);
		})
	}
})

app.controller('TodoCtrl' , function ($scope , filterFilter, $http) {

	$scope.todos = [];
	$scope.placeholder = "Chargement ..."

	//Get data with AJAX
	$http.get('todos.php').success( function(data){
		$scope.todos = data;
		$scope.placeholder = "Ajouter une nouvelle tache"
	})


	//count remaining tasks
	$scope.$watch('todos' , function() {
		$scope.remaining = filterFilter($scope.todos, {completed:false}).length;
		//In case of all tasks are manually checked
		$scope.allchecked = !$scope.remaining;
	}, true)	

	//Check All tatsks
	$scope.checkAllTodo = function (allchecked) {
		$scope.todos.forEach(function(todo){
			todo.completed = allchecked;
		})
	}


	//Delete task
	$scope.removeTodo = function (index) {
		$scope.todos.splice(index,1);
	}

	//Add task
	$scope.addTodo =function () {
		$scope.todos.push({
			name : $scope.newtodo,
			completed : false
		})
		//Empty form field
		$scope.newtodo = "";
	}

	//Edit task
	$scope.editTodo = function (todo) {
		todo.editing = false ;
	}


});