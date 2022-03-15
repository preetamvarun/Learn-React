class Greetings extends React.Component{
    static defaultProps = {
        from : 'Anonymous',
        bangs : 2
    }
    render(){
        let props = this.props;
        let bangs = "!".repeat(this.props.bangs);
        return(
            <div>
                <p>Hello {props.to}! Greetings from {props.from} {bangs}</p>
                <img src = {this.props.img}/>
            </div>      
        );
    }
}