app.controller("transactionController", function($scope, httpFactory) {

  $scope.transaction = {};
  $scope.edit = false;

  var transactionsUrl = "/api/v1/transactions";

  getTransactions = function(url) {
    httpFactory.get(url)
    .then(function(response) {
      $scope.transactions = response.data;
    });
  };

  $scope.postTransaction = function() {
    var payload = $scope.transaction;
    httpFactory.post(transactionsUrl, payload);
    $scope.transaction = {};
    getTransactions(transactionsUrl);
  };

  $scope.formatDate = function(utcDate) {
    return moment(utcDate).format("MM/DD/YY");
  };

  $scope.editTransaction = function(id) {
    transactionUrl = "api/v1/transaction/" + id;
    httpFactory.get(transactionUrl).then(function(response) {
      $scope.transaction = response.data;
    });
    $scope.edit = true;
  };

  $scope.updateTransaction = function(id) {
    var payload = $scope.transaction;
    httpFactory.put(transactionUrl, payload);
    $scope.edit = false;
    $scope.transaction = {};
    getTransactions(transactionsUrl);
  };

  $scope.deleteTransaction = function(id) {
    transactionUrl = "api/v1/transaction/" + id;
    httpFactory.delete(transactionUrl);
    getTransactions(transactionsUrl);
  };

  getTransactions(transactionsUrl);
});
