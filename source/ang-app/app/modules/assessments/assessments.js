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

.controller('AssessmentsCtrl', ['$scope', '$routeParams', '$location', function($scope, $routeParams, $location) {

$scope.getAssessment = function(assessmentId){ 
	var assessment = {
	id: assessmentId, 
	name: "Assessment "+assessmentId,
	questions: [
		{title: 'Question '+assessmentId,
		 description: "Description "+assessmentId,
		 answers : [{title:"aaa", checked:false}, {title:"bbb", checked:false}, {title:"ccc", checked:false}] },
		{title: 'Question 2',
		 description: "Description 2",
		 answers : [{title:"aaa2", checked:false}, {title:"bbb2", checked:false}, {title:"ccc2", checked:false}] },
		{title: 'Question 3',
		 description: "Description 3",
		 answers : [{title:"aaa3", checked:false}, {title:"bbb3", checked:false}, {title:"ccc3", checked:false}] }
		]
	};
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
		 answers : [{title:"aaa1", checked:true, correct:false}, {title:"bbb", checked:false, correct:true}, {title:"ccc", checked:false, correct:false}] },
		{title: 'Question 2',
		 description: "Description 2",
		 answers : [{title:"aaa2", checked:true, correct:false}, {title:"bbb2", checked:false, correct:true}, {title:"ccc2", checked:false, correct:false}] },
		{title: 'Question 3',
		 description: "Description 3",
		 answers : [{title:"aaa3", checked:true, correct:true}, {title:"bbb3", checked:false, correct:true}, {title:"ccc3", checked:false, correct:false}] },
		]
	};
	return assessmentResult;
};
	$scope.assessmentResult = $scope.getAssessmentResult();

}]);