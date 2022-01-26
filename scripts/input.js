var app = angular.module('momoInput', []);

region_options = ['Albany', 'Atlanta', 'BaltimoreWashington', 'Boise', 'Boston',
       'BuffaloRochester', 'California', 'Charlotte', 'Chicago',
       'CincinnatiDayton', 'Columbus', 'DallasFtWorth', 'Denver',
       'Detroit', 'GrandRapids', 'GreatLakes', 'HarrisburgScranton',
       'HartfordSpringfield', 'Houston', 'Indianapolis', 'Jacksonville',
       'LasVegas', 'LosAngeles', 'Louisville', 'MiamiFtLauderdale',
       'Midsouth', 'Nashville', 'NewOrleansMobile', 'NewYork',
       'Northeast', 'NorthernNewEngland', 'Orlando', 'Philadelphia',
       'PhoenixTucson', 'Pittsburgh', 'Plains', 'Portland',
       'RaleighGreensboro', 'RichmondNorfolk', 'Roanoke', 'Sacramento',
       'SanDiego', 'SanFrancisco', 'Seattle', 'SouthCarolina',
       'SouthCentral', 'Southeast', 'Spokane', 'StLouis', 'Syracuse',
       'Tampa', 'TotalUS', 'West', 'WestTexNewMexico']

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
		  {display_name : "Organic", api_name : 1},
		  {display_name : "Conventional", api_name : 0},
		  ];
		  
	$scope.regions = [
          {'display_name': 'Albany', 'api_name': 0},
          {'display_name': 'Atlanta', 'api_name': 1}, 
          {'display_name': 'BaltimoreWashington', 'api_name': 2}, 
          {'display_name': 'Boise', 'api_name': 3}, 
          {'display_name': 'Boston', 'api_name': 4}, 
          {'display_name': 'BuffaloRochester', 'api_name': 5}, 
          {'display_name': 'California', 'api_name': 6}, 
          {'display_name': 'Charlotte', 'api_name': 7}, 
          {'display_name': 'Chicago', 'api_name': 8}, 
          {'display_name': 'CincinnatiDayton', 'api_name': 9}, 
          {'display_name': 'Columbus', 'api_name': 10}, 
          {'display_name': 'DallasFtWorth', 'api_name': 11}, 
          {'display_name': 'Denver', 'api_name': 12}, 
          {'display_name': 'Detroit', 'api_name': 13}, 
          {'display_name': 'GrandRapids', 'api_name': 14}, 
          {'display_name': 'GreatLakes', 'api_name': 15}, 
          {'display_name': 'HarrisburgScranton', 'api_name': 16}, 
          {'display_name': 'HartfordSpringfield', 'api_name': 17}, 
          {'display_name': 'Houston', 'api_name': 18}, 
          {'display_name': 'Indianapolis', 'api_name': 19}, 
          {'display_name': 'Jacksonville', 'api_name': 20}, 
          {'display_name': 'LasVegas', 'api_name': 21}, 
          {'display_name': 'LosAngeles', 'api_name': 22}, 
          {'display_name': 'Louisville', 'api_name': 23}, 
          {'display_name': 'MiamiFtLauderdale', 'api_name': 24}, 
          {'display_name': 'Midsouth', 'api_name': 25}, 
          {'display_name': 'Nashville', 'api_name': 26}, 
          {'display_name': 'NewOrleansMobile', 'api_name': 27}, 
          {'display_name': 'NewYork', 'api_name': 28}, 
          {'display_name': 'Northeast', 'api_name': 29}, 
          {'display_name': 'NorthernNewEngland', 'api_name': 30}, 
          {'display_name': 'Orlando', 'api_name': 31}, 
          {'display_name': 'Philadelphia', 'api_name': 32}, 
          {'display_name': 'PhoenixTucson', 'api_name': 33}, 
          {'display_name': 'Pittsburgh', 'api_name': 34}, 
          {'display_name': 'Plains', 'api_name': 35}, 
          {'display_name': 'Portland', 'api_name': 36}, 
          {'display_name': 'RaleighGreensboro', 'api_name': 37}, 
          {'display_name': 'RichmondNorfolk', 'api_name': 38}, 
          {'display_name': 'Roanoke', 'api_name': 39}, 
          {'display_name': 'Sacramento', 'api_name': 40}, 
          {'display_name': 'SanDiego', 'api_name': 41}, 
          {'display_name': 'SanFrancisco', 'api_name': 42}, 
          {'display_name': 'Seattle', 'api_name': 43}, 
          {'display_name': 'SouthCarolina', 'api_name': 44}, 
          {'display_name': 'SouthCentral', 'api_name': 45}, 
          {'display_name': 'Southeast', 'api_name': 46}, 
          {'display_name': 'Spokane', 'api_name': 47}, 
          {'display_name': 'StLouis', 'api_name': 48}, 
          {'display_name': 'Syracuse', 'api_name': 49}, 
          {'display_name': 'Tampa', 'api_name': 50}, 
          {'display_name': 'TotalUS', 'api_name': 51}, 
          {'display_name': 'West', 'api_name': 52}, 
          {'display_name': 'WestTexNewMexico', 'api_name': 53}
		  ];
	
	$scope.reset = function() {
	  $scope.input = angular.copy($scope.master.input);
	  $scope.msg = '';
	};
	
	$scope.isValidDate = function() {
		return ($scope.input.date.length > 0 && $scope.input.date != null);
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
	$scope.isValidType = function() {
		return ($scope.input.type != null);
	}
	$scope.isValidRegion = function() {
		return ($scope.input.region != null);
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
				$scope.isValidDate() &&
				$scope.isValidType() &&
				$scope.isValidRegion()
				);
	}
	$scope.submit = function () {
		if($scope.isValid()) {
			  $http({
				  method: 'POST',
				  url:'http://momo-api-avo-ai.192.168.99.101.nip.io/classify/',
				  data: $scope.input
				  }).then(function mySuccess(response) {
					//Response data when the API is complete will be put in msg
					price_per_volume = response.data[0]
					console.log(price_per_volume)
					total_price = price_per_volume * $scope.input.total_volume
					console.log(total_price)
					$scope.msg = ("$" + total_price.toFixed(2))
				  }, function myError(response) {
					$scope.msg = response.statusText;
				  });

		}
		else {
			$scope.msg = "Momo doesn't want this, it makes no sense!"
		}
	}
};

app.controller(inputCtrl);
