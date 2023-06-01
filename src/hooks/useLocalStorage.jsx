
const useLocalStorage = () => {

    const addCard = (card) => {
        const cards = localStorage.getItem('cards')
        if (!cards) {
            localStorage.setItem('cards', JSON.stringify([card]))
        }
        else {
            const cardsArray = JSON.parse(cards)
            cardsArray.push(card)
            localStorage.setItem('cards', JSON.stringify(cardsArray))
        }
    }

    const getCards = () => {
        const cards = localStorage.getItem('cards')
        if (!cards) {
            return []
        }
        else {
            return JSON.parse(cards)
        }
    }

    const removeCard = (id) => {
        const cards = localStorage.getItem('cards')
        if (!cards) {
            return []
        }
        else {
            let cardsArray = JSON.parse(cards)
            cardsArray = cardsArray.filter(card => card.id !== id)
            localStorage.setItem('cards', JSON.stringify(cardsArray))
        }
    }

    return { addCard, getCards, removeCard }

}

export default useLocalStorage