import { SeatPreveiw } from "./SeatPreveiw";

export function SeatList({ seats, onSelecetSeat, selectedSeatId }) {
    return (
        <ul className='seat-list'>
            {seats.map((seatRows, idx) =>
                <ul className="row" key={`row-${idx}`}>{
                    seatRows.map(seat =>
                        <li key={seat._id}>
                            <SeatPreveiw seat={seat} selectedSeatId={selectedSeatId} onSelecetSeat={onSelecetSeat} />
                        </li>
                    )}
                </ul>
            )}
        </ul>
    )
}
