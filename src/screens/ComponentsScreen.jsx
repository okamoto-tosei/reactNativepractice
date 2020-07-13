import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ComponentsScreen = () => {
    const name = 'Stephen';

    return(
        <View>
            <Text style={styles.textStyle}>This is the components screen</Text>
            <Text style={styles.subHeaderStyle}>My name is {name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,

    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;