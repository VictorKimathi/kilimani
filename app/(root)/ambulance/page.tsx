// "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import Image from "next/image";

// interface Location {
//   latitude: number | null;
//   longitude: number | null;
// }

// const GetAmbulancePage = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [eta, setEta] = useState<number | null>(null);
//   const [error, setError] = useState<string>("");
//   const [userLocation, setUserLocation] = useState<Location>({ latitude: null, longitude: null });
//   const [ambulanceLocation, setAmbulanceLocation] = useState<Location | null>(null);

//   // Function to fetch the user's geolocation
//   const fetchGeolocation = () => {
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setUserLocation({
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//           });
//         },
//         () => {
//           setError("Failed to get your location. Please enable location services and try again.");
//           setIsLoading(false);
//         }
//       );
//     } else {
//       setError("Geolocation is not available in your browser.");
//       setIsLoading(false);
//     }
//   };

//   // Function to request an ambulance
//   const requestAmbulance = async (location: Location) => {
//     try {
//       const response = await axios.post("/hospitals/call-ambulance", { location });
//       setEta(response.data.eta);
//       setIsLoading(false);
//     } catch (err) {
//       setError("Failed to dispatch ambulance. Please try again.");
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchGeolocation();
//   }, []);

//   useEffect(() => {
//     if (userLocation.latitude && userLocation.longitude) {
//       // Call the function to request an ambulance only after geolocation is fetched
//       requestAmbulance(userLocation);
//     }
//   }, [userLocation]);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
//       <h1 className="text-3xl font-bold mb-6">Ambulance Request</h1>

//       {isLoading && (
//         <div className="flex flex-col items-center">
//           <p className="text-xl mb-4">Requesting ambulance...</p>
//           <div className="loader"></div>
//         </div>
//       )}

//       {!isLoading && error && (
//         <div className="text-red-500 text-xl">{error}</div>
//       )}

//       {!isLoading && !error && (
//         <div className="flex flex-col items-center">
//           <p className="text-xl mb-4">Ambulance is on the way!</p>
//           <p className="text-lg mb-4">Estimated Time of Arrival: {eta} minutes</p>
//           {ambulanceLocation && (
//             <div className="flex flex-col items-center">
//               <p className="text-lg mb-4">Real-time Ambulance Location:</p>
//               <div className="relative w-full h-64">
//                 <Image
//                   src="/ambulanceMap.png" // Placeholder for map image
//                   alt="Ambulance Location"
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default GetAmbulancePage;
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"



import React from 'react'
// import { Card } from '@/components/ui/card'

const data = [{
  imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMdJThsoZleGbje2xt_WEPyzncwet1hcgzSQ&s",
  buttonText: "Contact Doctor",
  buttonType: "primary",
  buttonDanger: true,
  url: "/ambulance"
},
{
  imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMdJThsoZleGbje2xt_WEPyzncwet1hcgzSQ&s",
  buttonText: "Contact Ambulance",
  buttonType: "primary",
  buttonDanger: true,
  url: "/ambulance"
},



]


const page = () => {
  return (
    <div className='flex m-5 mx-4 justify-between justify-center '>
      
        {data.map((item) => (
          <Card className="bg-purple-800">
            <CardHeader className="p-0 bg-purple-800">
              <img src={item.imageSrc} alt="Project" width="400" height="225" className="aspect-video object-cover" />
            </CardHeader>
            <CardContent className="p-4 ">
              <div className="text-xl font-bold bg-purple">{item.buttonText}</div>
              <Button>Contact </Button>
            </CardContent>
          </Card>

        ))}



    </div>
  )
}

export default page