import React from 'react';
import {Tabbar, TabbarItem, Panel, PanelHeader, View, Epic, Text} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon28Newsfeed from '@vkontakte/icons/dist/28/newsfeed';
import Icon28PictureOutline from '@vkontakte/icons/dist/28/picture_outline';
import Main from './Main'
import Series from './Series'

class App extends React.Component {
	constructor (props) {
		super(props);
	
		this.state = {
		  activeStory: 'Main'
		};
		this.onStoryChange = this.onStoryChange.bind(this);
	  }
	
	  onStoryChange (e) {
		this.setState({ activeStory: e.currentTarget.dataset.story })
	  }
	
    render() {
        return (
            <Epic activeStory={this.state.activeStory} tabbar={
				<Tabbar>
				  <TabbarItem
					onClick={this.onStoryChange}
					selected={this.state.activeStory === 'Main'}
					data-story="Main"
					text="Новости"
				  ><Icon28Newsfeed /></TabbarItem>
				  <TabbarItem
					onClick={this.onStoryChange}
					selected={this.state.activeStory === 'Series'}
					data-story="Series"
					text="Сериалы"
				  ><Icon28PictureOutline /></TabbarItem>
				</Tabbar>
			  }>
				<View id="Main" activePanel="Main">
				  <Panel id="Main">
					<PanelHeader>Новости</PanelHeader>
					<Main />
				  </Panel>
				  <Main />
				</View>

				<View id="Series" activePanel="Series">
				  <Panel id="Series">
					<PanelHeader>Сериалы</PanelHeader>
					<Series />
				  </Panel>
				</View>
			  </Epic>
        );
    }
}

export default App;