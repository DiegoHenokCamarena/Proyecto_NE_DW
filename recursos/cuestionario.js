      function incisos(numeritoAleatorio) {
      var posibilidades = "";
      for( var i = 0; i < arregloDeRespuestas[numeritoAleatorio].length; i ++){
        posibilidades += '<input type="radio" name = "preguntitas'+numeritoAleatorio+'" value= "'+i+'"><label>'+ arregloDeRespuestas[numeritoAleatorio][i] + '</label><br>';
      }
      return posibilidades;
    }

    var arregloDePreguntas = [
    'Determina si 5≡10(mod2) es una congruencia', 'Determina si 5≡10(mod6) es una congruencia', 'Determina si 40≡20(mod2) es una congruencia', 'Determina si 7≡21(mod8) es una congruencia', 'Determina si 10≡1(mod3) es una congruencia', 'Determina si 100≡2(mod3) es una congruencia', 'Determina si 35≡17(mod4) es una congruencia', 'Determina si 21≡2(mod7) es una congruencia', 'Determina si 30≡29(mod10) es una congruencia', 'Determina si 41≡15(mod6) es una congruencia',
    'Es la solución general de 4x≡7(mod5)','Es la solución general de 6x≡3(mod4)','Es una solución general de 4x≡2(mod6)','Es la solución de x-6≡32(mod9)','Es la solución de 3x≡12(mod5)','Es la solución de 10x≡30(mod7)','Es la solución de 2x≡16(mod9)','18. Es una solución de 6x≡18(mod21)','Es una solución de 6x≡18(mod21)','Es una solución de 6x≡18(mod21)',
    'Es la solución general de 3x≡7(mod30)','Es la solución general de 2x≡5(mod2)','Es una solución general de 4x≡2(mod6)','Es una solución de 10x≡80(mod45)','Es una solución de 10x≡80(mod45)','Es una solución de 10x≡80(mod45)','Es una solución de 10x≡80(mod45)','Es una solución de 10x≡80(mod45)','Una relación R sobre un conjunto A es simétrica si:','Una relación R sobre un conjunto A es reflexiva si:',
    'Una relación R sobre un conjunto A es transitiva si:','Sea N=50 y K=7315, obtén su dirección mediante función Hash por módulo','Sea N=80 y K=10000, obtén su dirección mediante función Hash por módulo','Sea N=100 y K=57303, obtén su dirección mediante función Hash por módulo','Sea N=100 y K=6149, obtén su dirección mediante función Hash cuadrada','Sea N=100 y K=6669, obtén su dirección mediante función Hash cuadrada','Sea N=100 y K=3791, obtén su dirección mediante función Hash cuadrada','Sea N=100 y K=4142, obtén su dirección mediante función Hash por plegamiento, tomando partes de dos dígitos cada una','Sea N=100 y K=6116, obtén su dirección mediante función Hash por plegamiento, tomando partes de dos dígitos cada una','Sea N=100 y K=9111, obtén su dirección mediante función Hash por plegamiento, tomando partes de dos dígitos cada una',
    '"a≡b(mod m) si y sólo si a y b dejan el mismo residuo cuando son divididos entre m"','"Si a≡b(mod m), entonces b≡a(mod m)"','Si a≡b(mod m) y b≡c(mod m), entonces a≡c(mod m)','Sea A={2,3,5}, B={2,4,9,20}, x∈A, y∈B, determina el conjunto de la relación yRx "y es múltiplo de x"','Sea A={2,3,5}, B={2,4,9,20}, x∈A, y∈B, determina el conjunto inverso (R^-1) de la relación yRx "y es múltiplo de x"','Sea A={1,5,9,22}, B={0,3,100}, x∈A, y∈B, determina el conjunto de la relación xRy "x es mayor que y"','Sea A={1,5,9,22}, B={0,3,100}, x∈A, y∈B, determina el conjunto inverso (R^-1) de la relación  xRy "x es mayor que y"','Sea A={2,3,4}, B={3,4,5,6,7}, (x,y)∈R. Encontrar el conjunto R tal que xRy se define como "x divide a y"','Sea A={2,3,4}, B={3,4,5,6,7}, (x,y)∈R. Encontrar el conjunto inverso (R^-1) tal que xRy se define como "x divide a y"'];

    var arregloDeRespuestas = [
    ['No, pues los residuos son distintos.', 'Sí, pues ambos residuos son 4', 'Sí, pues ambos residuos son 1', 'No, pues a-b no es entero'],['No, pues los residuos son distintos.', 'Sí, pues ambos residuos son 5', 'Sí, pues ambos residuos son -3', 'No, pues a-b es entero'],['No, pues los residuos son distintos.', 'Sí, pues ambos residuos son 0', 'Sí, pues ambos residuos son 1', 'No, pues a-b no es entero'],['No, pues los residuos son distintos.', 'Sí, pues ambos residuos son 9', 'Sí, pues ambos residuos son 0', 'No, pues a-b es entero'],['No, pues los residuos son distintos.', 'Sí, pues ambos residuos son 0', 'Sí, pues ambos residuos son 1', 'No, pues a-b no es entero'],
    ['No, pues los residuos son distintos.', 'Sí, pues ambos residuos son -2', 'Sí, pues ambos residuos son -1', 'No, pues a-b no es entero'],['No, pues los residuos son distintos.', 'Sí, pues ambos residuos son 50', 'Sí, pues ambos residuos son 21', 'No, pues a-b no es entero'],['No, pues los residuos son distintos.', 'Sí, pues ambos residuos son 4', 'Sí, pues ambos residuos son 1', 'No, pues a-b no es entero'],['No, pues los residuos son distintos.', 'Sí, pues ambos residuos son 4', 'Sí, pues ambos residuos son 1', 'No, pues a-b no es entero'],['No, pues los residuos son distintos.', 'Sí, pues ambos residuos son 4', 'Sí, pues ambos residuos son 1', 'No, pues a-b no es entero'],
    ['x=1+3t, t∈Z','x=5t, t∈Z','No tiene solución','x=3+5t, t∈Z'],['x=1+3t, t∈Z','x=5t, t∈Z','No tiene solución','x=3+5t, t∈Z'],['x=10+2t, t∈Z','x=5t+20, t∈Z','No tiene solución','x=2+6t, t∈Z'],['x≡32(mod9)','x≡21(mod9)','No tiene solución','x≡47(mod9)'],['x≡32(mod5)','x≡21(mod5)','No tiene solución','x≡4(mod5)'],['x≡32(mod7)','x≡21(mod7)','No tiene solución','x≡3(mod7)'],['x≡2(mod9)','x≡42(mod9)','No tiene solución','x≡8(mod9)'],['x≡32(mod21)','x≡21(mod21)','No tiene solución','x≡3(mod21)'],['x≡22(mod21)','x≡31(mod21)','No tiene solución','x≡10(mod21)'],['x≡2(mod21)','x≡16(mod21)','No tiene solución','x≡17(mod21)'],
    ['x=1+3t, t∈Z','x=5t, t∈Z','No tiene solución','x=3+5t, t∈Z'],['x=1+3t, t∈Z','x=5t, t∈Z','No tiene solución','x=3+5t, t∈Z'],['x=10+2t, t∈Z','x=5t+20, t∈Z','No tiene solución','x=5+6t, t∈Z'],['x≡8(mod45)','x≡21(mod45)','No tiene solución','x≡47(mod45)'],['x≡15(mod45)','x≡11(mod45)','No tiene solución','x≡47(mod45)'],['x≡22(mod45)','x≡1(mod45)','No tiene solución','x≡5(mod45)'],['x≡29(mod45)','x≡3(mod45)','No tiene solución','x≡0(mod45)'],['x≡36(mod45)','x≡27(mod45)','No tiene solución','x≡37(mod45)'],['∀ x,y ∈ A & (x,y) ∈ R, entonces (y,x) ∈ R','Es congruente','Tiene inversa','(x,x) ∈ R, ∀ x ∈ A'],['Es una congruencia','(x,x) ∈ R, ∀ x ∈ A','Su inversa es el conjunto vacío','∀ x,y ∈ A & (x,y) ∈ R, entonces (y,x) ∈ R'],
    ['Es un conjunto vacío','Su inversa tiene los mismos elementos','(x,x) ∈ R, ∀ x ∈ A','∀ x,y,z ∈ A, si (x,y) ∈ R, entonces (x,z) ∈ R'],['23','15','75','8'],['11','0','9','39'],['22','3','6','90'],['12','13','11','14'],['67','34','76','88'],['77','87','72','78'],['83','20','86','84'],['67','23','56','78'],['9','1','2','3'],
    ['Propiedad reflexiva','Propiedad simétrica','Propiedad transitiva','Propiedad intransitiva'],['Propiedad reflexiva','Propiedad simétrica','Propiedad transitiva','Propiedad intransitiva'],['Propiedad reflexiva','Propiedad simétrica','Propiedad transitiva','Propiedad intransitiva'],['R={(2,2),(4,2),(20,2),(9,3),(20,5)}','R={(2,2),(42,2),(50,2),(9,4),(2,5)}','R={(2,5),(4,6),(20,7),(89,35),(44,5)}','R={}'],['R^-1={(2,2),(2,4),(2,20),(3,9),(5,20)}','R^-1={(2,2),(42,2),(50,2),(9,4),(2,5)}','R^-1={(2,5),(4,6),(20,7),(89,35),(44,5)}','R^-1={}'],['R={(1,0),(5,0),(5,3),(9,0),(9,3),(22,0),(22,3)}','R={(2,2),(42,2),(50,2),(9,4),(2,5)}','R={(2,5),(4,6),(20,7),(89,35),(44,5)}','R={}'],['R^-1={(0,1),(0,5),(3,5),(0,9),(3,9),(0,22),(3,22)}','R^-1={(2,2),(42,2),(50,2),(9,4),(2,5)}','R^-1={(2,5),(4,6),(20,7),(89,35),(44,5)}','R^-1={}'],['R={(2,4),(6,2),(3,3),(6,3),(4,4)}','R={(2,2),(42,2),(50,2),(9,4),(2,5)}','R={(2,5),(4,6),(20,7),(89,35),(44,5)}','R={}'],['R^-1={(4,2),(2,6),(3,3),(3,6),(4,4)}','R^-1={(2,2),(42,2),(50,2),(9,4),(2,5)}','R^-1={(2,5),(4,6),(20,7),(89,35),(44,5)}','R^-1={}']];

    var arregloDeIncisosRespuestasCorrectas= ['0', '0', '1', '0', '2','0', '0', '0', '0', '0','3','2','3','3','3','3','3','3','3','3','2','2','3','0','0','0','0','0','0','1','3','1','1','1','2','2','2','3','3','3','0','1','2','0','0','0','0','0','0'];

    /*Validación de preguntas aleatorias no repetidas*/
    var cantidadNumeros = arregloDePreguntas.length;
    var arregloDeAleatorios = []
    while(arregloDeAleatorios.length < cantidadNumeros ){
      var numeroAleatorio = Math.floor(Math.random()*cantidadNumeros);
      var existe = false;
      for(var i=0;i<arregloDeAleatorios.length;i++){
        if(arregloDeAleatorios [i] == numeroAleatorio){
          existe = true;
          break;
        }
      }
      if(!existe){
        arregloDeAleatorios[arregloDeAleatorios.length] = numeroAleatorio;
      }

    }

    var aleatorio1 = arregloDeAleatorios[0];
    var aleatorio2 = arregloDeAleatorios[1];
    var aleatorio3 = arregloDeAleatorios[2];
    var aleatorio4 = arregloDeAleatorios[3];
    var aleatorio5 = arregloDeAleatorios[4];
    var aleatorio6 = arregloDeAleatorios[5];
    var aleatorio7 = arregloDeAleatorios[6];
    var aleatorio8 = arregloDeAleatorios[7];
    var aleatorio9 = arregloDeAleatorios[8];
    var aleatorio10 = arregloDeAleatorios[9];

    document.getElementById('pregunta1').innerHTML = arregloDePreguntas[aleatorio1];
    document.getElementById('respuestas1').innerHTML = incisos(aleatorio1);

    document.getElementById('pregunta2').innerHTML = arregloDePreguntas[aleatorio2];
    document.getElementById('respuestas2').innerHTML = incisos(aleatorio2);

    document.getElementById('pregunta3').innerHTML = arregloDePreguntas[aleatorio3];
    document.getElementById('respuestas3').innerHTML = incisos(aleatorio3);

    document.getElementById('pregunta4').innerHTML = arregloDePreguntas[aleatorio4];
    document.getElementById('respuestas4').innerHTML = incisos(aleatorio4);

    document.getElementById('pregunta5').innerHTML = arregloDePreguntas[aleatorio5];
    document.getElementById('respuestas5').innerHTML = incisos(aleatorio5);

    document.getElementById('pregunta6').innerHTML = arregloDePreguntas[aleatorio6];
    document.getElementById('respuestas6').innerHTML = incisos(aleatorio6);

    document.getElementById('pregunta7').innerHTML = arregloDePreguntas[aleatorio7];
    document.getElementById('respuestas7').innerHTML = incisos(aleatorio7);

    document.getElementById('pregunta8').innerHTML = arregloDePreguntas[aleatorio8];
    document.getElementById('respuestas8').innerHTML = incisos(aleatorio8);

    document.getElementById('pregunta9').innerHTML = arregloDePreguntas[aleatorio9];
    document.getElementById('respuestas9').innerHTML = incisos(aleatorio9);

    document.getElementById('pregunta10').innerHTML = arregloDePreguntas[aleatorio10];
    document.getElementById('respuestas10').innerHTML = incisos(aleatorio10);

    var correctas = 0;

    function calificacion(arregloAleatorios){
      for (var i = 0; i < arregloAleatorios.length; i++) {
        var respuesta = $("input[name=preguntitas"+arregloAleatorios[i]+"]:checked").val();
        if (respuesta == arregloDeIncisosRespuestasCorrectas[arregloAleatorios[i]]){
          correctas++;
        }
      }
      //alert("Tucalificacion es:"+correctas);
      document.getElementById("calif").innerHTML = "Tu calificación es: "+ correctas;
      correctas =0 ;
    }

    function comprobar(){
      calificacion(arregloDeAleatorios);
    }
