import { SeatPreveiw } from "./SeatPreveiw"

export function SeatList({ seats, onSelecetSeat, selectedSeatId, theatre }) {

    return (
        <ul className='seat-list' style={{
            gridTemplateColumns: `repeat(${theatre.colCount}, auto)`,
            gridTemplateRows: `repeat(${theatre.rowCount}, auto)`
        }}>
            {seats.map(seat =>
                <li key={seat._id} style={{ gridColumn: seat.loc.col, gridRow: seat.loc.row }}>
                    <SeatPreveiw seat={seat} selectedSeatId={selectedSeatId} onSelecetSeat={onSelecetSeat} />
                </li>
            )}
        </ul>
    )
}
