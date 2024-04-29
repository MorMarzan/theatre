import { useEffect, useState } from "react"
import { useOutletContext, useParams } from "react-router-dom"
import { seatService } from "../services/seat.service"

export function SeatDetails() {

    const { seatId } = useParams()
    const [seat, setSeat] = useState(null)
    const onBookSeat = useOutletContext()

    useEffect(() => {
        loadSeat()
    }, [seat])

    async function loadSeat() {
        try {
            const loadedSeat = await seatService.getById(seatId)
            setSeat(loadedSeat)
        } catch (error) {
            console.error('Error loading seat:', err)
        }
    }

    if (!seat) return
    return (
        <section className="seat-details">
            <p><span>Row:</span> {seat.loc.row}</p>
            <p><span>Seat number:</span> {seat.loc.col}</p>
            <p><span>Price:</span> {seat.price}$</p>
            <button className="btn" onClick={() => onBookSeat(seat)}>{seat.isReserved ? 'Unbook' : 'Book'} Me</button>
        </section>
    )
}
