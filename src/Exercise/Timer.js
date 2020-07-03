import React from 'react';
import { Button, Title, View, Progress, Text } from '@vkontakte/vkui';
import image from '../img/UJAnRhJ.gif'

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: 1,
            seconds: 0,
            show: true,
            valueProgress: 0,
            totalTime: 59,
            notProgressCircle: 0
           }
        this.timerStart = this.timerStart.bind(this);
        this.changePanelNowNew = this.changePanelNowNew.bind(this);
    }

    componentDidMount() {
        this.timerStart();
    }

    changePanelNowNew() {
        this.props.changePanelToFinish();
    }

     getCircumference() {
		var radius = 60;
    var circumference = Math.PI*(radius*2);
    for(var i=0; i<=10; i++){
      var circle = {
        percentage : i* 10,
        circumference: circumference
      };
     return circle.circumference;
    }
}


    timerStart() {
        this.setState({ show: false });
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            const hasToAdd = (100/this.state.totalTime)
            const toAddCirc = this.getCircumference()/100;

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1,
                    valueProgress: this.state.valueProgress + hasToAdd,
                    notProgressCircle: this.state.notProgressCircle + (hasToAdd*toAddCirc)
                }))
            }
            console.log(this.state.notProgressCircle)
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
        }, 1000)
    }


    render() {
        const { minutes, seconds } = this.state;
        return (
          
    <div style={{ display: "grid", justifyContent: "center" }}>
              <img src={image} style={{ maxWidth: '100%'}} />
                <div>
                                      
                                
                    {/* {minutes === 0 && seconds === 0 */}
                        {/* ? <Title level="1" weight="bold">Сделано!</Title> */}
                        {/* : */}
                        <div>
                            {/* <Title level="1" weight="bold">Время: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</Title> */}
                           <div >
                            {/* <Progress value={this.state.valueProgress} style={{marginTop:10 */}
                            {/* }}/> */}

                            <div style={{ display: "grid", justifyContent: "center" }}>

<svg style={{transform: 'rotate(-90deg)',height: 130, width: 130}} xmlns="http://www.w3.org/2000/svg">
<text transform="rotate(90,65,65)" x="65" y="65" alignment-baseline="middle" text-anchor="middle" font-size="35">
{this.state.seconds}
    </text>
        <circle style={{fill: 'none',
	stroke: 'white',
	strokeWidth:10}} cx="65" cy="65" r="60"></circle>
        <circle style={{fill: 'none',
	stroke: '#3f8ae0',
	strokeWidth: 6,
	strokeDasharray: this.state.notProgressCircle+', 999',
	strokeDashoffset: 0,
    transition: 'strokeDasharray 0.7s linear 0s'}} cx="65" cy="65" r="60"></circle>
    </svg>

                          </div>
                            </div>
                            </div>
                 {/* } */}
                 <div style={{paddingTop: 15,paddingBottom: 10,display: "flex",justifyContent: "center"}}>
                           <Button size="l" style={{backgroundColor: "#3f8ae0", color: "white"}} onClick={this.changePanelNowNew}>Закончить</Button>
                           </div>
                       
                </div>
                </div>
                
           
        )
    }
}

export default Timer;