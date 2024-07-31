/**
 * v0 by Vercel.
 * @see https://v0.dev/t/w46vmnYuXva
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardContent } from "@/components/ui/card"


import { Button } from "@/components/ui/button"

import Link from 'next/link';


const data = [
  {
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMdJThsoZleGbje2xt_WEPyzncwet1hcgzSQ&s",
    buttonText: "Medical services",
    buttonType: "primary",
    buttonDanger: true,
    url: "/ambulance"
  },

  {
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlzX9D2nUdIsrNJRAGUYAn-qeDqAxjvaxgog&s",
    buttonText: "Call FireFighter",
    buttonType: "primary",
    buttonDanger: true,
    url: "/fighter"
  },

  {
    imageSrc: "https://cdn-prod.medicalnewstoday.com/content/images/articles/153/153849/first-aid-kit.jpg",
    buttonText: "Fist Aid Tips",
    buttonType: "primary",
    buttonDanger: true,
    url: "/firstaid"
  },
  {
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1CJ7MhL2orAU1Zz8DFhh8F6lr1LOwfM5NBg&s",
    buttonText: "Gabbage Collector",
    buttonType: "primary",
    buttonDanger: true,
    url: "/gabbage"
  },
  {
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQism_wROIFL6VYokqPxaVnJ0ezJBGxjT0PvA&s",
    buttonText: "Flood alert",
    buttonType: "primary",
    buttonDanger: true,
    url: "/flood"
  },
  {
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX811s4JgQJHqOC4-9z1jQtIqjhXGF0m6kEw&s",
    buttonText: "Read Blogs",
    buttonType: "primary",
    buttonDanger: true,
    url: "/ambulance"
  },
  {
    imageSrc: "https://www.mysafetysign.com/img/lg/S/all-injuries-report-accidents-sign-s-4026.png",
    buttonText: "Report Incident",
    buttonType: "primary",
    buttonDanger: true,
    url: "/report"
  },
  {
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt-YdgCgQY4oiyHme5sBtc-U31O2iXRnSuKA&s",
    buttonText: "Nearby Hospitals",
    buttonType: "primary",
    buttonDanger: true,
    url: "/ambulance"
  },
  {
    imageSrc: "https://img.freepik.com/premium-vector/emergency-call-icon-sos-emergency-call_349999-1732.jpg",
    buttonText: "Emergency Contacts",
    buttonType: "primary",
    buttonDanger: true,
    url: "/ambulance"
  },

];


export default function ServiceCards() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl w-full mx-auto">
      {
        data.map((item) => (
          <Link href={item.url}>
            <Card className="bg-purple-800">

              <CardHeader className="p-0">
                <img src={item.imageSrc} alt="Project" width="400" height="225" className="aspect-video object-cover" />
              </CardHeader>
              <CardContent className="p-4">
                <div className="text-xl font-bold">{item.buttonText}</div>
                <Button>Contact </Button>
              </CardContent>
            </Card>
          </Link>

        ))
      }



    </div>
  )
}