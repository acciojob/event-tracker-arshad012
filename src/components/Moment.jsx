import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const Moment = () => {
    // console.log(moment().format('MM/DD/YYYY'))
    // console.log(moment())
    const localizer = momentLocalizer(moment);
    
    return (
        <>
            <div>
            <Calendar
                // localizer={localizer}
                // events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
        </>
    )
}

export default Moment;