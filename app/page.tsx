import Booking from "@/components/Booking/Booking";
import Image from "next/image";
import Map from "../components/Map";


export default function Home() {
  return (
   <div>
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div>
        <Booking/>
      </div>
      <div className="col-span-2 mt-5">
        <h2 className="text-[20px] font-bold">Map</h2>
        <div className='border-[1px] p-5 rounded-lg'>
        <Map/>
        </div>
      </div>

    </div>
   </div>
  
  );
}
