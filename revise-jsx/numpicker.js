function getNum(){
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component{
    render(){
        let x = getNum();
        let msg;
        if(x == 7){
            msg = 
            <div>
                <h3>Congrats! 🥳</h3>
                <img src = "https://c.tenor.com/qdg13PqYbxMAAAAC/yes-baby.gif"/>
            </div>
        } 
        else{
            msg = 
            <div>
                <h3>Oh No! You're unlucky this time 😥</h3>
                <img src = "https://c.tenor.com/csb2e86unZcAAAAM/ardcollegeno000%21-god%21-no-god.gif"/>
            </div>
        }
        return(
            <div>
                <h2>Your Number is {x}</h2>
                {msg}
            </div>
        );
    }
}