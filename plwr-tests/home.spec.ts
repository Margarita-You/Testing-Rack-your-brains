// plwr-tests/home.spec.ts
import { test, expect } from '@playwright/test';

test('Главная страница загружается и отображает заголовок', async ({ page }) => {
  // Переходим на корень сайта (используется baseURL из конфига)
  await page.goto('/');

  // Проверяем, что на странице есть заголовок H1
  // (замените селектор на актуальный для вашего сайта)
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  
  // Можно проверить наличие кнопки входа или логотипа
  // await expect(page.getByRole('link', { name: 'Войти' })).toBeVisible();
});