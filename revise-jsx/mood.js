function getMood(){
    let moods = ['😡','😥','😂','🙄','🙂','😇'];
    return moods[Math.floor(Math.random()*moods.length)];
}

class MoodGetter extends React.Component{
    render(){
        return(
            <h2>My Current Mood is {getMood()}</h2>
        );
    }
}
