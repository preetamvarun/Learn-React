/* LEARNING CONDITIONALS IN JSX */

function NumPick(){
    return Math.floor(Math.random() * 5) + 1;
}

class NumberPicker extends React.Component{
    render(){
        let num = NumPick();
        let msg;
        num === 5 ? msg = 'Good Pick' : msg = 'Bad Pick';
        return(
            <div>
                <h1>Your number is : {num}</h1>
                <h2>{msg}</h2>
            </div>
        );
    }
}