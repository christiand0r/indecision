# SOBRE LAS PRUEBAS UNITARIAS

## Características

Las pruebas unitarias deben pooser ciertas caracteríscas al momento de plantearse

1. Fáciles de escribir
   Cuando hablamos de pruebas unitarias la lógica debe ser lo más **sencilla posible** con la finalidad de agilizar y entender como estamos tratando los datos

2. Fáciles de leer
   La lectura es algo primordial esto nos permitirá entender en donde falla nuestro código y si el fallo proviene de como escribimos nuestra prueba o de la lógica de lo que estamos probando

3. Confiables
   A este factor debemos de darle un matiz adicional la _flexibilidad_, nuestras pruebas deben ser capaces de reaccionar ante situaciones dinámicas, por ejemplo, si nuestra aplicación admite números y le pasamos una cadena o si solo admite números primos... debe ser capaz de responder sin ser rígida para evaluar estás situaciones

4. Rápidas
   Sencillamente que el resultado que se obtiene de una prueba unitaria debe ser al momento, es decir, si ejecutamos una prueba y obtenemos el resultado 1 hora después, probablemente algo debe estar mal

5. Principalmente **unitarias**
   Lo ideal es probar nuestros elementos por separados, es decir, siempre de forma unitaria. De esta forma reducimos el número de pruebas de integración, porque cada componente que conforma nuestra aplicación ya fue probado

## Concepto AAA

**(A)** rrange, **(A)** ct, **(A)** ssert, (Arreglar, Actuar, Afirmar) bajo este concepto deberán girar nuestras pruebas unitarias y de integración

- ### Arrange (Arreglar)

  Es este punto en donde empezamos arreglar el sujeto de pruebas, dicho sujeto es el componente, función, dato... que queremos observar para saber si se comporta como esperamos. Dentro de este apartado tambien podemos preparar un escenario/ambiente donde podemos, entre algunas cosas realizar:

  - Declaración variables
  - Creación de funciones
  - Importaciones

- ### Act (Actuar)

  En este apartado podemos realizar acciones o estímulos para observar a nuestro sujeto, estas acciones/estímulos pueden ser:

  - Hacer click
  - Llamar un método (función)
  - Realizar algún cambio sobre ese método

- ### Assert (Afirmar)
  En esta etapa observamos los resultamos y verificamos si son los esperados

## Ruta Crítica

La ruta crítica es el minimo indispensable de pruebas que debemos probar para saber si nuestro sujeto funciona adecuadamente
