import React from 'react';

// Define the types for the emergency data
interface EmergencyData {
  name: string;
  image: string;
  address: string;
  telephone: string[] | string;
  email: string;
  website: string;
  description: string;
  emergency_hotline?: string; // Optional field
}

// Define the props for the EmergencyCard component
interface EmergencyCardProps {
  data: EmergencyData;
}

// Define the EmergencyCard component
const EmergencyCard: React.FC<EmergencyCardProps> = ({ data }) => {
  return (
    <div style={styles.card}>
      <img src={data.image} alt={data.name} style={styles.image} />
      <div style={styles.content}>
        <h2 style={styles.title}>{data.name}</h2>
        <p style={styles.description}>{data.description}</p>
        <p style={styles.address}><strong>Address:</strong> {data.address}</p>
        <p style={styles.telephone}>
          <strong>Telephone:</strong> {Array.isArray(data.telephone) ? data.telephone.join(', ') : data.telephone}
        </p>
        <p style={styles.email}>
          <strong>Email:</strong> <a href={`mailto:${data.email}`}>{data.email}</a>
        </p>
        <p style={styles.website}>
          <strong>Website:</strong> <a href={data.website} target="_blank" rel="noopener noreferrer">{data.website}</a>
        </p>
        {data.emergency_hotline && (
          <p style={styles.hotline}>
            <strong>Emergency Hotline:</strong> {data.emergency_hotline}
          </p>
        )}
      </div>
    </div>
  );
};

// Define the props for the EmergencyCards component
interface EmergencyCardsProps {
  data: EmergencyData[];
}

// Define the EmergencyCards component
const EmergencyCards: React.FC<EmergencyCardsProps> = ({ data }) => {
  if (!data) return null; // Check if data is undefined and return null if it is

  return (
    <div style={styles.container}>
      {data.map((item, index) => (
        <EmergencyCard key={index} data={item} />
      ))}
    </div>
  );
};

// Example data
const data: EmergencyData[] = [
  {
    name: "AAR Rescue Services",
    image: "AAR Rescue Services Image",
    address: "5th floor, Williamson House, 4th Ngong Avenue, off Ngong Road",
    telephone: [
      "+254 725 225 225",
      "+254 734 225 225"
    ],
    email: "clientservice.ke@aar-healthcare.com",
    website: "http://aar-healthcare.com/ke/rescue-services",
    description: "Offers 24/7 ambulance services with state-of-the-art equipment and highly trained personnel."
  },
  {
    name: "AMREF Flying Doctors",
    image: "AMREF Flying Doctors Image",
    address: "Wilson Airport, Langata Road",
    telephone: [
      "+254 206992299",
      "733639088",
      "722314239"
    ],
    email: "marketing@flydoc.org",
    website: "http://flydoc.org",
    description: "Provides safe aero-medical transportation and medical evacuations using air and ground ambulances."
  },
  {
    name: "Avenue Rescue Services",
    image: "Avenue Rescue Services Image",
    address: "Ojijo Road, Parklands, next to Mobil Petrol Station, opposite Parklands Sports Club",
    telephone: [
      "+254 203741593",
      "203749501",
      "725222777",
      "733611630"
    ],
    email: "rescue@avenuehealthcare.com",
    website: "http://avenuehealthcare.com/avenue_rescue_services",
    description: "Offers ambulance & medical taxi services, event cover, CPR, and First Aid training."
  },
  {
    name: "Emergency Plus Medical Services",
    image: "Emergency Plus Medical Services Image",
    address: "Red Cross Road, Off Popo Road",
    telephone: [
      "+254 700395395",
      "738 395 395"
    ],
    email: "info@eplus.co.ke",
    website: "http://eplus.co.ke",
    description: "Provides advanced pre-hospital emergency medical services, fully owned by the Kenya Red Cross Society."
  },
  {
    name: "Kenya Red Cross Society",
    image: "Kenya Red Cross Society Image",
    address: "South C, Red Cross Road, Off Popo Road",
    telephone: [
      "+254 203950000",
      "703037000",
      "722206958",
      "733333041"
    ],
    emergency_hotline: "1199",
    email: "info@redcross.or.ke",
    website: "http://kenyaredcross.org",
    description: "Offers ambulance services throughout Kenya, including aid in emergencies, disasters, fires, and road accidents."
  },
  {
    name: "KWS Airwing Unit",
    image: "KWS Airwing Unit Image",
    address: "Wilson Airport, Langata Road, Nairobi",
    telephone: [
      "+254 20 2423419"
    ],
    email: "airwing@kws.go.ke",
    website: "http://kws.go.ke/content/kws-airwing",
    description: "Provides air support services, including mountain rescue and emergency evacuations."
  },
  {
    name: "St John Ambulance",
    image: "St John Ambulance Image",
    address: "St John Lane, off Parliament Road",
    telephone: [
      "+254 700380785",
      "721225285",
      "202210000"
    ],
    email: "info@stjohnkenya.org",
    website: "http://stjohnkenya.org",
    description: "Offers first aid supplies, emergency response, preparedness, trauma support, and training."
  },
  {
    name: "Tropic Air Charters",
    image: "Tropic Air Charters Image",
    address: "Not provided in the snippet",
    telephone: "Not provided in the snippet",
    email: "Not provided in the snippet",
    website: "http://tropicairkenya.com/helicopter-services/search-rescue/",
    description: "Not fully provided in the snippet"
  }
];

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  } as React.CSSProperties,
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    fontFamily: 'Arial, sans-serif',
  } as React.CSSProperties,
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  } as React.CSSProperties,
  content: {
    padding: '15px',
  } as React.CSSProperties,
  title: {
    fontSize: '1.5em',
    margin: '0 0 10px',
  } as React.CSSProperties,
  description: {
    fontSize: '1em',
    margin: '0 0 10px',
  } as React.CSSProperties,
  address: {
    fontSize: '0.9em',
    margin: '0 0 5px',
  } as React.CSSProperties,
  telephone: {
    fontSize: '0.9em',
    margin: '0 0 5px',
  } as React.CSSProperties,
  email: {
    fontSize: '0.9em',
    margin: '0 0 5px',
  } as React.CSSProperties,
  website: {
    fontSize: '0.9em',
    margin: '0',
  } as React.CSSProperties,
  hotline: {
    fontSize: '0.9em',
    margin: '0',
  } as React.CSSProperties,
};

export default function Report() {
  return <EmergencyCards data={data} />;
}
