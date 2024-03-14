import Image from "next/image";
import Profile from "@/components/profile";
import { Gallery } from "@/components/gallery";

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ fontSize: '3rem', color: '#3F3F3F', textAlign: 'center', margin: '2rem 0' }}>
        Ilmuwan yang luar biasa
      </h2>

      {/*Practicum Soal 1*/}
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '80%' }}>
        {/* <Profile/>
        <Profile/>
        <Profile/> */}
      </div>
      
      {/*Practicum Soal 2*/}

      <div style={{ display: 'flex', justifyContent: 'space-around', width: '80%' }}>
        {/* <Gallery/> */}
      </div>
    </div>
  );
}
