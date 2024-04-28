
export function SeatPreveiw({ seat }) {

    const reservedClass = seat.isReserved ? 'reserved' : ''

    return (
        <article className={`seat-preview ${reservedClass}`}>
        </article>
    )
}
