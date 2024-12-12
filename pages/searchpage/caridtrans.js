import Center from '@/components/Center';
import { useRouter } from 'next/router';
import { FaCar, FaUsers, FaSuitcase, FaDollarSign, FaArrowLeft } from 'react-icons/fa';

export default function CarIDTrans() {
  const router = useRouter();

  // Navigate back to the search page
  const goBack = () => {
    router.push('/search'); // Assuming the search page is at "/search"
  };

  return (
    <Center>
    <Headers /> 
    <div style={styles.container}>
      {/* Header with Back Button */}
      <div style={styles.header}>
        <button style={styles.backButton} onClick={goBack}>
          <FaArrowLeft /> Back
        </button>
        <h1 style={styles.title}>Complete your Reservation</h1>
      </div>

      {/* Steps for the reservation process */}
      <div style={styles.steps}>
        <div style={styles.stepItem}>
          <span>📝 Fill the details</span>
        </div>
        <span>→</span>
        <div style={styles.stepItem}>
          <span>💵 Complete the payment</span>
        </div>
        <span>→</span>
        <div style={styles.stepItem}>
          <span>✔️ Receive your confirmation</span>
        </div>
      </div>

      {/* Main content - Car details */}
      <div style={styles.card}>
        {/* Left section - Car image */}
        <div style={styles.leftSection}>
          <img
            src="https://via.placeholder.com/150" // Replace with actual car image
            alt="Car"
            style={styles.carImage}
          />
        </div>

        {/* Right section - Details */}
        <div style={styles.rightSection}>
          <h2 style={styles.carTitle}>Vito Car x 1</h2>

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
            <span style={styles.detailValue}>4 Bigs & 4 Hand bags</span>
          </div>
        </div>

        {/* Price and Book Now Button */}
        <div style={styles.priceSection}>
          <p>Total price (per vehicle)</p>
          <h3 style={styles.price}>35$</h3>
          <button style={styles.bookButton}>Book Now</button>
          <p style={styles.taxInfo}>All Taxes & Fees included</p>
        </div>
      </div>
    </div>
    </Center>
  );
}

// Styles
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  backButton: {
    backgroundColor: '#fff',
    border: '2px solid #fbc02d',
    color: '#fbc02d',
    padding: '8px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  title: {
    marginLeft: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  steps: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '30px',
  },
  stepItem: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
  },
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
    margin: '0 auto',
  },
  leftSection: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carImage: {
    width: '200px',
    height: 'auto',
    borderRadius: '10px',
  },
  rightSection: {
    flex: '2',
    paddingLeft: '20px',
  },
  carTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#fbc02d',
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
};

<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256" style="fill:#FAB005;"><g fill="#ffd461" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M43.171,10.925l-19.086,22.521l-9.667,-9.015l1.363,-1.463l8.134,7.585l17.946,-21.175c-4.204,-4.534 -10.205,-7.378 -16.861,-7.378c-12.683,0 -23,10.317 -23,23c0,12.683 10.317,23 23,23c12.683,0 23,-10.317 23,-23c0,-5.299 -1.806,-10.182 -4.829,-14.075z"></path></g></g></svg>