export const information = {
    title: "Escape de Prisioneros",
    subtitle: "Quien deje escapar menos presos será el ganador!",
    goal: "Evitar que se escapen los prisioneros cerrando la mayor cantidad de celdas posibles. Cada celda indica la cantidad de prisioneros que serian libres en caso de no cerrarla.",
    rules: [
        "Para comenzar cada jugador arrojará los datos, el que más puntos obtenga iniciará la partida.",
        "Al jugador se le presentaran las celdas abiertas, y es su objetivo cerrarlas.",
        "Gire los dados, la suma de numeros indicará la cantidad de prisioneros a encerrar.",
        "Es su objetivo seleccionar de las posibles opciones la que considere conveniente.",
        "Se podra cerrar las celdas que coincidan con el puntaje obtenido: puede cerrar una por el valor total, o 2 combinando los numeros de las celdas."
    ],
    example: "Si obtiene 5 de puntaje, puede cerrar la celda (5), o bien una combinación como celda (2) + celda (3)",
    disclaimers: [
        "Solo se podra cerrar 1 o 2 celdas por tirada de dados.",
        "Una vez confirmadas las celdas a cerrarse, no pueden volver a abrirse",
        "El juego continuara hasta acabarse las posibilidades, es decir, hasta que el puntaje no coincida con los números de las celdas abiertas y no pueda cerrrar ninguna."
    ],
    winner: [
        "Los valores de las celdas que no se han podido cerrar son considerados los prisioneros escapados y seran asignados al jugador. En caso de haber cerrado todas sus celdas en el turno se le        restara 10 puntos de su anotación si la tuviera.",
        "Los jugadores que lleguen a 100 puntos o más saldrán del juego.",
        "El juego termina cuando queda un solo jugador al final de una ronda, y éste será el ganador."
    ]
}