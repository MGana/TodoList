
function TodoCtrl ($scope) {

	$scope.todos = [
		{"name" : "Tache incomplete", "completed" : false},
		{"name" : "Tache complete", "completed" : true},
		{"name" : "Apprendre", "completed" : false},
		{"name" : "Reviser", "completed" : false}
	];

	//delete task
	$scope.removeTodo = function (index) {
		$scope.todos.splice(index,1);
	}


};