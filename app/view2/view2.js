'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {
   function suma(operando1, operando2) {
   		if (tieneComa(operando1) || tieneComa(operando2)) return 'Error';
   		return operando1 + operando2;
   }
   function resta(operando1, operando2) {
   		if (tieneComa(operando1) || tieneComa(operando2)) return 'Error';
   		return operando1 - operando2;
   }
   function multiplicacion(operando1, operando2) {
   		if (tieneComa(operando1) || tieneComa(operando2)) return 'Error';
   		return operando1 * operando2;
   }
   function division(operando1, operando2) {
   		if (operando2 === 0) return 'Error';
   		if (tieneComa(operando1) || tieneComa(operando2)) return 'Error';
   		return operando1 / operando2;
   }

   // funciones privadas
   function tieneComa(operando) {
   	return String(operando).split('.').length > 1;
   }

   return {
   	  suma: suma,
   	  resta: resta,
   	  multiplicacion: multiplicacion,
   	  division: division
   };
}]);