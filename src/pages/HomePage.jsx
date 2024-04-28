import { useEffect, useState } from "react"
import { seatService } from "../services/seat.service"
import { SeatList } from "../cmps/SeatList"
import { Outlet, useNavigate } from "react-router-dom"

export function HomePage() {

    const [seats, setSeats] = useState([])
    const [selectedSeatId, setSelectedSeatId] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        _loadSeats()
    }, [])

    async function _loadSeats() {
        try {
            const seats = await seatService.query()
            setSeats(seats)
        } catch (error) {
            console.error('Error loading seats:', error)
        }
    }

    function onSelecetSeat(seatId) {
        setSelectedSeatId(seatId)
        navigate(`/seat/${seatId}`)
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
                    <h4>Select your seat</h4>
                </div>
            </section>

            {selectedSeatId && <Outlet />}


        </div>
    )
}
