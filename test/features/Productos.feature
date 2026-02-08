Feature: Gestión de productos

  Como usuario autenticado
  Quiero visualizar y seleccionar productos
  Para agregarlos al carrito de compras

  Background:
    Given el usuario inicio sesion correctamente
    And se encuentra en la pantalla de productos

  Scenario: Visualizar listado de productos
    Then se muestra el listado de productos disponibles

  Scenario: Agregar un producto al carrito
    When el usuario agrega un producto al carrito
    Then el producto se refleja en el contador del carrito

  Scenario: Remover un producto del carrito desde productos
    Given el usuario tiene un producto agregado al carrito
    When el usuario remueve el producto
    Then el carrito queda vacío
