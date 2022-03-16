### Hexlet tests and linter status:

[![Actions Status](https://github.com/Herman2201/backend-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/Herman2201/backend-project-lvl1/actions) <a href="https://codeclimate.com/github/Herman2201/backend-project-lvl1/maintainability"><img src="https://api.codeclimate.com/v1/badges/9304fa62804d89727877/maintainability" /></a> ![run-tests](https://github.com/afiskon/go-rest-service-example/workflows/run-tests/badge.svg)

### <center>Brain-games</center>

Everyone has logical thinking, but it is developed differently for everyone!)
With this game, you can test what you are capable of! :D

But first we need to install the game on our computer.

##### The game supports OS:

- Windows;
- Linux;
- MacOS.

### <center>Installation instructions</center>

1. The first step is to clone the repository.
    If you have MacOS, first open the terminal - command + space -> terminal and do everything as in the example below. If you have Windows, then first you need to install [git](https://git-scm.com/download/win), then open the console - Win + R -> cmd and do everything as in the example below. If you have Linux, open the terminal - Ctrl+Alt+T and do everything as in the example below. You can choose any place where you want to clone the repository (the main thing to remember is where 😁).
    Example in[asciinema](https://asciinema.org/a/tPV8kRUiAR0QIKDqh8NSeSy4p) or from below:

```
> cd Desktop
> git clone https://github.com/Herman2201/backend-project-lvl1
```
 If you don't want to clone, you can download [zip archive](https://github.com/Herman2201/backend-project-lvl1/archive/refs/heads/main.zip) repository and move it wherever you want (the main thing to remember is where 😁).
 ___

2. The second step is to install Node.js on your PC (if you have Windows, I advise you to install this [console](https://cmder.net)). To do this, go to the official site [Node.js](https://nodejs.org/en/download/) and download the latest stable version for your OS. Once installed, check if Node.js is installed on your OS using the check version command:
```
> node -v
```
___
3. After cloning the repository with the game on your computer, you need to go through the console (terminal) to the game directory and install the dependencies (make install) because without them, after that, publish the game packages locally (make publish) so that you can call the game in any time, after you need to link our game (npm link), so that when new changes come out, everything works. Example in [asciinema](https://asciinema.org/a/ttve5NxygFXvABe8Vwew1eBMG) or from below:

```
> cd /* ваш путь в директорию */
> cd backend-project-lvl1
> make install
> make publish
> npm link /* for MacOS(Linux) sudo npm link */
```
___
4. Well, in the end, you can safely play. :D Below is an example of games that can be played.😁 **But remember: in each game you have 3 attempts, one mistake and you fail, try)**

```
> brain-games
> brain-calc
> brain-even
> brain-gcd
> brain-prime
> brain-progression
```

___

### <center>Demonstration brain-games</center>

Here is a greeting with the user. :D

[![asciicast](https://asciinema.org/a/6iIFfNpgB6P9m1WMQt4CX69gS.svg)](https://asciinema.org/a/6iIFfNpgB6P9m1WMQt4CX69gS)
---

### <center>Demonstration игры brain-calc</center>

 In this game, you will need to solve a mathematical example, all numbers and mathematical operators will be random. Stay vigilant, there are operators in the game"+, -, *". :D

[![asciicast](https://asciinema.org/a/I7dlL1Sfb5zFN1IrQLtl5Thbm.svg)](https://asciinema.org/a/I7dlL1Sfb5zFN1IrQLtl5Thbm)
---

### <center>Demonstration brain-even</center>

In this game, you will need to answer whether this number is even or not. :D

[![asciicast](https://asciinema.org/a/ijVtU99TdDhzCTm3afkFlO3VV.svg)](https://asciinema.org/a/ijVtU99TdDhzCTm3afkFlO3VV)
---

### <center>Demonstration brain-gcd</center>

In this game, you need to answer the question "What is the greatest common multiple of two numbers", the numbers are taken randomly! :D

[![asciicast](https://asciinema.org/a/DsseFgOO6tplIkhbjsd0Gg0z5.svg)](https://asciinema.org/a/DsseFgOO6tplIkhbjsd0Gg0z5)
---

### <center>Demonstration brain-prime</center>

In this game, you need to answer the question "Is this a natural number?", the numbers are taken randomly! :D

[![asciicast](https://asciinema.org/a/4M55YVNtAMTLH9HE2xVGdM14n.svg)](https://asciinema.org/a/4M55YVNtAMTLH9HE2xVGdM14n)
---

### <center>Demonstration brain-progression</center>

In this game, you need to continue the geometric progression. Numbers, length, step progressing randomly! :D

[![asciicast](https://asciinema.org/a/hGNagvEOikqdUKSF54Nrkuv9Z.svg)](https://asciinema.org/a/hGNagvEOikqdUKSF54Nrkuv9Z)
---

### <center>Demonstration errore</center>

If you make one mistake, the game will immediately be over and you will have to start over. :,(

[![asciicast](https://asciinema.org/a/NrjNAKEXnptibKOIQu4BItpxd.svg)](https://asciinema.org/a/NrjNAKEXnptibKOIQu4BItpxd)
