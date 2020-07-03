import React from "react";
import { View, PanelHeader, Panel, Group, Div, Title, Button } from "@vkontakte/vkui";
import jsonExercises from './exercises.json'


class Exercise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePanel: 'header',
            title: '',
            description: ''
        }
        this.changePanelNowNewExersice = this.changePanelNowNewExersice.bind(this);
    }

 componentDidMount() {
    let findData = jsonExercises.find(item => item.id === this.props.id)
    if (findData) {
        this.setState({
            title: findData.title,
            description: findData.description
        })
    }
      }

    changePanelNowNewExersice() {
        this.props.changePanelNowNewStateExersice();
    }

    render() {
        return (
            
           <div>
                    <Group>
                        <img src={this.props.image} alt='Abs' style={{ maxWidth: '100%', paddingTop: 10, display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
                        <Div>
                            <Title level="1" weight="bold" style={{ marginBottom: 16 }}>{this.state.title}</Title>
                           {this.state.description}
                        </Div>

                        <Div>
       <Button size="xl" style={{backgroundColor: "#3f8ae0", color: "white"}} onClick={() => this.changePanelNowNewExersice()}>Начать</Button>
     </Div>

                    </Group>
       
        
     </div>
        )
    }
}

export default Exercise;