import React, { Component } from 'react'
import { View, Animated, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

const HEIGHT = Dimensions.get('window').height

class Modal extends Component {
    state = {
        modal: new Animated.Value(HEIGHT)
    }

    componentWillReceiveProps(){
        if(this.props.show){
            Animated.timing(this.state.modal, {
                toValue: 0
            }).start()
        }else{
            Animated.timing(this.state.modal, {
                toValue: HEIGHT
            }).start()
        }
    }

    render(){
        return(
            <Animated.View style={[styles.Container, {
                top: this.state.modal
            }]}>
                <View style={styles.Modal}>
                    <Text>Hi, i`m modal</Text>
                    <TouchableOpacity onPress={this.props.onPress}>
                        <Text>Close me</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        position: 'absolute',
        top: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        width: '100%',
        height: '100%',
        paddingLeft: 13,
        paddingRight: 13,
        paddingTop: 100
    },
    Modal: {
        backgroundColor: '#FFF',
        width: '100%',
        height: 500,
        borderRadius: 8,
        padding: 10
    }
})

export { Modal }