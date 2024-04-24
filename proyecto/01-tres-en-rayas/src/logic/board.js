import { WHINNER_COMBO } from "../costants"

export const checkWhinnerFrom = (boardToCheck) => {
    for (const combo of WHINNER_COMBO) {
        const [a, b, c] = combo
        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a]
        }
    }
    return null
}

export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
}