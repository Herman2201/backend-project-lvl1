### Hexlet tests and linter status:

[![Actions Status](https://github.com/Herman2201/backend-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/Herman2201/backend-project-lvl1/actions) <a href="https://codeclimate.com/github/Herman2201/backend-project-lvl1/maintainability"><img src="https://api.codeclimate.com/v1/badges/9304fa62804d89727877/maintainability" /></a> ![run-tests](https://github.com/afiskon/go-rest-service-example/workflows/run-tests/badge.svg)

### <center>Brain-games</center>

Логическое мышление есть у каждого, но развито оно у всех по разному!)
С помощью этой игры, ты можешь проверить, на что ты способен! :D

Но для начала игру нам нужно установить на наш компьютер.

##### Игра поддерживает OС:

- Windows;
- Linux;
- MacOS.

### <center>Инструкция по установке</center>

1. Первый делом нужно склонировать репозиторий.
   Если у вас MacOS для начала откройте терминал - command + space -> terminal и сделайте все как в примере с низу. Если у вас Windows то для начала вам нужно установить [git](https://git-scm.com/download/win), после откройте консоль - Win + R -> cmd  и сделайте все как в примере с низу. Если у вас  Linux откройте terminal - Ctrl+Alt+T и сделайте все как в примере с низу. Вы можете выбрать любое место куда хотите склонировать репозиторий (главное запомните куда :)).
   Пример в [аскинеме](https://asciinema.org/a/tPV8kRUiAR0QIKDqh8NSeSy4p) или с низу:

```
> cd Desktop
> git clone https://github.com/Herman2201/backend-project-lvl1
```
 Если не хотите клонировать, можно скачать [zip архив](https://github.com/Herman2201/backend-project-lvl1/archive/refs/heads/main.zip) репозитория и переместите куда пожелаете (главное запомните куда :).
 ___

2. Вторым делом нужно установить Node.js на ваш пк (если у вас Windows советую установить эту [консоль](https://cmder.net)). Для этого нужно зайди на официальный сайта [Node.js](https://nodejs.org/en/download/) и скачать последнюю стабильную версию для вашей ОС. После установки проверьте установился Node.js на вашу ОС, с помощью команды:
```
> node -v
```
___
3. После такого как склонировали репозиторий с игрой себе на компьютер, нужно зайти через console/rerminal в директорию игры и установить зависимости(make install) ведь без них никуда, после, установить игру локально(make publish), чтоб можно было вызывать игру в любой момент, нужно прилинковать нашу игру(npm link) к вашей локальной директории. Пример в [аскинеме](https://asciinema.org/a/ttve5NxygFXvABe8Vwew1eBMG) или с низу:

```
> cd /* ваш путь в директорию */
> cd backend-project-lvl1
> make install
> make publish
> npm link /* для MacOS sudo npm link */
```
___
4. Ну и на конец можно спокойно играть. :D Ниже пример игр которые можно играть.:) **Но запомни: в каждой игре у тебя есть 3 попытки, одна ошибка и ты програл, постарайся)**

```
> brain-games
> brain-calc
> brain-even
> brain-gcd
> brain-prime
> brain-progression
```

___

### <center>Демонстрация brain-games</center>

Тут демострируется приветствие с пользователем. :)

[![asciicast](https://asciinema.org/a/6iIFfNpgB6P9m1WMQt4CX69gS.svg)](https://asciinema.org/a/6iIFfNpgB6P9m1WMQt4CX69gS)
---

### <center>Демонстрация игры brain-calc</center>

В этой игре нужно будет решить математический пример, все числа и математические символы будут рандомными. Не ослабляйте бдительность, в игре присутствуют  символы "+, -, \\".

[![asciicast](https://asciinema.org/a/I7dlL1Sfb5zFN1IrQLtl5Thbm.svg)](https://asciinema.org/a/I7dlL1Sfb5zFN1IrQLtl5Thbm)
---

### <center>Демонстрация brain-even</center>

В этой игре нужно будет написать четное это число, или нет.

[![asciicast](https://asciinema.org/a/ijVtU99TdDhzCTm3afkFlO3VV.svg)](https://asciinema.org/a/ijVtU99TdDhzCTm3afkFlO3VV)
---

### <center>Демонстрация brain-gcd</center>

В этой игре нужно написать найбольшее общее кратное двух чисел, числа берутся рандомно.

[![asciicast](https://asciinema.org/a/DsseFgOO6tplIkhbjsd0Gg0z5.svg)](https://asciinema.org/a/DsseFgOO6tplIkhbjsd0Gg0z5)
---

### <center>Демонстрация brain-prime</center>

В этой игре нужно написать натуральное число, или нет.

[![asciicast](https://asciinema.org/a/4M55YVNtAMTLH9HE2xVGdM14n.svg)](https://asciinema.org/a/4M55YVNtAMTLH9HE2xVGdM14n)
---

### <center>Демонстрация brain-progression</center>

В этой игре нужно продолжить геометрическую прогрессию. Числа, длина, шаг прогрессии рандомные.

[![asciicast](https://asciinema.org/a/hGNagvEOikqdUKSF54Nrkuv9Z.svg)](https://asciinema.org/a/hGNagvEOikqdUKSF54Nrkuv9Z)
---

### <center>Демонстрация ошибки</center>

Если ты допустишь одну ошибку, игра сразу будет окончена и придется начинать заного. :,(

[![asciicast](https://asciinema.org/a/NrjNAKEXnptibKOIQu4BItpxd.svg)](https://asciinema.org/a/NrjNAKEXnptibKOIQu4BItpxd)
