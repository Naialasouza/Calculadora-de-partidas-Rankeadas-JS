# Calculadora-de-partidas-Rankeadas-JS

# 🏆 Calculadora de Partidas Rankeadas - JavaScript

Este projeto foi desenvolvido em **JavaScript** com o objetivo de calcular o saldo de vitórias e derrotas de um jogador e, a partir desse resultado, definir seu nível.

## 📌 Como funciona

O programa recebe o nome do jogador, a quantidade de vitórias e derrotas. Em seguida, calcula o saldo através da seguinte fórmula:

```text
saldo = vitórias - derrotas
```

Depois, o resultado é utilizado para definir o nível do jogador:

| Saldo de vitórias | Nível    |
| ----------------- | -------- |
| Menor que 10      | Ferro    |
| 11 a 20           | Bronze   |
| 21 a 50           | Prata    |
| 51 a 80           | Ouro     |
| 81 a 90           | Diamante |
| 91 a 100          | Lendário |
| 101 ou mais       | Imortal  |

## 🧠 Funções utilizadas

O projeto possui duas funções:

**`getFirstName()`**
Utilizada para obter apenas o primeiro nome do jogador.

**`cal()`**
Responsável por calcular o saldo entre vitórias e derrotas.

```javascript
function cal(vitoria, derrota) {
    let resultado = vitoria - derrota
    return resultado
}
```

## 💻 Tecnologias utilizadas

* JavaScript
* Node.js

## 📚 Conceitos praticados

Neste projeto foram praticados conceitos básicos de lógica de programação, como:

* Variáveis
* Funções
* Parâmetros e retorno
* Operações matemáticas
* Estruturas condicionais `if` e `else if`
* `split()`
* `console.log()`

## 🚀 Exemplo

Com **200 vitórias** e **0 derrotas**:

```text
Saldo: 200
Nível: Imortal
```

O resultado é exibido diretamente no console com o nome do jogador, suas vitórias, derrotas e seu nível.

---

**Desenvolvido por Naiala Souza 💜**
