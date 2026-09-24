import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/login.page';

const { Given, When, Then } = createBdd();

let loginPage: LoginPage;

Given('que el usuario navega a la p�gina de login', async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.navigate();
});

When('inicia sesi�n con el correo {string} y la contrase�a {string}', async ({}, email: string, pass: string) => {
  await loginPage.login(email, pass);
});

Then('debe ingresar correctamente y la URL debe contener {string}', async ({}, rutaEsperada: string) => {
  await loginPage.verifyUrl(rutaEsperada);
});
