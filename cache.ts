/* Função fibonacci(n, cache): inteiro
    Se cache[n] ≠ vazio Então
        retorne cache[n]
    Se n <= 1 Então
        cache[n] ← n
        retorne n
    Senão
        cache[n] ← fibonacci(n - 1, cache) + fibonacci(n - 2, cache)
        retorne cache[n]
    Fim-se
Fim-função

Exemplo da pilha de execução:

1. fibonacci(6)
   ├─ fibonacci(5)
   │  ├─ fibonacci(4)
   │  │  ├─ fibonacci(3)
   │  │  │  ├─ fibonacci(2)
   │  │  │  │  ├─ fibonacci(1)  // Retorna 1, armazena cache[1] = 1
   │  │  │  │  └─ fibonacci(0)  // Retorna 0, armazena cache[0] = 0
   │  │  │  └─ fibonacci(1)      // Retorna 1 (já está no cache)
   │  │  └─ fibonacci(2)          // Retorna 1 (já está no cache)
   │  └─ fibonacci(3)              // Retorna 2 (já está no cache)
   └─ fibonacci(4)                  // Retorna 3 (já está no cache)

Fibonacci( 6 )
Fibonacci( 5 )
Fibonacci( 4 )
Fibonacci( 3 )
Fibonacci( 2 )
Fibonacci( 1 )
Fibonacci( 0 )
Fibonacci( 1 )
Fibonacci( 2 )
Fibonacci( 3 )
Fibonacci( 4 )

Complexidade espacial: O(n)
  */

function Fibonacci(n: number, cache: { [key: number]: number } = {}): number {
    console.log("Fibonacci(",n,")");
    if (n in cache) {            // Verifica se o valor já está no cache
        return cache[n];
    }
    if (n <= 1) {
        return n;
    }
    cache[n] = Fibonacci(n - 1, cache) + Fibonacci(n - 2, cache);
    return cache[n];
}

console.log(Fibonacci(6));
