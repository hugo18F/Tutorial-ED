/***************************
* Autor: Equipo 3
* Estructuras Discretas
* 2025-1
****************************/

function valuap(respuest) {
    var reto;
    if (parseInt(respuest) == this.correcta) {
        // var reto;
        alert("Es correcta");
        reto = true;
        return reto;
    } else {
        alert("Es false");
        return reto;
    }
}

function pregunta(pregun, respuesta1, respuesta2, respuesta3, respuesta4, correcta) {
    this.pregun = pregun;
    this.respuestas = [];
    this.respuestas[0] = respuesta1;
    this.respuestas[1] = respuesta2;
    this.respuestas[2] = respuesta3;
    this.respuestas[3] = respuesta4;
    this.correcta = parseInt(correcta);
    this.ocupado = false;
    this.valuap = valuap;
}

var retorno = [];
var preguntas = [];

preguntas[0] = new pregunta("(1)¿Qué es CMMI-DEV?","A) Un modelo para la gestión de proyectos.","B) Un conjunto de pautas para el desarrollo de productos y servicios.","C) Un estándar para la programación.","D) Un marco exclusivo para la gestión financiera.", 1);
preguntas[1] = new pregunta("(2)¿Cuál es el propósito principal de CMMI-DEV?","A) Aumentar los costos de producción.","B) Mejorar los procesos de desarrollo para asegurar la calidad.","C) Facilitar la subcontratación de proyectos.","D) Crear sistemas de seguridad en software.", 1);
preguntas[2] = new pregunta("(3)¿Cuántas áreas de proceso centrales contiene CMMI-DEV?","A) 10","B) 16","C) 22","D) 5", 2);
preguntas[3] = new pregunta("(4)¿Cuál es el nivel de madurez en CMMI-DEV en el que los procesos son ad hoc y caóticos?","A) Inicial", "", "", "", 0);
preguntas[4] = new pregunta("(5)¿Qué nivel de madurez se enfoca en la mejora continua de procesos?","A) Inicial","B) Gestionado","C) Definido","D) En optimización", 3);
preguntas[5] = new pregunta("(6)¿Cuántos niveles de capacidad tiene la representación continua de CMMI-DEV?","A) 5","B) 3","C) 4","D) 6", 2);
preguntas[6] = new pregunta("(7)¿Qué área de proceso incluye la gestión de riesgos en CMMI-DEV?","A) Verificación","B) Planificación del proyecto","C) Gestión de proyectos","D) Validación", 1);
preguntas[7] = new pregunta("(8)¿Cuáles son los componentes requeridos del modelo CMMI-DEV?","A) Ejemplos y notas explicativas","B) Objetivos específicos y genéricos","C) Planificación de recursos","D) Pruebas unitarias", 1);
preguntas[8] = new pregunta("(9)¿Qué tipo de componentes ayudan a entender mejor los objetivos y prácticas de CMMI-DEV?","A) Informativos","B) Requeridos","C) Críticos","D) Directivos", 0);
preguntas[9] = new pregunta("(10)¿Por qué es importante el enfoque en procesos en CMMI-DEV?","A) Para eliminar la necesidad de planificación.","B) Para alinear las actividades con los objetivos de negocio.","C) Para aumentar la carga de trabajo.","D) Para reducir la calidad del producto.", 1);
preguntas[10] = new pregunta("(11)¿Cuál de los siguientes es un beneficio del CMMI-DEV?","A) Costos más altos de implementación.","B) Mejorar la calidad de los productos y servicios.","C) Retrasos en la entrega.","D) Procesos más rígidos.", 1);
preguntas[11] = new pregunta("(12)¿Qué caracteriza al nivel de madurez 'Gestionado cuantitativamente'?","A) Procesos no documentados.","B) Objetivos de calidad y rendimiento medidos y controlados.","C) Prácticas estandarizadas y definidas.","D) Mejora continua.", 1);
preguntas[12] = new pregunta("(13)¿Qué práctica se asocia con la verificación en CMMI-DEV?","A) Validar la solución con el cliente.","B) Revisar si el producto cumple con los requisitos.","C) Monitorear el rendimiento del proyecto.","D) Planear las actividades de desarrollo.", 1);
preguntas[13] = new pregunta("(14)¿Qué autor es conocido por haber contribuido al desarrollo del CMMI?","A) William Humphrey","B) Alan Turing","C) Linus Torvalds","D) Tim Berners-Lee", 0);
preguntas[14] = new pregunta("(15)¿Qué documento es clave para entender la versión inicial del CMM?","A) Managing the Software Process de Humphrey","B) The Art of Computer Programming de Knuth","C) CMM v1.0 de SEI","D) CMMI for Services de Phillips", 0);
preguntas[15] = new pregunta("(16)¿Qué ventaja tiene la certificación CMMI-DEV para una empresa?","A) Mayor previsibilidad de los proyectos.","B) Reducción de la calidad de los productos.","C) Incremento de costos de operación.","D) Complejidad en los procesos.", 0);
preguntas[16] = new pregunta("(17)¿Cuál de las siguientes es una característica del nivel de madurez 'Definido'?","A) Los procesos son ad hoc.","B) Prácticas estandarizadas y documentadas en toda la organización.","C) Se enfoca solo en una persona del equipo.","D) No se mide la calidad.", 1);
preguntas[17] = new pregunta("(18)¿Qué versión del CMMI se lanzó en 2018?","A) CMMI v1.2","B) CMMI v1.0","C) CMMI v2.0","D) CMM v1.1", 2);
preguntas[18] = new pregunta("(19)¿Qué actualización introdujo CMMI-DEV v2.0?","A) Un enfoque basado en la programación.","B) Mayor flexibilidad y adaptación a metodologías ágiles.","C) Reducción de prácticas de gestión.","D) Enfoque en el hardware exclusivamente.", 1);
preguntas[19] = new pregunta("(20)¿Qué área de proceso abarca la definición y gestión de requisitos?","A) Planificación del proyecto","B) Ingeniería de desarrollo","C) Gestión de Requisitos","D) Gestión de riesgos", 2);
preguntas[20] = new pregunta("(21)¿Qué se incluye en el área de 'Gestión de procesos' de CMMI-DEV?","A) Validación de producto","B) Definición e implementación de procesos organizacionales","C) Soporte técnico de equipos","D) Monitoreo de redes", 1);
preguntas[21] = new pregunta("(22)¿Quién describe el CMMI como un marco para prácticas de mejora continua y gestión de riesgos?","A) Fernando Casafranca","B) Jim McDonald","C) Michael Phillips","D) Mark C. Paulk", 3);
preguntas[22] = new pregunta("(23)¿Cuál es una desventaja de implementar CMMI-DEV?","A) Mejora la planificación y control.","B) Es costoso y requiere tiempo.","C) Aumenta la competitividad.","D) Incrementa la satisfacción del cliente.", 1);
preguntas[23] = new pregunta("(24)¿Qué modelo de CMMI se enfoca en la cadena de suministro y la contratación externa?","A) CMMI-DEV","B) CMMI-SVC","C) CMMI-ACQ","D) CMMI-IPPD", 2);
preguntas[24] = new pregunta("(25)¿Cómo se describe la 'Gestión del Proyecto' en CMMI-DEV?","A) Monitorear y controlar el desempeño en comparación con los planes.","B) Crear código sin supervisión.","C) Implementar hardware.","D) Desarrollar productos sin planificar.", 0);
preguntas[25] = new pregunta("(26)¿Qué práctica se promueve para evaluar el rendimiento en CMMI-DEV?","A) Uso de opiniones personales.","B) Técnicas cuantitativas basadas en datos.","C) Evaluación visual sin métricas.","D) Aplicación de opiniones de clientes sin análisis.", 1);
preguntas[26] = new pregunta("(27)¿Qué representa un desafío en la implementación de CMMI-DEV?","A) Mejoras en el ambiente laboral.","B) Alineación de todos los miembros del equipo.","C) Reducción de errores en productos.","D) Integración rápida sin cambios.", 1);
preguntas[27] = new pregunta("(28)¿Cuál es una característica clave de CMMI-DEV v2.0?","A) Eliminar procesos estandarizados.","B) Enfoque en resultados y métricas.","C) Reducir la adaptación a contextos ágiles.","D) Descartar la gestión de requisitos.", 1);
preguntas[28] = new pregunta("(29)¿Qué ventaja se logra con la certificación CMMI-DEV?","A) Aumento de desorganización.","B) Incremento de desperdicio de recursos.","C) Mayor confianza de nuevos clientes.","D) Disminución en la satisfacción del cliente.", 2);
preguntas[29] = new pregunta("(30)¿Qué paso es necesario en el proceso de certificación CMMI?","A) No requiere planificación.","B) Implementar un plan de trabajo y análisis de fortalezas.","C) Solo necesita entrevistas.","D) Realizar la certificación sin evaluación.", 1);
preguntas[30] = new pregunta("(31)¿Qué significa la sigla IPPD?","A) Proceso Internacional de Desarrollo de Productos","B) Proceso Integrado de Desarrollo de Productos","C) Programa de Innovación y Producción Detallada","D) Proyecto Interno de Diseño de Productos", 1);
preguntas[31] = new pregunta("(32)¿Cuál es el objetivo principal del IPPD?","A) Aumentar los tiempos de desarrollo","B) Optimizar costos y elevar la calidad del producto","C) Trabajar de forma aislada en cada etapa","D) Reducir la colaboración entre equipos", 1);
preguntas[32] = new pregunta("(33)¿Qué etapa del IPPD involucra la generación de ideas y el análisis de viabilidad?","A) Diseño y desarrollo","B) Conceptualización","C) Producción","D) Pruebas y evaluación", 1);
preguntas[33] = new pregunta("(34)¿Por qué es importante la participación de diferentes equipos en la fase de conceptualización?","A) Para reducir la comunicación entre equipos","B) Para enriquecer el proyecto con diferentes perspectivas","C) Para aumentar los costos","D) Para retrasar el proceso de diseño", 1);
preguntas[34] = new pregunta("(35)¿Qué se realiza en la etapa de diseño y desarrollo?","A) Creación de prototipos y pruebas iniciales","B) Producción en masa","C) Lanzamiento al mercado","D) Análisis de ventas", 0);
preguntas[35] = new pregunta("(36)¿Qué consejo es clave durante la etapa de pruebas y evaluación?","A) No involucrar al usuario en las pruebas","B) Involucrar al usuario para obtener retroalimentación temprana","C) Realizar pruebas sin tener en cuenta la calidad","D) Pasar directamente a la producción sin pruebas", 1);
preguntas[36] = new pregunta("(37)¿Qué fase sigue a las pruebas y evaluación?","A) Conceptualización","B) Diseño y desarrollo","C) Producción","D) Marketing", 2);
preguntas[37] = new pregunta("(38)¿Cuál es un objetivo clave durante la etapa de producción en el IPPD?","A) Aumentar los costos de fabricación","B) Optimizar procesos para reducir costos y mejorar la calidad","C) Realizar más prototipos","D) Minimizar la colaboración entre equipos", 1);
preguntas[38] = new pregunta("(39)¿Qué es esencial hacer durante el lanzamiento y monitoreo?","A) Dejar de hacer seguimiento al producto","B) Monitorear el rendimiento y la satisfacción del cliente","C) Ignorar la retroalimentación de los usuarios","D) Focalizarse solo en el marketing", 1);
preguntas[39] = new pregunta("(40)¿Cuál es el rol del equipo de marketing en el IPPD?","A) Ayudar a entender al cliente y posicionar el producto","B) Solo participar en el diseño del producto","C) Monitorear la producción","D) Participar únicamente en la etapa de pruebas", 0);
preguntas[40] = new pregunta("(41)¿Qué herramienta es clave para el diseño de prototipos en el IPPD?","A) Herramientas manuales","B) Diseño asistido por computadora (CAD)","C) Métodos de almacenamiento de datos físicos","D) Software de contabilidad", 1);
preguntas[41] = new pregunta("(42)¿Qué permite la metodología ágil dentro del IPPD?","A) Limitar la interacción entre equipos","B) Adaptarse rápidamente a los cambios","C) Aumentar los tiempos de producción","D) Ignorar la retroalimentación del cliente", 1);
preguntas[42] = new pregunta("(43)¿En qué etapa se realizan pruebas exhaustivas para cumplir con los estándares de calidad?","A) Producción","B) Conceptualización","C) Diseño y desarrollo","D) Pruebas y evaluación", 3);
preguntas[43] = new pregunta("(44)¿Qué se debe hacer con la retroalimentación del cliente después del lanzamiento del producto?","A) Ignorarla","B) Utilizarla para futuras mejoras","C) Usarla solo para marketing","D) Dejar de recoger datos de retroalimentación", 1);
preguntas[44] = new pregunta("(45)¿Cuál es un beneficio importante del IPPD?","A) Aumentar los costos de producción","B) Reducir tiempos de desarrollo","C) Limitar la colaboración entre áreas","D) Producir más prototipos sin pruebas", 1);
preguntas[45] = new pregunta("(46)¿Qué etapa del IPPD se encarga de la fabricación en serie del producto?","A) Diseño y desarrollo","B) Pruebas y evaluación","C) Producción","D) Conceptualización", 2);
preguntas[46] = new pregunta("(47)¿Cuáles un elemento clave en la fase de pruebas y evaluación?","A) No hacer pruebas en condiciones reales","B) Probar el producto para asegurarse de que cumpla con los requisitos del cliente","C) Dejar que los equipos trabajen de forma aislada","D) Lanzar el producto sin pruebas", 1);
preguntas[47] = new pregunta("(48)¿Qué se debe considerar al seleccionar herramientas para el IPPD?","A) Herramientas que limiten la colaboración","B) Herramientas que mejor se adapten al proyecto","C) Herramientas exclusivamente manuales","D) Solo herramientas de almacenamiento de datos", 1);
preguntas[48] = new pregunta("(49)¿Qué consejo se da para implementar el IPPD en una empresa?","A) Ignorar la colaboración entre equipos","B) Asegurar que los equipos colaboren desde el principio","C) Centrarse solo en la etapa de producción","D) Limitar la revisión de costos", 1);
preguntas[49] = new pregunta("(50)¿Cómo se describe la etapa final de monitoreo del IPPD?","A) No se realiza seguimiento al producto","B) Se realiza un seguimiento del rendimiento y se recoge retroalimentación","C) Se deja de recibir comentarios","D) Se reevalúa la fase de diseño sin cambios", 1);