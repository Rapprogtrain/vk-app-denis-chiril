import React from 'react';
import {Text, View, Link, Header, Avatar, PanelHeader, Title, Cell} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import bridge from "@vkontakte/vk-bridge";

import jsonExercises from './Exercise/exercises.json'
import pushUpsImage from './img/push_ups_new.png'


class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
         username: '',
         allData: [],
         id: null,
         recDubl: '',
         fetchedUser: null,
         authToken : null
        }
        this.changePanelNow = this.changePanelNow.bind(this);
      }
    
       componentDidMount() {
        // const response = bridge.send("VKWebAppGetUserInfo", {});
        // alert(JSON.stringify(response))
       
   
       const data = bridge.send('VKWebAppGetUserInfo', {});
       console.log(data)


var countsHands = jsonExercises.map(item => item.level_hands_has_to_min);
var countsBody = jsonExercises.map(item => item.level_body_has_to_min);
var countsLegs = jsonExercises.map(item => item.level_legs_has_to_min);
var goal = 0;

var closestHands = countsHands.reduce((prev, curr) => {
  return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
});

var closestBody = countsBody.reduce((prev, curr) => {
  return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
});

var closestLegs = countsLegs.reduce((prev, curr) => {
  return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
});

let indexHands = jsonExercises.find(item => item.level_hands_has_to_min == closestHands);
let indexBody = jsonExercises.find(item => item.level_hands_has_to_min == closestBody);
let indexLegs = jsonExercises.find(item => item.level_hands_has_to_min == closestLegs);

const findDuplicates = (arr) => {
  let sorted_arr = arr.slice().sort(); 
  
  let results = [];
  for (let i = 0; i < sorted_arr.length - 1; i++) {
    if (sorted_arr[i + 1] == sorted_arr[i]) {
      results.push(sorted_arr[i]);
    }
  }
  return results;
}

const newDubl = findDuplicates([indexHands.id, indexBody.id, indexLegs.id]);
alert([indexHands.id, indexBody.id, indexLegs.id])
this.setState({
  recDubl: newDubl
})


    }
       
    recomendation() {
      const dataExercise = jsonExercises.find(item => item.id == this.state.recDubl)
      if (dataExercise) {
      return (
        <div style={{border: "1px solid silver", borderRadius: 3, marginTop: 10}} 
        onClick={() => dataExercise.multi ? this.changePanelNow("allExercise", dataExercise.id, dataExercise.id) : this.changePanelNow("exercise", dataExercise.id, 0)}>
        <img src={dataExercise.image} style={{maxWidth: "100%"}}></img>
   <Text style={{backgroundColor: "#f7f7f7", borderTop: "1px solid silver", padding: 8, fontSize: 18}}>{dataExercise.title}</Text>
        </div>
      )
      }
    }
      
      changePanelNow(panel, id, prevId) {
          this.props.chanePanel(panel, id, prevId);
      }

    
    render() {
        return (

<div>
			
                 <div style={{padding: 10}}>



<Title level="1" weight="bold" style={{ marginBottom: 5 }}>Рекомендуем</Title>
    <div>

        

                   {this.recomendation()}

                   <Title level="1" weight="bold" style={{ marginBottom: 16, marginTop: 15 }}>Другие</Title>

<div>

<div style={{display: "flex", justifyContent: 'space-between', flexWrap: "wrap"}}>

{jsonExercises.slice(0, 5).map(data => {
                     return (
                      <div style={{border: "1px solid silver", borderRadius: 3, marginTop: 10, width: "48%"}} 
                      onClick={() => data.multi ? this.changePanelNow("allExercise", data.id, data.id) : this.changePanelNow("exercise", data.id, 0)}>
                      <img src={data.image} style={{maxWidth: "100%"}}></img>
                 <Text style={{backgroundColor: "#f7f7f7", borderTop: "1px solid silver", padding: 8, fontSize: 18}}>{data.title}</Text>
                      </div>
                     )
                   })}

  
</div>

</div>



</div>
              
            </div>

           

           
                 </div>
            


 
        );
    }
}

export default Main;