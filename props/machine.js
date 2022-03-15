class Machine extends React.Component{
    render(){
        let msg = "";
        let props = this.props;
        (props.a === props.b && props.b === props.c) ? msg = "You Win!" : msg = "You Lose!"
        let inlineStyles = {fontSize : '50px', backgroundColor : 'red', borderRadius : '100px', margin : '.5rem'}
        return(
            <div className = "Machine">
                <span style = {inlineStyles}>{props.a}</span>
                <span>{props.b}</span>
                <span>{props.c}</span>
                <p className = 
                    {msg === "You Win!" ? 'win' : 'loose'}>
                    {msg}
                </p>
            </div>
        );
    }
}