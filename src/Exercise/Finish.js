import React from 'react';
import { Div, CellButton, Title } from '@vkontakte/vkui';
import jsonExercises from './exercises.json'


class Finish extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
        this.changePanelNow = this.changePanelNow.bind(this);
    }

    componentDidMount() {
        let findData = jsonExercises.find(item => item.id === this.props.id)
        if (findData) {
            this.setState({
                title: findData.title,
            })

            var nowLevelHands = localStorage.getItem("hands_level");
            var nowLevelBody = localStorage.getItem("body_level");
            var nowLevelLegs = localStorage.getItem("legs_level");

            var newDataHands = (Number(nowLevelHands) + findData.ads_level_to_hands).toFixed(1);
            var newDataBody = (Number(nowLevelBody) + findData.ads_level_to_body).toFixed(1);
            var newDataLegs = (Number(nowLevelLegs) + findData.ads_level_to_legs).toFixed(1)


            localStorage.setItem("hands_level",newDataHands);
            localStorage.setItem("body_level", newDataBody);
            localStorage.setItem("legs_level", newDataLegs);
        }
          }

    changePanelNow() {
        this.props.changePanel();
    }

    render() {
        return (
          <Div>
<Title level="1" weight="bold" style={{ marginBottom: 16 }}>{this.state.title}</Title>

                    Сделано!
                    <CellButton onClick={() => this.changePanelNow()}>Main</CellButton>
                    
                    </Div>
        )
    }
}

export default Finish;