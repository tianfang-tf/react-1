// 了解react的基本语法
// import imgUrl from "./image/WechatIMG38.jpeg"; // import语法可以正常引入图片
// export default function Bio() {
//   const p1 = "欢迎来到我的站点！";
//   const p2 = "你可以在这里了解我的想法。";
//   const p3 = "还有科学家们的照片";

//   // const imgUrl = "./image/WechatIMG38.jpeg"; // const无法引入相对路径的图片？？？
//   return (
//     <>
//       <div className="intro">
//       <h1>{p1}</h1>
//       </div>
//       <p className="summary" style={{
//         backgroundColor: 'skyblue'
//       }}>
//         {p2}
//         <b>{p3}</b>
//       </p>
//       <img className="catImg" src={imgUrl} alt="cat" />
//     </>
//   );
// }

// const person = {
//   name: 'Gregorio Y. Zara',
//   imgUrl: 'https://i.imgur.com/7vQD0fPs.jpg',
//   theme: {
//     backgroundColor: 'black',
//     color: 'pink'
//   }
// };

// export default function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}'s Todos</h1>
//       <img
//         className="avatar"
//         src={person.imgUrl}
//         alt="Gregorio Y. Zara"
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }


// const baseUrl = 'https://i.imgur.com/';
// const person = {
//   name: 'Gregorio Y. Zara',
//   imageId: '7vQD0fP',
//   imageSize: 's',
//   theme: {
//     backgroundColor: 'black',
//     color: 'pink'
//   }
// };

// 适当的封装函数，可以使代码更加简洁
// import { getImgUrl } from './util';
// export default function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}'s Todos</h1>
//       <img
//         className="avatar"
//         // src={baseUrl+person.imageId+person.imageSize+".jpg"}
//         src={getImgUrl(person)}
//         alt={person.name}
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }

// 父组件使用prop向子组件传递数据
// function Avatar({person, size}) {
//   return (
//     <img
//       className="avatar"
//       src={getImgUrl(person)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// export default function Profile() {
//   return (
//     <>
//       <Avatar 
//         person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
//         size={100}
//       />
//       <Avatar
//       size={80}
//       person={{
//         name: 'Aklilu Lemma', 
//         imageId: 'YfeOqp2'
//       }}
//       />
//     </>
//   );
// }

// function Profile({ person, size, isSepia, thickBorder }) {
//   return (
//     <div className="card">
//       <Avatar
//         person={person}
//         size={size}
//         isSepia={isSepia}
//         thickBorder={thickBorder}
//       />
//     </div>
//   );
// }
// 展开语法（克制使用，频繁复用这个组件会有问题）
// function Profile(props) {
//   return (
//     <div className="card">
//       <Avatar {...props} />
//     </div>
//   );
// }

// 组件嵌套
import Avatar from './Avatar';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}


