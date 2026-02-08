Feature: Proceso de checkout

  Como usuario autenticado
  Quiero completar el proceso de compra
  Para finalizar la adquisición de productos

  Background:
    Given el usuario inicio sesion correctamente
    And tiene productos en el carrito
    And se encuentra en la pantalla de checkout

  Scenario: Checkout exitoso
    When el usuario completa el formulario de checkout con datos válidos
    And confirma la compra
    Then se muestra el mensaje de compra exitosa
