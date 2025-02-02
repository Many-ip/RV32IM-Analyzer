# RV32IM-Analyzer

En este proyecto de GitHub se incluye una función en JavaScript para analizar el rendimiento de programas ejecutados en el simulador **RISC-V RV32IM**.

---

## Comenzando 🚀

Para utilizar esta función, es necesario ejecutar un programa en el simulador [WebRISC-V](https://webriscv.dii.unisi.it/index.php). La función analiza la tabla del pipeline generada por el simulador y calcula métricas clave de rendimiento.

---

## Pre-requisitos 📋

Se requiere:
* **Acceso al simulador WebRISC-V**: [https://webriscv.dii.unisi.it](https://webriscv.dii.unisi.it).
* **Conocimientos básicos de arquitectura RISC-V**.
* **Un navegador web con soporte para JavaScript** (por ejemplo, Google Chrome o Firefox).

---

## Instalación 🔧

No es necesario instalar software adicional. Solo sigue estos pasos:

1. Abre el simulador WebRISC-V, carga el programa (Load Program) y ejecuta todo (Execute ALL) en la arquitectura RV32IM.
2. Abrir la tabla de ejecucción (EXECUTION TABLE)
3. Copia y pega la función `RV32IM_Analyzer` en la consola del navegador.

---

## Funcionalidad 👨🏽‍💻

### `RV32IM_Analyzer(Tciclo)`

La función permite analizar el rendimiento del programa ejecutado en el simulador. A continuación, se detallan los pasos para usarla y los resultados que genera.

#### Parámetros:
- **`Tciclo`**: Tiempo de ciclo en nanosegundos (ns). Es un argumento obligatorio.

#### Ejemplo de uso:
```
RV32IM_Analyzer(2); // Tciclo = 2 ns
```

### Resultados:

Cuando se ejecuta la función, se mostrarán las métricas de rendimiento en la consola del navegador. Por ejemplo:

```
Cantidad de Ciclos: 307
Cantidad de instrucciones: 258
Cantidad de Ciclos Perdidos: 45
Cantidad de Ciclos Perdidos por riesgo de control: 21
Cantidad de Ciclos Perdidos por riesgo de datos: 24
CPI = (ciclosCPU/N_instrucciones): 1.18
TCPU = ciclosCPU*Tciclo: 614
MIPS = N_instrucciones / (TCPU *10^6) : 420.1954
```
