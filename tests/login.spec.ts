import  {test,expect} from '@playwright/test'; 

test ("TC-01 - login Happy Path", async ({ page }) => {
    await   page.goto("https://practicesoftwaretesting.com/");
    // Validar que el titulo corresponda a la pagina que he abierto
    await expect(page).toHaveTitle("Practice Software Testing - Toolshop - v5.0");
});