import React from 'react';
import {TextInput, Button, View} from 'react-native';

const placeInput = (props) => (
    <View style={styles.inputContainer}>
        <TextInput style={{width: 300}} value={props.placeName} placeholder="Name"
                   onChangeText={props.placeNameChangeHandler}/>
        <Button title="Add" onPress={props.placeSubmitHandler} style={styles.buttonStyle}/>
    </View>
);

const styles = {
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputStyle: {
        width: '70%'
    },
    buttonStyle: {
        width: '30%'
    }
}
export default placeInput;