import React from "react";
import { View, PanelHeader, Panel, Group, Div, Button, Text } from "@vkontakte/vkui";
import jsonExercises from './Exercise/exercises.json'

class AllExercise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePanel: 'header',
            id: this.props.id,
            allExerciseArray: []
        }
        this.changePanelNowNewExersice = this.changePanelNowNewExersice.bind(this);
    }

    changePanelNowNewExersice(panel, id) {
        this.props.changePanelNowNewStateExersice(panel , id,);
    }

    render() {
        let findData = jsonExercises.find(item => item.id === this.state.id)
        return (
            <div style={{ padding: 10}}> 
{findData.exercise.map(item => (

<div
style={{marginTop: 10, padding: 10, display: "flex", border: "1px solid silver",
background: "linear-gradient(90deg, rgba(56,56,56,1) 0%, rgba(54,54,54,1) 0%, rgba(255,255,255,1) 100%, rgba(0,212,255,1) 100%)",
borderRadius: 5,
justifyContent: "space-between",}}>
<div style={{    justifyContent: "space-between",
flexDirection: "column",
display: "flex"}}>
<Text style={{fontSize: 20,color: "white"}}>{item.title}</Text>
<Button style={{color: "white",
borderColor: "white"}} mode="outline" onClick={() => this.changePanelNowNewExersice("exercise", item.id)}>Начать</Button>
</div>
<img src={this.props.image} alt='Abs' style={{width: 150}} />
</div>

                
           ))
}
</div>
)
    }
}

export default AllExercise;