import React from 'react';
import {Tabbar, TabbarItem, Panel, PanelHeader, View, Group, Cell, Avatar, PanelHeaderBack, Epic} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon28Newsfeed from '@vkontakte/icons/dist/28/newsfeed';
import Icon28PictureOutline from '@vkontakte/icons/dist/28/picture_outline';
import Main from './Main'
import Profile from './Profile'
import Exercise from './Exercise/Exercise'
import AllExercise from './AllExercise'

import Abs from './img/UJAnRhJ.gif'
import pushUpsImage from './img/push_ups_new.png'

import Timer from './Exercise/Timer'
import Finish from './Exercise/Finish'

import jsonExercises from './Exercise/exercises.json'


class App extends React.Component {
	constructor (props) {
		super(props);
	
		this.state = {
			activePanel: 'panel1',
			activeStory: 'panel1',
			activeId: 0,
			prevActiveId: 0
		};
		this.onStoryChange = this.onStoryChange.bind(this);
	  }
	
	  onStoryChange (e) {
		this.setState({ activeStory: e.currentTarget.dataset.story })
	  }

	  componentDidMount() {
		if (localStorage.getItem("hands_level") === null) {
			localStorage.setItem("hands_level", 0)
		}
		if (localStorage.getItem("body_level") === null) {
			localStorage.setItem("body_level", 0)
		}
		if (localStorage.getItem("legs_level") === null) {
			localStorage.setItem("legs_level", 0)
		}
	  }
	
	  render() {
		return (
			<Epic activeStory={this.state.activeStory} tabbar={
<Tabbar>
				  <TabbarItem
					onClick={this.onStoryChange}
					selected={this.state.activeStory === 'panel1'}
					data-story="panel1"
					text="Главная"
				  ><Icon28Newsfeed /></TabbarItem>
				  <TabbarItem
					onClick={this.onStoryChange}
					selected={this.state.activeStory === 'PanelNew'}
					data-story="PanelNew"
					text="Профиль"
				  ><Icon28PictureOutline /></TabbarItem>
				</Tabbar>

}>

		  <View id="panel1" activePanel={this.state.activePanel}>
			<Panel id="panel1">
			<PanelHeader>Главная</PanelHeader> 
			  <Main chanePanel={(panel, id, prevId) => this.setState({ activePanel: panel, activeId: id, prevActiveId: prevId })} />
			</Panel>

			<Panel id="allExercise">
			  <PanelHeader separator={false} left={<PanelHeaderBack onClick={() => this.setState({ activePanel: 'panel1', activeId: 0 })}/>}>
				Список упражнений
			  </PanelHeader>
			
			  <AllExercise
			  changePanelNowNewStateExersice={(panel, id) => this.setState({ activePanel: panel, activeId: id })} 
			  id={this.state.activeId}
			  image={pushUpsImage}></AllExercise>
			
			</Panel>
			
			<Panel id="exercise">
			  <PanelHeader separator={false} left={<PanelHeaderBack onClick={() => this.setState({ activePanel: this.state.prevActiveId == 0 ? 'panel1' : 'allExercise', activeId: this.state.prevActiveId})}/>}>
				Упражнение
			  </PanelHeader>
			
			  <Exercise changePanelNowNewStateExersice={() => this.setState({ activePanel: 'panel3' })} 
			  id={this.state.activeId} image={Abs}></Exercise>
			
			</Panel>
 

			<Panel id="panel3">
			  <PanelHeader left={<PanelHeaderBack onClick={() => this.setState({ activePanel: 'panel1', activeId: 0 })}/>}>
				Таймер
			  </PanelHeader>
			  <Timer changePanelToFinish={() => this.setState({ activePanel: 'panel4' })}/>
			</Panel>

			<Panel id="panel4">
			  <PanelHeader left={<PanelHeaderBack onClick={() => this.setState({ activePanel: 'panel1', activeId: 0 })}/>}>
				Конец
			  </PanelHeader>
			  <Finish id={this.state.activeId} changePanel={() => this.setState({ activePanel: 'panel1' })}/>
			</Panel>

		  </View>


		  <View id="PanelNew" activePanel="PanelNew">
				  <Panel id="PanelNew">
					<PanelHeader>Профиль</PanelHeader>
					<Profile />
				  </Panel>
				</View>
		  			</Epic>
		)
	  }
	}

export default App;