// WRITING MY FIRST OWN COMPONENT 

// class HelloWorld extends React.Component{
//     render(){
//         return <h1>Hello World</h1>;
//     }
// }

// ReactDOM.render(<HelloWorld/>, document.getElementById('root'));

// IF WE HAVE TO RENDER MULTIPLE ELEMENTS IN A SINGLE COMPONENET 


// class HelloWorlds extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>Hello World</h1>
//                 <h2>Hello World</h2>
//                 <h3>Hello World</h3>
//             </div>
//         );
//     }
// }

// ReactDOM.render(<HelloWorlds/>, document.getElementById('root'));


// WRITING FUNCTIONAL COMPONENTS

// function HelloWorlds(){
//     return (
//         <div>
//             <h1>Testing function components</h1>
//             <p>This is to a sample paragraph</p>
//         </div>
//     );
// }

// ReactDOM.render(<HelloWorlds/>, document.getElementById('root'));


// EMBEDDING JAVASCRIPT IN THE JSX

// TO WRITE JAVASCRIPT CODE INSIDE THE JSX WE EMBED THAT CODE INSIDE CURLY BRACES

// class JSXDemo extends React.Component{
//     render(){
//         return(
//             <h2>{2 * 10} is an even number</h2>
//         )
//     }
// }

// ReactDOM.render(<JSXDemo/>, document.getElementById('root'));


// function getMood(){
//     let moods = ['😡','😥','😂','🙄','🙂','😇'];
//     return moods[Math.floor(Math.random()*moods.length)];
// }

// class MoodGetter extends React.Component{
//     render(){
//         return(
//             <h2>My Current Mood is {getMood()}</h2>
//         );
//     }
// }

// ReactDOM.render(<MoodGetter/>, document.getElementById('root'));



// CONDITIONAL LOGIC IN JSX 

// function getNum(){
//     return Math.floor(Math.random() * 10) + 1;
// }

// class NumPicker extends React.Component{
//     render(){
//         let x = getNum();
//         return(
//             <div>
//                 <h2> Test Your Luck !</h2>
//                 <p> Your Number is {x}</p>
//                 <p>{x == 7 ? 'You are Lucky 🥳' : 'You are unlucky this time 😯'}</p>
//                 {x == 7 && <img src = "https://c.tenor.com/qdg13PqYbxMAAAAC/yes-baby.gif"/>}
//             </div>
//         )
//     }
// }

// ReactDOM.render(<NumPicker/>, document.getElementById('root'));


// function getNum(){
//     return Math.floor(Math.random() * 10) + 1;
// }

// class NumPicker extends React.Component{
//     render(){
//         let x = getNum();
//         let msg;
//         if(x == 7){
//             msg = 
//             <div>
//                 <h3>Congrats! 🥳</h3>
//                 <img src = "https://c.tenor.com/qdg13PqYbxMAAAAC/yes-baby.gif"/>
//             </div>
//         } 
//         else{
//             msg = 
//             <div>
//                 <h3>Oh No! You're unlucky this time 😥</h3>
//                 <img src = "https://c.tenor.com/csb2e86unZcAAAAM/ardcollegeno000%21-god%21-no-god.gif"/>
//             </div>
//         }
//         return(
//             <div>
//                 <h2>Your Number is {x}</h2>
//                 {msg}
//             </div>
//         );
//     }
// }

// ReactDOM.render(<NumPicker/>, document.getElementById('root'));


// STANDARD REACT APP LAYOUT

// FROM NOW ON WARDS WE CREATE A SEPARATE FILE FOR EACH COMPONENT

// AND THEN IN THE APP COMPONENT WE PUT ALL THE DIFFERENT COMPONENTS

// EXAMPLE

// class App extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h2>Render all the other components</h2>
//                 <Hello/>
//                 <NumPicker/>
//                 <MoodGetter/>
//             </div>
//         );
//     }
// }

// ReactDOM.render(<App/>, document.getElementById('root'));