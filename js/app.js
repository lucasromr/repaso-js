         console.log("Haupeí");

          
           let fruta = "manzana"; 
           console.log(typeof(fruta));
           let color = "lila"; 
           console.log(typeof(color));
           debugger;
           let animal = "gatito";
           console.log(typeof(animal));
           let nomegustaelpescado = false;
           console.log(typeof(nomegustaelpescado));
    
        
           let arreglo = [
               fruta,color,animal,nomegustaelpescado
           ];
           const noBasta = "Si basta, el vasto, con el pasto";
           //noBasta = "666669";
           console.log(arreglo);
           // length, muestra cantidad o elementos de un arreglo
           console.log(arreglo.length);
    
           // recorridos
           for(let i=0; i<arreglo.length; i++) {
               debugger; //para la ejecucion en esta linea
               console.log(arreglo[i]);
           }