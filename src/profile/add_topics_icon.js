import React from 'react';
import {Image,Platform,StyleSheet,Text,View} from 'react-native';
import { Icon } from '@ant-design/react-native';

export default class AddTopicsIcon extends React.Component{
    render(){
        return (
            <View style={styles.circle}>
            {/* <Image source={}/> */}
                <Icon
                    name = {'plus'}
                    size = {20}
                    color = 'red'
                    style = {styles.addTopics}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    circle:{
        height: 30,
        width: 30,
        borderRadius: 17.5,
        borderColor: "red",
        borderWidth: 1
    },
    addTopics: {
        position: 'absolute',
        top: 4,
        left: 4
    }
});
