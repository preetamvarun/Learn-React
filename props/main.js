class App extends React.Component{
    render(){
        return(
            
            // <div>
            //     <Greetings 
            //         to = "preetam" 
            //         from = "balu" 
            //         bangs = {4}
            //         img = "https://c.tenor.com/csb2e86unZcAAAAM/ardcollegeno000%21-god%21-no-god.gif"
            //     />
            //     <Greetings 
            //         to = "varun" 
            //         from = "balu" 
            //         bangs = {3}
            //         img = "https://c.tenor.com/qdg13PqYbxMAAAAC/yes-baby.gif"
            //     />
            //     <Greetings
            //         to = "George"
            //         bangs = {2}
            //     />
            // </div>

            <div>
                <Machine
                    a = "🍇"
                    b = "🍊"
                    c = "🍎"
                />
                <Machine
                    a = "🍇"
                    b = "🍇"
                    c = "🍇"
                />
                <Machine
                    a = "🍎"
                    b = "🍎"
                    c = "🍊"
                />
            </div>

            // <div>
            //     <Friend
            //         name = "Elliot"
            //         hobbies = {["hacking","dancing","singing","swimming"]}
            //     />
            // </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));