'use strict';

describe('myApp.view2 module', function() {

  beforeEach(module('myApp.view2'));

  describe('Pruebas Calculadora basica TP5', function(){
    it('deberia sumar 5 + 6 = 11', inject(function($controller) {
      //preparar
    	var view2Ctrl = $controller('View2Ctrl');
    	//actuar
      var resul = view2Ctrl.suma(5,6);
    	//afirmar
      expect(resul).toBe(11);
    }));

    it('No se pueden sumar numeros con coma 2.5 + 10 = "Error"', inject(function($controller) {
      //preparar
    	var view2Ctrl = $controller('View2Ctrl');
    	//actuar
      var resul = view2Ctrl.suma(2.5,10);
    	//afirmar
      expect(resul).toBe('Error');
    }));

    it('deberia restar 10 - 9 = 1', inject(function($controller) {
      //preparar
      var view2Ctrl = $controller('View2Ctrl');
      //actuar
      var resul = view2Ctrl.resta(10,9);
      //afirmar
      expect(resul).toBe(1);
    }));

	it('Multiplicar por cero = 0', inject(function($controller) {
      //preparar
      var view2Ctrl = $controller('View2Ctrl');
      //actuar
      var resul = view2Ctrl.multiplicacion(10,0);
      //afirmar
      expect(resul).toBe(0);
    })); 

	it('Multiplicar X x 1 = X', inject(function($controller) {
      //preparar
      var view2Ctrl = $controller('View2Ctrl');
      //actuar
      var resul = view2Ctrl.multiplicacion(1000,1);
      //afirmar
      expect(resul).toBe(1000);
    }));       

    it('no deberia dividir por cero', inject(function($controller) {
      //preparar
      var view2Ctrl = $controller('View2Ctrl');
      //actuar
      var resul = view2Ctrl.division(10,0);
      //afirmar
      expect(resul).toBe('Error');
    }));
  });

  it('deberia dividir 50 / 25 = 2', inject(function($controller) {
      //preparar
      var view2Ctrl = $controller('View2Ctrl');
      //actuar
      var resul = view2Ctrl.division(50,25);
      //afirmar
      expect(resul).toBe(2);
    }));
    it('no debe operar numeros con coma', inject(function($controller) {
      //preparar
      var view2Ctrl = $controller('View2Ctrl');
      //actuar
      var resul = view2Ctrl.suma(5.0,2.5);
      //afirmar
      expect(resul).toBe('Error');
    }));
});