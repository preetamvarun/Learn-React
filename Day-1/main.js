class HelloWorld extends React.Component{
    render(){
        return(
            <h1>Hello World</h1>
        );
    }
}

/* RecatDOM.render() method tell what component to render and where to render it */

ReactDOM.render(<HelloWorld/>, document.getElementById('insert'));


/*If we were to render multiple tags we wrap all of those tags in one single tag and render that tag*/

class Greetings extends React.Component{
    render(){
        return(
            <div>
                <h2>Hello EveryOne!</h2>
                <p>I am learning react</p>
            </div>
        );
    }
}

ReactDOM.render(<Greetings/>,document.getElementById('classComponents'));


/* THIS IS NOT RENDERING */

function fun(){
    return (
        <p>Testing function component</p>
    );
}

ReactDOM.render(<fun/>, document.getElementById('insert'));