import Image from "next/image";
import Profile from "@/components/profile";
import { Gallery } from "@/components/gallery";
import TodoList1 from "@/components/sidebar";
import Bio from "@/components/sidebar";
import TodoList from "@/components/todolist";
import MyGallery from "@/components/mygallery";


export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: '' }}>
      
      {/*Practicum Soal 1*/}
      {/* <h2 style={{ fontSize: '3rem', color: '#3F3F3F', textAlign: 'center', margin: '2rem 0' }}>
        Ilmuwan yang luar biasa
      </h2> */}

      {/* <div style={{ display: 'flex', justifyContent: 'space-around', width: '80%' }}>
        <Profile/>
        <Profile/>
        <Profile/>
      </div> */}

      {/*Practicum Soal 2*/}
      {/* <div style={{ display: 'flex', justifyContent: 'space-around', width: '80%' }}>
         <Gallery/>
      </div> */}

      {/* Practicum Soal 3 */}
      <div style={{ display: ''}}>
        {/* <TodoList1/>      
        <Bio/> */}
      </div>

      {/* Practicum Soal 4, 5 an 6 */}
      <div>
        <TodoList/>
      </div>

      {/* Practicum Soal 7 */}
      <div>
        <MyGallery/>
      </div>

    </div>
  );
}
