// ==UserScript==
// @name         Tronix Auto Spinner
// @namespace    https://greasyfork.org/users/kittenwoof
// @version      0.3
// @description  Automatically clicks the Tronix spinner with on/off button.
// @author       You
// @match        https://tronix.app/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tronix.app
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let autoClickerEnabled = false;
    let intervalId = null;

    // Создаем контейнер для кнопки и ссылок
    const controlPanel = document.createElement('div');
    controlPanel.style.cssText = `
        position: fixed;
        top: 10px;
        left: 10px;
        z-index: 9999;
        background-color: rgba(0, 0, 0, 0.8);
        padding: 10px;
        border-radius: 5px;
    `;

    // Кнопка включения/выключения
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Включить автокликер';
    toggleButton.style.cssText = `
        padding: 8px 12px;
        background-color: #4CAF50;
        color: white;
        border: none;
        cursor: pointer;
        margin-bottom: 10px; /* Отступ снизу */
    `;
    controlPanel.appendChild(toggleButton);

    // Ссылки на TikTok и Telegram
    const tiktokLink = document.createElement('a');
    tiktokLink.href = 'https://www.tiktok.com/@gafurus';
    tiktokLink.target = '_blank';
    tiktokLink.textContent = '@gafurus';
    tiktokLink.style.cssText = `
        display: block;
        color: #1DA1F2;
        margin-bottom: 5px; /* Отступ снизу */
    `;
    controlPanel.appendChild(tiktokLink);

    const tgLink = document.createElement('a');
    tgLink.href = 'https://t.me/kittenwof';
    tgLink.target = '_blank';
    tgLink.textContent = '@kittenwof';
    tgLink.style.cssText = `
        display: block;
        color: #2CA5E0;
        margin-bottom: 10px; /* Отступ снизу */
    `;
    controlPanel.appendChild(tgLink);

    // Заголовок для раздела пожертвований
    const donationTitle = document.createElement('h4');
    donationTitle.textContent = 'Пожертвование';
    donationTitle.style.cssText = `
        color: white;
        margin-bottom: 5px;  /* Отступ снизу */
    `;
    controlPanel.appendChild(donationTitle);

    // Функция для создания элементов с адресами пожертвований
    function createDonationItem(coin, address) {
        const item = document.createElement('div');
        item.innerHTML = `
            <span style="color: #FFD700;">${coin}:</span>
            <span style="font-family: monospace;">${address}</span>
        `;
        item.style.cssText = `
            margin-bottom: 5px;  /* Отступ снизу */
        `;
        return item;
    }

    // Добавление элементов с адресами пожертвований
    controlPanel.appendChild(createDonationItem('TON', 'UQAC6zTt3t0oNjb51AQcrOazHEzFIHnOj8sOjLPO-GTtCyWl'));
    controlPanel.appendChild(createDonationItem('USDT (TRC20)', 'TXzLoiJHAnZc5tL2pyjNdXaF3snmwmg2x5'));
    controlPanel.appendChild(createDonationItem('USDT (TON)', 'UQAC6zTt3t0oNjb51AQcrOazHEzFIHnOj8sOjLPO-GTtCyWl'));
    controlPanel.appendChild(createDonationItem('NOTCOIN (TON)', 'UQAC6zTt3t0oNjb51AQcrOazHEzFIHnOj8sOjLPO-GTtCyWl'));
    controlPanel.appendChild(createDonationItem('BTC', '122j6k2GTz3roZsiX9H2QAyqec83tmsP6q'));

    // Добавляем controlPanel на страницу
    document.body.appendChild(controlPanel);

    async function clickSpinner() {
        try {
            let spinner = document.querySelector('div#spinner');
            if (spinner) {
                spinner.click();
                console.log("Tronix Auto Spinner: Спиннер кликнут!");
            } else {
                console.error("Tronix Auto Spinner: Спиннер не найден!");
            }
        } catch (error) {
            console.error("Tronix Auto Spinner: Ошибка в автокликере:", error);
        }
    }

    function startAutoClicker() {
        if (!intervalId) {
            intervalId = setInterval(clickSpinner, 5);
            console.log("Tronix Auto Spinner: Автокликер включен.");
        }
    }

    function stopAutoClicker() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
            console.log("Tronix Auto Spinner: Автокликер выключен.");
        }
    }

    toggleButton.addEventListener('click', () => {
        autoClickerEnabled = !autoClickerEnabled;
        toggleButton.textContent = autoClickerEnabled ? 'Выключить автокликер' : 'Включить автокликер';
        if (autoClickerEnabled) {
            startAutoClicker();
        } else {
            stopAutoClicker();
        }
    });
})();
