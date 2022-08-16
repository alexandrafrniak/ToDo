# Your TO-DO

Aplikácia na zobrazovanie / vytváranie To-Do listov, a zaznamenávanie pokrokov pri ich vykonávaní.

## Spustenie

`npm start` na http://localhost:3000

## Využité technológie

- framework React
- TypeScript
- React router
- Axios
- MaterialUI
- Formik (+yup)
- mockapi.io

## Funkcionalita

1. Zobrazenie hlavnej obrazovky so zoznamom To-Do listov a možnosťou pridať ďalší.

- Každý záznam (riadok zoznamu) obsahuje jeho názov, stav riešenia (in progress/done) a možnosť vymazať záznam. Po kliknutí na záznam sa používateľovi otvorí detail záznamu.
- Tlačidlo na pridanie nového záznamu. Po stlačení je používateľ presmerovaný na tvorbu nového To-Do listu.

2. Edit/tvorba nového záznamu

- Vrchná časť obrazovky obsahuje pole na pridanie/úpravu názvu záznamu. Ten je povinný (kontrola cez yup). Ďalej obsahuje pole na vyhľadávanie itemov vrámci To-Do listu.
- Zoznam s itemami. Jeden item obsahuje checkbox (finished/todo), názov itemu, dokedy má byť dokončený, vymazať item.
- Po stlačení šípky pri názve itemu sa otvorí časť kam je možné pridať ďalšie detaily.
- Tlačidlo na pridanie nového itemu.
- Tlačidlo na uloženie zmien (návrat na hlavnú obrazovku).

## Výzvy

- práca s mockapi/material ui, nakoľko som s nimi doteraz nepacovala. Filtrovanie som nakoniec neimplementovala. Veľa času som strávila na search, nakoľko sa mi nepodarilo využiť nástroje ako "material-ui-search-bar". Na tomto zadaní som pracovala asi 3 dni (programovanie+návrh prostredia) + nejaký časť na oboznámenie sa s technológiami.
