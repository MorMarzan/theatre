import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { seatService } from "../services/seat.service"

export function SeatDetails() {

    const { seatId } = useParams()
    const [seat, setSeat] = useState(null)

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

    return (
        <section className="seat-details">
            {seat &&
                <>
                    <p><span>Row:</span> {seat.loc.i + 1}</p>
                    <p><span>Seat number:</span> {seat.loc.j + 1}</p>
                    <p><span>Price:</span> {seat.price}$</p>
                </>
            }
        </section>
    )
}
