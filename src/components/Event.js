import { useState } from 'react';

const Event = ({ event: { id, summary, created, location, description, status} }) => {

    const [showDetails, setShowDetails] = useState(false);
    return (
      <li key={id} className="event">
        <h3>{summary}</h3>
        <p>{created}</p>
        <p>{location}</p>
        <button
          className="details-btn"
          onClick={() => {
            setShowDetails(!showDetails);
          }}
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        {showDetails ? (
          <div className="details">
            <h4>Event Details</h4>
            <p>Description: {description}</p>
            <p>Event status: {status}</p>
          </div>
        ) : null}
      </li>
    );
  };
  
  export default Event;