@search
Feature: Busqueda en Ecommerce

  Scenario: Buscar producto exitoso
    Given que el usuario navega a la tienda
    When busca el producto 'HTC Touch HD'
    Then debe ver el resultado en pantalla
