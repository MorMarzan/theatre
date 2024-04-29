import { useEffect, useRef, useState } from "react"
import { seatService } from "../services/seat.service"
import { SeatList } from "../cmps/SeatList"
import { Outlet, useNavigate } from "react-router-dom"

export function HomePage() {

    const [seats, setSeats] = useState([])
    const [selectedSeatId, setSelectedSeatId] = useState('')
    const [timeoutId, setTimeoutId] = useState(null)
    const theatre = useRef(seatService.gTheatre)
    const navigate = useNavigate()

    useEffect(() => {
        loadSeats()
    }, [])

    useEffect(() => {
        return () => {
            if (timeoutId) clearTimeout(timeoutId)
        }
    }, [timeoutId])

    async function loadSeats() {
        try {
            const seats = await seatService.query()
            setSeats(seats)
        } catch (error) {
            console.error('Error loading seats:', error)
        }
    }

    async function onBookSeat(seat) {
        try {
            const updatedSeat = { ...seat, isReserved: !seat.isReserved }
            seatService.save(updatedSeat)
            const updatedSeats = seats.map(currSeat =>
                (currSeat._id === seat._id) ? updatedSeat : currSeat
            )
            setSeats(updatedSeats)
            onUnselectSeat()
        } catch (error) {
            console.error('Error booking a seat:', err)
        }
    }

    function onSelecetSeat(seatId) {
        setSelectedSeatId(seatId)
        navigate(`/seat/${seatId}`)
        if (timeoutId) clearTimeout(timeoutId)
        setTimeoutId(setTimeout(onUnselectSeat, 10000))
    }

    function onUnselectSeat() {
        if (timeoutId) clearTimeout(timeoutId)
        setSelectedSeatId('')
        navigate('/')
    }

    const modalOpenClass = selectedSeatId ? 'open' : ''

    return (
        <div className="main-layout full home-page">
            <section className="main-layout full hero">
                {(!seats || !seats.length) ?
                    <div>Loading</div>
                    :
                    <div className="section-container">
                        <h4 className="title">Scren is this way</h4>
                        <SeatList seats={seats} selectedSeatId={selectedSeatId} onSelecetSeat={onSelecetSeat} theatre={theatre.current} />
                    </div>
                }
            </section>

            <section className='main-layout full call-to-action'>
                <div className="section-container">
                    <h4>Please select your seat</h4>
                    <div className="legend">
                        <div className="available">Available<span></span></div>
                        <div className="reserved">Reserved<span></span></div>
                        <div className="selected">selected<span></span></div>
                    </div>
                </div>
            </section>

            {selectedSeatId && <Outlet context={onBookSeat} />}
            <div className={"backdrop " + modalOpenClass} onClick={onUnselectSeat}></div>

        </div>
    )
}
