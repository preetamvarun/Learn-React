class Data extends React.Component{

    static defaultProps = {
        from : "Anonymous",
    }

    render(){
        {/*props are immutable
        That means we can't do something like..
        this.props.from = "yashwanth"
        */} 
        return(
            <p> This is some data from {this.props.from} to {this.props.to}</p>
        )
    }
}