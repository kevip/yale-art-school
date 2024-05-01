# JokesApp

## Description
this project implements the redesign of a school of art.

![Home page](/src/assets/homescreen.png)

## Technologies
- Angular v17
- Angular material

## Prerequisites
- Node.js v18 or above.
- Angular CLI 17.

## Install
In order to run this project in a local environment, execute the following commands:

```bash
git clone https://github.com/kevip/yale-art-school.git
cd yale-art-school/frontend
npm install
npm run start
```

## Technical Guidelines

### Unit tests
Unit tests should be written with the AAA pattern(Arrange, Act, Assert).

Each test is unique and independent and only one "expect" per case should be written.

The structure of unit tests should have the following schema:

```js
describe('#<test case>', () => {
    it('should <unit test description>' () => {
      // Arrange
      ...
      // Act
      ...
      // Assert
      ...
    });
});
```

### Commits
Commits should have the following structure:
```bash
git commit -m "<type>: <description>"
```
Reference [here](https://www.conventionalcommits.org/en/v1.0.0/)
