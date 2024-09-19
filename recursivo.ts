/* Função fibonacci(n): inteiro
    Se n <= 1 Então
        retorne n
    Senão
        retorne fibonacci(n - 1) + fibonacci(n - 2)
    Fim-se
Fim-função


Complexidade espacial: (O(2^n)

Pilha de execução:
fibonacci(6)
   ├─ fibonacci(5)
   │  ├─ fibonacci(4)
   │  │  ├─ fibonacci(3)
   │  │  │  ├─ fibonacci(2)
   │  │  │  │  ├─ fibonacci(1)  // Retorna 1
   │  │  │  │  └─ fibonacci(0)  // Retorna 0
   │  │  │  └─ fibonacci(1)      // Retorna 1
   │  │  └─ fibonacci(2)
   │  │     ├─ fibonacci(1)      // Retorna 1
   │  │     └─ fibonacci(0)      // Retorna 0
   │  └─ fibonacci(3)
   │     ├─ fibonacci(2)
   │     │  ├─ fibonacci(1)      // Retorna 1
   │     │  └─ fibonacci(0)      // Retorna 0
   │     └─ fibonacci(1)        // Retorna 1
   └─ fibonacci(4)
      ├─ fibonacci(3)
      │  ├─ fibonacci(2)
      │  │  ├─ fibonacci(1)      // Retorna 1
      │  │  └─ fibonacci(0)      // Retorna 0
      │  └─ fibonacci(1)        // Retorna 1
      └─ fibonacci(2)
         ├─ fibonacci(1)        // Retorna 1
         └─ fibonacci(0)        // Retorna 0

Fibonacci( 6 )
Fibonacci( 5 )
Fibonacci( 4 )
Fibonacci( 3 )
Fibonacci( 2 )
Fibonacci( 1 )
Fibonacci( 0 )
Fibonacci( 1 )
Fibonacci( 2 )
Fibonacci( 1 )
Fibonacci( 0 )
Fibonacci( 3 )
Fibonacci( 2 )
Fibonacci( 1 )
Fibonacci( 0 )
Fibonacci( 1 )
Fibonacci( 4 )
Fibonacci( 3 )
Fibonacci( 2 )
Fibonacci( 1 )
Fibonacci( 0 )
Fibonacci( 1 )
Fibonacci( 2 )
Fibonacci( 1 )
Fibonacci( 0 )
 */


function Fibonacci(n: number): number {
    console.log("Fibonacci(",n,")");
    if (n <= 1) {
        return n;
    }
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}

console.log("\n", Fibonacci(6));

