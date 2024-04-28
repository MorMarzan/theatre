import { useEffect, useState } from "react"
import { seatService } from "../services/seat.service"
import { SeatList } from "../cmps/SeatList"

export function HomePage() {

    const [seats, setSeats] = useState([])
    const [selectedSeatId, setSelectedSeatId] = useState('')

    useEffect(() => {
        _loadSeats()
    }, [])

    async function _loadSeats() {
        try {
            const seats = await seatService.query()
            setSeats(seats)
        } catch (error) {
            console.error('Error loading toys:', error)
        }
    }

    function onSelecetSeat(seatId) {
        console.log('selected', seatId)
        setSelectedSeatId(seatId)
    }

    return (
        <div className="main-layout full home-page">
            <section className="main-layout full hero">
                {(!seats || !seats.length) ?
                    <div>Loading</div>
                    :
                    <div className="section-container">
                        <h4 className="title">Scren is this way</h4>
                        <SeatList seats={seats} selectedSeatId={selectedSeatId} onSelecetSeat={onSelecetSeat} />
                    </div>
                }
            </section>

            <section className='main-layout full call-to-action'>
                <div className="section-container">
                    <h4>Lorem ipsum dolor sit.</h4>
                    <a href="mailto:mormarzan@gmail.com" className='btn'>Contact Me</a>
                </div>
            </section>

        </div>
    )
}
