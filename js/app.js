
function TodoCtrl ($scope) {

	$scope.todos = [
		{"name" : "Tache incomplete", "completed" : false},
		{"name" : "Tache complete", "completed" : true},
		{"name" : "Apprendre", "completed" : false},
		{"name" : "Reviser", "completed" : false}
	];

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


};