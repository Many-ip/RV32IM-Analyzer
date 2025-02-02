/*
* Analiza el rendimiento de un programa ejecutado en un simulador de arquitectura RV32IM
* 
* @param Tciclo - Tiempo en nanosegudos (ns)
*/
function RV32IM_Analyzer(Tciclo) {
  
  let countInstrucciones = 0;
  let ciclosPerdidos = 0;
  let ciclosPerdidosTmp = 0;  
  let ciclosPerdidosControl = 0;  
  
  let tabla = document.getElementById("simplePipeTable");
  let filas = tabla.getElementsByTagName("tr"); 
  let columnas = filas[3].getElementsByTagName("td");
  let ciclosCPU = columnas.length-1;
  
  let instrucionesControl = ["beq", "bge", "j for", "nop","jal"];
   
  for (let i = 1; i < filas.length; i++) {
    let celdas = filas[i].getElementsByTagName("td");
    let primerTd = celdas[0].textContent.trim();  
    for (let j = 0; j < celdas.length; j++) {
      if (celdas[j].textContent === "-") {
        ciclosPerdidosTmp++;
      }
    }
    if (instrucionesControl.some(instruccion => primerTd.startsWith(instruccion)) && ciclosPerdidosTmp > 0) {
      ciclosPerdidosControl++;
    }
    ciclosPerdidos+=ciclosPerdidosTmp;
    ciclosPerdidosTmp=0;
  }
  
  countInstrucciones = filas.length - 3;
  
  let T_CPU=ciclosCPU*Tciclo 
  
  console.log("Cantidad de Ciclos:", ciclosCPU);
  console.log("Cantidad de instrucciones:", countInstrucciones);
  console.log("Cantidad de Ciclos Perdidos:", ciclosPerdidos);
  console.log("Cantidad de Ciclos Perdidos por riesgo de control:", ciclosPerdidosControl);
  console.log("Cantidad de Ciclos Perdidos por riesgo de datos:",(ciclosPerdidos- ciclosPerdidosControl));
  console.log("CPI = (ciclosCPU/N_intrucciones):",(ciclosCPU/countInstrucciones));
  console.log("TCPU = ciclosCPU*Tciclo:",(T_CPU));
  console.log("MIPS = N_instrucciones / ((TCPU * 10^-9) * 10^6) :", (countInstrucciones / (T_CPU * Math.pow(10, -9) * Math.pow(10, 6))));
  }
