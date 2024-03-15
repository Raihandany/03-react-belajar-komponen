import Image from "next/image";
import Profile from "./profile";
//import React from 'react';

// export default function TodoList() {
//     return(
//         <>
//             <h1>Daftar Tugas Putri</h1>
//             <img
//                 src="https://i.imgur.com/yXOvdOSs.jpg"
//                 alt="Putri"
//                 width={100}
//                 height={100}
//                 className="photo"
//                 />
        
//             <ul>
//                 <li>Mengerjakan PR</li>
//                 <li>Pergi Berbelanja</li>
//                 <li>Minum Vitamin</li>
//             </ul>
//         </>
//     );
    
// }

export default function Bio() {
    return (
        <div>
            <div className="intro">
                <h1>Selamat datang di website saya!</h1>
            </div>

            <p className="summary">
                Anda dapat membaca uneg-unegku di sini.
                <br></br>
                <b>Juga ada <i>foto</i></b> ilmuwan!
            </p>
        </div>
       
    );
}