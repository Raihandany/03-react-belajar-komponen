const baseUrl = 'https://i.imgur.com/';
const person = {
    name: 'Gregorio Y. Zara',
    // imageUrl: 'https://i.imgur.com/7vQD0fPs.jpg',
    imageId: '7vQD0fP',
    imageSize: 's',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };

const imageUrl = `${baseUrl}${person.imageId}${person.imageSize}.jpg`;

export default function TodoList() {
    return (
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          src={imageUrl}
          alt={person.name}
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
}

// Practicum 4 dan 5
// const person = {
//     name: 'Gregorio Y. Zara',
//     imageUrl: 'https://i.imgur.com/7vQD0fPs.jpg',
//     theme: {
//       backgroundColor: 'black',
//       color: 'pink'
//     }
//   };
  
// export default function TodoList() {
//     return (
//       <div style={person.theme}>
//         <h1>{person.name}'s Todos</h1>
//         <img
//           src={person.imageUrl}
//           alt="Gregorio Y. Zara"
//         />
//         <ul>
//           <li>Improve the videophone</li>
//           <li>Prepare aeronautics lectures</li>
//           <li>Work on the alcohol-fuelled engine</li>
//         </ul>
//       </div>
//     );
// }