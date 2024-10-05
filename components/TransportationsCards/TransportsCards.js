import React from 'react';
import { FaCar, FaUsers, FaSuitcase } from 'react-icons/fa';

const TransportsCards = () => {
  return (
    <div style={styles.card}>
      {/* Left section - Car image */}
      <div style={styles.leftSection}>
        <img
          src="https://via.placeholder.com/150" // Replace this URL with your car image
          alt="Car"
          style={styles.carImage}
        />
      </div>

      {/* Right section - Details */}
      <div style={styles.rightSection}>
        <div style={styles.header}>
          <h2 style={styles.carTitle}>Vito Car x 1</h2>
          <div style={styles.priceSection}>
            <p>Total price (per vehicle)</p>
            <h3 style={styles.price}>35$</h3>
            <button style={styles.bookButton}>Book Now</button>
            <p style={styles.taxInfo}>All Taxes & Fees included</p>
          </div>
        </div>

        {/* Transfer details */}
        <div style={styles.detailItem}>
          <FaCar style={styles.icon} />
          <span>Type of the Transfer</span>
          <span style={styles.detailValue}>Mercedes Vito</span>
        </div>

        {/* Passengers */}
        <div style={styles.detailItem}>
          <FaUsers style={styles.icon} />
          <span>Number of passengers</span>
          <span style={styles.detailValue}>7</span>
        </div>

        {/* Luggage */}
        <div style={styles.detailItem}>
          <FaSuitcase style={styles.icon} />
          <span>Number of luggage</span>
          <span style={styles.detailValue}>
            4 Bigs & 4 Hand bags
          </span>
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '15px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '100%',
    maxWidth: '800px',
    margin: '20px auto',
  },
  leftSection: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carImage: {
    width: '150px',
    height: 'auto',
    borderRadius: '10px',
  },
  rightSection: {
    flex: '2',
    paddingLeft: '20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  carTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#fbc02d', // Yellow text color for title
  },
  priceSection: {
    textAlign: 'right',
  },
  price: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#fbc02d',
  },
  bookButton: {
    backgroundColor: '#fff',
    color: '#fbc02d',
    padding: '10px 20px',
    border: '2px solid #fbc02d',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  taxInfo: {
    fontSize: '12px',
    color: '#999',
    marginTop: '5px',
  },
  detailItem: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0',
  },
  icon: {
    color: '#fbc02d',
    marginRight: '10px',
    fontSize: '18px',
  },
  detailValue: {
    marginLeft: 'auto',
    color: '#999',
  },
};

export default TransportsCards;
