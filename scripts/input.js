var app = angular.module('momoInput', []);

app.config(function($httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
});

inputCtrl = function($scope, $http) {
	$scope.master = {
		input: {
			total_volume: null,
			small_avo: null,
			large_avo: null,
			xl_avo: null,
			total_bags: null,
			small_bags: null,
			large_bags: null,
			xl_bags: null,
			year: null,
			region: null,
		}
	}
	
	$scope.input = {
		total_volume: null,
		small_avo: null,
		large_avo: null,
		xl_avo: null,
		total_bags: null,
		small_bags: null,
		large_bags: null,
		xl_bags: null,
		year: null,
		region: null,
		};
  
	$scope.msg = "";
  
	$scope.types = [
		  {display_name : "Organic", api_name : "ORG"},
		  {display_name : "Conventional", api_name : "CON"},
		  ];
	  
	$scope.reset = function() {
	  $scope.input = angular.copy($scope.master.input);
	  $scope.msg = '';
	};
	
	$scope.isValidTotalVolume = function() {
		return ($scope.input.total_volume >= 0 && $scope.input.total_volume != null);
	};
	$scope.isValidSmallAvo = function() {
		return ($scope.input.small_avo >= 0 && $scope.input.small_avo != null);
	};
	$scope.isValidLargeAvo = function() {
		return ($scope.input.large_avo >= 0 && $scope.input.large_avo != null);
	};
	$scope.isValidXLAvo = function() {
		return ($scope.input.xl_avo >= 0 && $scope.input.xl_avo != null);
	};
	$scope.isValidTotalBags = function() {
		return ($scope.input.total_bags >= 0 && $scope.input.total_bags != null);
	};
	$scope.isValidSmallBags = function() {
		return ($scope.input.small_bags >= 0 && $scope.input.small_bags != null);
	};
	$scope.isValidLargeBags = function() {
		return ($scope.input.large_bags >= 0 && $scope.input.large_bags != null);
	};
	$scope.isValidXLBags = function() {
		return ($scope.input.xl_bags >= 0 && $scope.input.xl_bags != null);
	};
	$scope.isValidYear = function() {
		return ($scope.input.year >= 0 && Number.isInteger($scope.input.year)) ;
	};
	$scope.isValidType = function() {
		return ($scope.input.type != null);
	}
	$scope.isValidRegion = function() {
		return ($scope.input.region.length > 0 && $scope.input.region != null);
	};
	$scope.isValid = function() {
		return ($scope.isValidTotalVolume() &&
				$scope.isValidSmallAvo() &&
				$scope.isValidLargeAvo() &&
				$scope.isValidXLAvo() &&
				$scope.isValidTotalBags() &&
				$scope.isValidSmallBags() &&
				$scope.isValidLargeBags() &&
				$scope.isValidXLBags() &&
				$scope.isValidYear() &&
				$scope.isValidType() &&
				$scope.isValidRegion()
				);
	}
	$scope.submit = function () {
		if($scope.isValid()) {
			  $http({
				  method: 'POST',
				  url:'http://192.168.187.4:8000/predictorInput/',
				  data: $scope.input
				  }).then(function mySuccess(response) {
					//Response data when the API is complete will be put in msg
					$scope.reset();
				  }, function myError(response) {
					$scope.msg = response.statusText;
				  });
			  $scope.msg = '';
		}
		else {
			$scope.msg = "Momo doesn't want this, it makes no sense!"
		}
	}
};

app.controller(inputCtrl);
