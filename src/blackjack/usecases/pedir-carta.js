
// Esta función me permite tomar una carta

/**
 * 
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} retorna la carta del deck
 */


export const pedirCarta = (deck) => {

    if (deck.length === 0 || !deck) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}

// export default pedirCarta;

