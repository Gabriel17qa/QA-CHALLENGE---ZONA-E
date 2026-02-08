Feature: Login de usuario

  Background:
    Given el usuario se encuentra en la pantalla de login

  Scenario: Login exitoso con credenciales válidas
    When el usuario ingresa credenciales válidas
    Then el usuario es redirigido a la pantalla de productos

  Scenario: Login con contraseña incorrecta
    When el usuario ingresa el usuario "standard_user" y la contraseña "incorrecta"
    Then se muestra un mensaje de error
    And el usuario permanece en la pantalla de login

  Scenario: Login con usuario bloqueado
    When el usuario ingresa el usuario "locked_out_user" y la contraseña válida
    Then se muestra un mensaje indicando que el usuario está bloqueado
