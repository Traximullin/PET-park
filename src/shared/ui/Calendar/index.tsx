import { type FC } from "react"
import "./index.scss"

const weekDays = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"]

const arrayDays = Array.from({ length: 31, }, (_, i) => i + 1)
console.log(arrayDays)
const Calendar: FC = () => {
    return (
        <div className="calendar">
            <div className="calendar__header">
                <div>left</div>
                <p>Июнь 2023</p>
                <div>right</div>
            </div>
            <div className="calendar__content">
                {
                    weekDays.map((weekDay, index) => (
                        <div
                            className="calendar__week-day"
                            key={`calendar-week-day-${index}`}
                        >
                            {weekDay}
                        </div>
                    ))
                }
                {
                    arrayDays.map((day, index) => (
                        <div
                            className={
                                index === 12
                                    ? "calendar__day calendar__day_active"
                                    : "calendar__day"
                            }
                            key={`calendar-day-${index}`}
                        >
                            {day}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Calendar
