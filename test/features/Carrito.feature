Feature: Carrito de compras

  Como usuario autenticado
  Quiero gestionar los productos del carrito
  Para continuar con el proceso de compra

  Background:
    Given el usuario inicio sesion correctamente
    And tiene al menos un producto agregado al carrito

  Scenario: Visualizar productos en el carrito
    When el usuario accede al carrito
    Then se muestran los productos agregados

  Scenario: Eliminar producto desde el carrito
    When el usuario elimina el producto del carrito
    Then el carrito no contiene productos
