import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';

interface DateTimePickerProps {
    selectedDate: Date | null;
    onDateChange: (date: Date | null) => void;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({ selectedDate, onDateChange }) => {
    return (
        <div className="date-time-picker">
            <DatePicker
                selected={selectedDate}
                onChange={(date) => onDateChange(date)}
                showTimeSelect
                dateFormat="Pp"
                placeholderText="Select date and time"
            />
        </div>
    );
};

export default DateTimePicker;
