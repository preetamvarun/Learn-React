class Greetings extends React.Component{

    static defaultProps = {
        num : 2,
    };

    render(){
        let num = '!'.repeat(this.props.num);
        {/*console.log(this.props);*/}
        return(
            <p>Hey {this.props.to} {num} Welcome to {this.props.city}</p>
        )
    }
}