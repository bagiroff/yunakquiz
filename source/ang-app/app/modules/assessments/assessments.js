'use strict';

angular.module('yunakQuiz.assessments', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  	.when('/assessments/:assessment_id', {
    templateUrl: 'modules/assessments/assessment_show.html',
    controller: 'AssessmentsCtrl'
  })

  	.when('/assessments/:assessment_id/result', {
    templateUrl: 'modules/assessments/assessment_result.html',
    controller: 'AssessmentsResultCtrl'
  })
  ;
   
}])

.filter('answerCheck', function() {
  return function(input) {
    
  };
})

.controller('AssessmentsCtrl', ['$scope', '$routeParams', '$location', '$http', function($scope, $routeParams, $location, $http) {

// $http.get('/modules/assessments/assessments/assessments.json').success(function(data) {
//     $scope.assessments = data;
//  });
$scope.assessments=[
	{
		"id": 1, 
		"name": "Assessment1",
		"description":"description1",
		"questions": [
			{"title": "Question1",
		 	"answers" : [{"title":"aaa", "checked":false}, {"title":"bbb", "checked":false}, {"title":"ccc", "checked":false}] },
			{"title": "Question2",
		 	"answers" : [{"title":"aaa2", "checked":false}, {"title":"bbb2", "checked":false}, {"title":"ccc2", "checked":false}] },
			{"title": "Question3",
		 	"answers" : [{"title":"aaa3", "checked":false}, {"title":"bbb3", "checked":false}, {"title":"ccc3", "checked":false}] }
			]
	},

	{
		"id": 2, 
		"name": "Assessment2",
		"description":"description2",
		"questions": [
			{"title": "Question1",
		 	"answers" : [{"title":"aaa", "checked":false}, {"title":"bbb", "checked":false}, {"title":"ccc", "checked":false}] },
			{"title": "Question2",
		 	"answers" : [{"title":"aaa2", "checked":false}, {"title":"bbb2", "checked":false}, {"title":"ccc2", "checked":false}] },
			{"title": "Question3",
		 	"answers" : [{"title":"aaa3", "checked":false}, {"title":"bbb3", "checked":false}, {"title":"ccc3", "checked":false}] }
			]
	}
];    
	
$scope.getAssessment = function(assessmentId){ 
	var assessment = $scope.assessments[assessmentId-1];
	return assessment;
};

$scope.assessment = $scope.getAssessment($routeParams.assessment_id);

$scope.checkAnswer = function(answer){
	answer.checked = !answer.checked;
};

$scope.passAssessment = function(){

	$location.path($location.path()+'/result');	
};


}])
.controller('AssessmentsResultCtrl', ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location) {

	$scope.getAssessmentResult = function(){ 
	var assessmentResult = {
	id: 1, 
	name: "Assessment 1",
	description: "Description for test",
	questions: [
		{title: 'Question 1',
		 description: "Description 1",
		 answers : [{title:"aaa1", checked:true,correct:true}, {title:"bbb", checked:false,correct:false}, {title:"ccc", checked:false,correct:false}] ,
		 correct:true},
		{title: 'Question 2',
		 description: "Description 2",
		 answers : [{title:"aaa2", checked:true,correct:true}, {title:"bbb2", checked:false,correct:true}, {title:"ccc2", checked:false,correct:false}] ,
		correct:true},
		{title: 'Question 3',
		 description: "Description 3",
		 answers : [{title:"aaa3", checked:true,correct:false}, {title:"bbb3", checked:false,correct:true}, {title:"ccc3", checked:true,correct:false}], 
		correct:false}
		]
	};
	return assessmentResult;
	};
	
	$scope.correctAnswerCounter = function(){
		var questions = $scope.assessmentResult.questions
		var questionsLength = $scope.assessmentResult.questions.length;	
		var counter = 0;
		for (var i=0;i<questionsLength; i++){
			if (questions[i].correct) {counter++}
		}
		var count = (counter / questionsLength)*100 ;
		var count = Math.round(count);
		return count;

	}

	$scope.assessmentResult = $scope.getAssessmentResult();
	$scope.redirectToAssessment = function(){
		$location.path('/assessments/'+$routeParams.assessment_id);	

	
	};

	$scope.counter = $scope.correctAnswerCounter();

}]);