class Machine extends React.Component{

    static defaultProps = {
        a : '🍓',
        b : '🍓',
        c : '🍓'
    };

    render(){

        let msg = ((this.props.a === this.props.b) && (this.props.b === this.props.c)) ? true : false;

        let result = msg ? "You Win 😄!!" : "You Loose 😭!!";

        const fruitStyle = {fontSize : '50px', background : 'orange'};

        return(
            <div className = "Machine">
                {/*Inline-styling*/}
                <p style = {fruitStyle}> {this.props.a} {this.props.b} {this.props.c}</p>
                
                {/*Conditional-Styling*/}
                <p className = {
                    msg ? 'Machine-win' : 'Machine-loose'
                }>

                {result}</p>
            </div>
        )
    }
}

class Friend extends React.Component{
    render(){
        const {name,hobbies} = this.props;
        const lis = hobbies.map(h => <li>{h}</li>);
        return(
            <div>
                <h1>My friend : {name}</h1>
                <p>Her hobbies : </p>
                <ul>
                    {lis}
                </ul>
            </div>
        )
    }
}