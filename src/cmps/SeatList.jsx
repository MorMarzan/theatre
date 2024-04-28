import { SeatPreveiw } from "./SeatPreveiw";

export function SeatList({ seats }) {
    return (
        <ul className='seat-list'>
            {seats.map((seatRows, idx) =>
                <div className="row" key={`row-${idx}`}>{
                    seatRows.map(seat =>
                        <li key={seat._id}>
                            <SeatPreveiw seat={seat} />
                        </li>
                    )}
                </div>
            )}
        </ul>
    )
}
