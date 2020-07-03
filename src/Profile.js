import React from 'react';
import {Text, View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import bridge from "@vkontakte/vk-bridge";


class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    componentDidMount() {
   
    //    const data = bridge.send('VKWebAppGetUserInfo', {});
    //    console.log(data)

    bridge.subscribe(event => {
        if (!event.detail) {
          return;
        }
       
        const { type, data } = event.detail;
       this.setState({
           name: data.first_name + " " + data.last_name
       })
       
      });
       
      // Sending method
      bridge.send('VKWebAppGetUserInfo', {});
    

    }

    render() {
        return (
            <View>
            <Text>{this.state.name}</Text>
        </View>
        );
    }
} 

export default Profile;