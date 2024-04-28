
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'seatDB'
const theatre = { rowCount: 6, colCount: 10 }

export const seatService = {
    query,
    getById,
    save,
    remove,
    getEmptySeat,
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

function remove(seatId) {
    // return Promise.reject('Not now!')
    return storageService.remove(STORAGE_KEY, seatId)
}

function save(seat) {
    if (seat._id) {
        return storageService.put(STORAGE_KEY, seat)
    } else {
        return storageService.post(STORAGE_KEY, seat)
    }
}

function getEmptySeat(price = '', isReserved = false, isSeat = true) {
    return {
        // loc,
        price,
        isReserved,
        isSeat
    }
}

// function getDefaultFilter() {
//     return {
//         name: '',
//         maxPrice: '',
//         labels: '',
//         inStock: undefined,
//     }
// }

function _createSeats() {
    let seats = utilService.loadFromStorage(STORAGE_KEY)
    if (!seats || !seats.length) {
        _createDemoSeats()
    }
}

function _createDemoSeats() {
    const seats = []
    for (let i = 0; i < theatre.rowCount; i++) {
        seats[i] = []
        for (let j = 0; j < theatre.colCount; j++) {
            const price = utilService.getRandomIntInclusive(1, 800)
            const isReserved = Math.random() < 0.5 ? false : true
            seats[i][j] = _createSeat(price, isReserved)
        }
    }
    utilService.saveToStorage(STORAGE_KEY, seats)
}

function _createSeat(loc, price) {
    const seat = getEmptySeat(loc, price)
    seat._id = utilService.makeId()
    return seat
}

// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 6', price: 980}).then(x => console.log(x))



