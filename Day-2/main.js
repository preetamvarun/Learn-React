/* SELF CLOSING TAGS NEED TO HAVE A / AT THE END OF THE TAG */


class App extends React.Component{
    render(){
        return(
            <div>
                <NumberPicker/>
                <MoodComponent/>
                <JSXDemo/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));


/* HOW JSX WORK BEHIND THE SCENES */

// class Test extends React.Component {
//     render(){
//         return (
//             React.createElement("h1", null, " This is the main heading ")
//         );
//     }
// }








