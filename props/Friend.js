class Friend extends React.Component{
    render(){
        const {name,hobbies}= this.props;
        return(
            <div>
                <h2>Hello World! My name is {name}</h2>
                <h3>And my hobbies are ..</h3>
                <ul>
                    {hobbies.map(h => <li>{h}</li>)}
                </ul>
            </div>
        )
    }
}

// We use maps to loop in jsx