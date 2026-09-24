@login
Feature: Autenticaci�n en el Ecommerce

  Scenario: Inicio de sesi�n exitoso con credenciales v�lidas
    Given que el usuario navega a la p�gina de login
    When inicia sesi�n con el correo "pranav@testroverautomation.com" y la contrase�a "Test1234"
    Then debe ingresar correctamente y la URL debe contener "route=account/account"
