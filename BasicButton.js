import React from 'react';
import { StyleSheet,
         Text,
         TouchableOpacity } 
        from 'react-native';


export default function BasicButton({
    text,
    onPress,
}) {
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        borderRadius: 8,
        padding: 10,
    },

    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#ffffff',
        textAlign: 'center'
    },
})