"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import health from "../public/assets/health.jpg";
import red from "../public/assets/red.jpg";
import { Button } from "@/components/ui/button";
import map from "../public/assets/map.png";
import fire from "../public/assets/fire.jpg";
import MapComponent from "@/components/MapComponent";

interface DataItem {
  tag: string;
  patterns: string[];
  responses: string[];
  context_set: string;
}

const data: DataItem[] = [
  {
    tag: "Cuts",
    patterns: [
      "What to do if Cuts?",
      "How to cure Cuts?",
      "Which medicine to apply for Cuts?",
      "what to apply on cuts?",
      "Cuts"
    ],
    responses: [
      "Wash the cut properly to prevent infection and stop the bleeding by applying pressure for 1-2 minutes until bleeding stops. Apply Petroleum Jelly to make sure that the wound is moist for quick healing. Finally, cover the cut with a sterile bandage. Pain relievers such as acetaminophen can be applied."
    ],
    context_set: ""
  },
  {
    tag: "Abrasions",
    patterns: [
      "how do you treat abrasions?",
      "Do Abrasions cause scars?",
      "Abrasions",
      "what to do if abrasions?",
      "Which medicine to apply for abrasions?",
      "How to cure abrasions?"
    ],
    responses: [
      "Begin with washed hands. Gently clean the area with cool to lukewarm water and mild soap. Remove dirt or other particles from the wound using sterilized tweezers. For a mild scrape that’s not bleeding, leave the wound uncovered. If the wound is bleeding, use a clean cloth or bandage, and apply gentle pressure to the area to stop any bleeding. Cover a wound that bled with a thin layer of topical antibiotic ointment, like Bacitracin, or a sterile moisture barrier ointment, like Aquaphor. Cover it with a clean bandage or gauze. Gently clean the wound and change the ointment and bandage once per day. Watch the area for signs of infection, like pain or redness and swelling. See your doctor if you suspect infection."
    ],
    context_set: ""
  },
  // Add other data items similarly...
];

interface CardProps {
  data: DataItem;
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div style={styles.card}>
      <Image src={health} alt={`${data.tag} graphic`} style={styles.image} />
      <div style={styles.content}>
        <h2 style={styles.title}>{data.tag}</h2>
        <h3 style={styles.subtitle}>Patterns:</h3>
        <ul style={styles.list}>
          {data.patterns.map((pattern, index) => (
            <li key={index} style={styles.listItem}>{pattern}</li>
          ))}
        </ul>
        <h3 style={styles.subtitle}>Responses:</h3>
        <p style={styles.responses}>{data.responses.join(' ')}</p>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  return (
    <section>
      <div className="flex h-screen max-h-screen">
        <section className="remove-scrollbar container my-auto">
          <div className="sub-container max-w-[496px]">
            <Image
              src="/assets/icons/logo-full.svg"
              height={1000}
              width={1000}
              alt="logo"
              className="mb-12 h-10 w-fit"
            />

<section className="px-6 md:px-20 py-24">
  <div className="flex max-xl:flex-col gap-16">
    <div className="flex flex-col justify-center">
      <h1 className="head-text">
        An AI Powered dispatch application
        <span className="text-primary"> in your App</span>
      </h1>
      <p className="mt-6">
        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.
      </p>
      <div className="mt-8 flex gap-4">
        <Button 
          // onClick={() => window.location.href = "/download"} 
          className="bg-purple-800  text-black px-6 py-3 rounded-lg hover:bg-primary-dark"
        >
          Download Mobile App
        </Button>
        <Button 
          onClick={() => window.location.href = "/demo"} 
          className="bg-purple-800 text-black px-6 py-3 rounded-lg hover:bg-secondary-dark"
        >
          Try Demo
        </Button>
      </div>
    </div>
  </div>
</section>


            <div className="text-14-regular mt-20 flex justify-between">
              <p className="justify-items-end text-dark-600 xl:text-left">
                © 2024 Dispatch
              </p>
            </div>
          </div>
        </section>
        <div className="w-1/2">
        <MapComponent location={location} />
        </div>
        
      </div>
      <div>
        <div className="w-full">
          <Image
            src={health}
            alt="health image"
            width={300}
            height={300}
            className="w-full"
          />
        </div>
        <div>
          <Image
            src={fire}
            alt="fire image"
            width={300}
            height={300}
            className="w-full"
          />
        </div>
        <div>
          <Image
            src={red}
            alt="red cross image"
            width={300}
            height={300}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

const styles = {
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
  subtitle: {
    fontSize: '1.2em',
    margin: '10px 0 5px',
  } as React.CSSProperties,
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
  } as React.CSSProperties,
  listItem: {
    fontSize: '1em',
    margin: '5px 0',
  } as React.CSSProperties,
  responses: {
    fontSize: '1em',
    margin: '10px 0',
  } as React.CSSProperties,
};

export default Home;
