export function ShuffleCards() {
    const cards = ['moon', 'star', 'sun', 'comet']
    let rep = [2, 2, 2, 2]
    let deck = []

    let i = 0
    let random = 0
    while (i < 8) {
        random = Math.floor(Math.random() * 5);
    
        if (rep[random] > 0) {
            rep[random]--
            deck[i] = cards[random]
            i++
        }
    }

    return deck
}

// console.log(ShuffleCards()) this is here for testing purposes