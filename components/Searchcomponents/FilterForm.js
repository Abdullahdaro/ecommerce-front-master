import { useState } from 'react';
import DatePicker from 'react-datepicker';  // For date selection
import 'react-datepicker/dist/react-datepicker.css';  // Date picker styles
import { FaCalendarAlt, FaUser, FaSuitcase } from 'react-icons/fa';  // Icons for display

export default function FilterForm() {
  const [date, setDate] = useState(new Date());
  const [passengers, setPassengers] = useState(1);
  const [luggage, setLuggage] = useState(1);

  return (
    <div style={styles.container}>
      {/* Date Picker Section */}
      <div style={styles.item}>
        <label style={styles.label}><FaCalendarAlt style={styles.icon} /> Date</label>
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat="dd MMM yyyy"
          customInput={<CustomInput />}
        />
      </div>

      {/* Passengers Section */}
      <div style={styles.item}>
        <label style={styles.label}><FaUser style={styles.icon} /> Passengers</label>
        <div style={styles.inputBox}>
          <span>Passengers</span>
          <input
            type="number"
            value={passengers}
            onChange={(e) => setPassengers(parseInt(e.target.value))}
            min="1"
            style={styles.input}
          />
        </div>
      </div>

      {/* Luggage Section */}
      <div style={styles.item}>
        <label style={styles.label}><FaSuitcase style={styles.icon} /> Luggage</label>
        <div style={styles.inputBox}>
          <span>Luggage</span>
          <input
            type="number"
            value={luggage}
            onChange={(e) => setLuggage(parseInt(e.target.value))}
            min="1"
            style={styles.input}
          />
        </div>
      </div>
    </div>
  );
}

// Custom Input for Date Picker styling
const CustomInput = ({ value, onClick }) => (
  <button onClick={onClick} style={styles.customDateInput}>
    {value}
  </button>
);

const styles = {
  container: {
    backgroundColor: '#FF6F61',  // Background color to match your design
    padding: '20px',
    borderRadius: '15px',
    width: '200px',  // Set the width as per your layout
  },
  item: {
    marginBottom: '20px',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  icon: {
    marginRight: '10px',
  },
  inputBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '5px 10px',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  input: {
    width: '40px',
    textAlign: 'center',
    border: 'none',
    fontSize: '16px',
    background: 'none',
  },
  customDateInput: {
    backgroundColor: '#fff',
    padding: '10px',
    borderRadius: '8px',
    border: 'none',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    width: '100%',
  }
};
