import { pedirCarta, valorCarta, crearCartaHTML } from "./";



/**
 // turno de la computadora
 * 
 * @param {Number} puntosMinimos Puntos minimos que el PC necesita para ganar
 * @param {HTMLElement} puntosHTML Element para html para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora Element para html para mostrar las cartas
 * @param {Array<String>} deck 
 * 
 */
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora ,deck = []) => {

    if (!puntosMinimos) throw new Error("Puntos mínimos son necesarios")
    if(!puntosHTML) throw new Error("Argumento puntosHTML es necesario")
    // if(!deck) throw new Error("El Deck es necesario")
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        //TODO Crear carta
        const imgCarta = crearCartaHTML(carta)
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana :(');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}
