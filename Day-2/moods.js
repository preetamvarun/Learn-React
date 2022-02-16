
/* EMBEDDING JAVASCRIPT IN JSX */

/* We can embed javascript in jsx by using {} braces */

function getMood(){
    let Moods = ['Angry','Happy','Silly','Paranoid','Quiet','Hungry'];
    return Moods[Math.floor(Math.random() * Moods.length)];
}

class MoodComponent extends React.Component{
    render(){
        return(
            <div>
                {/* EMBEDDING JAVSCRIPT IN JSX */}
                <h1>My current mood is : {getMood()} </h1>
            </div>
        )
    }
}