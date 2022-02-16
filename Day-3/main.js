class App extends React.Component{
    render(){
        return(
            <div>
                {/*Using default props in data componenet*/}
                <Data from = "preetam" to = "manoj"/>
                <Data to = "manoj"/>

                <Greetings 
                    to = "David" num = {3} city = "Italy" isExciting
                    boring = {false} arr = {[1,2,3,4,5,6]}  />
                <Greetings 
                    to = "Frida" city = "Greece" isExciting
                    boring = {false} arr = {[1,2,3,4,5,6]} />
                <Machine a = "🍊" b = "🍎" c = "🍓" />
                <Machine a = "🍊" b = "🍊" c = "🍊" />
                <Machine a = "🍓" b = "🍎" c = "🍓" />
                <Machine/>
                <Friend name = "Frida"
                    hobbies = {['singing','dancing','painting','drawing']} />
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));