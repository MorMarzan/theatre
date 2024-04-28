
export function SeatPreveiw({ seat, onSelecetSeat, selectedSeatId }) {

    const reservedClass = seat.isReserved ? 'reserved' : ''
    const selectedClass = (seat._id === selectedSeatId) ? 'selected' : ''

    return (
        <article className={`seat-preview ${reservedClass} ${selectedClass}`} onClick={() => onSelecetSeat(seat._id)}>
        </article>
    )
}
