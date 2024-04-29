
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'seatDB'
const gTheatre = { rowCount: 6, colCount: 10 }

export const seatService = {
    query,
    getById,
    save,
    gTheatre
}

_createSeats()

async function query() {
    try {
        const seats = await storageService.query(STORAGE_KEY)
        return seats
    } catch (error) {
        console.error('Error querying seats:', error)
        throw error
    }
}

function getById(seatId) {
    return storageService.get(STORAGE_KEY, seatId)
}

function save(seat) {
    return storageService.put(STORAGE_KEY, seat)

}

function getEmptySeat(loc, price = '', isReserved = false) {
    return {
        loc,
        price,
        isReserved,
    }
}

function _createSeats() {
    let seats = utilService.loadFromStorage(STORAGE_KEY)
    if (!seats || !seats.length) {
        _createDemoSeats()
    }
}

function _createDemoSeats() {
    const seats = []
    for (let i = 0; i < gTheatre.rowCount; i++) {
        for (let j = 0; j < gTheatre.colCount; j++) {
            const price = (gTheatre.rowCount - i) * 100 + utilService.getRandomIntInclusive(1, 100)
            const isReserved = Math.random() < 0.5
            const loc = { row: i + 1, col: j + 1 }
            seats.push(_createSeat(loc, price, isReserved))
        }
    }
    utilService.saveToStorage(STORAGE_KEY, seats)
}

function _createSeat(loc, price, isReserved) {
    const seat = getEmptySeat(loc, price, isReserved)
    seat._id = utilService.makeId()
    return seat
}



