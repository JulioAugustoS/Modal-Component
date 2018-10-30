import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Modal } from './components/common/Modal'

class App extends Component {
    state = {
        show: false
    }

    render(){
        return(
            <View style={styles.Container}>
                <TouchableOpacity onPress={() => this.setState({show: true})}>
                    <Text>Open Modal</Text>
                </TouchableOpacity>

                <Modal 
                    show={this.state.show}
                    onPress={() => this.setState({show: false})}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default App