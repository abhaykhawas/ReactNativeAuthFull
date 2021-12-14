import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import BasicButton from "./BasicButton";
import LoginSignUpBtn from './LoginSignUpBtn';



export default function Login() {
    const [email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    
function handleLoginBtnClick() {
    console.log("login clicked", email, Password);
}

function handleSignUpBtnClick(){
    console.log("signup clicked")
}

    return(
        <ScrollView style={styles.container}>
            <Text stryle={styles.title}>Login</Text>
            <View style={styles.form}>
                <Text style={styles.label}>Email Adress</Text>
                <TextInput
                    style={styles.inputField}
                    keyboardType="email-address"
                    placeholder="Enter your email"
                    onChangeText={(val)=> setEmail(val)}
                />
                <View style={styles.divider}></View>
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder="Enter pass"
                    secureTextEntry
                    onChangeText={(val)=> setPassword(val)}
                />
            </View>

            <BasicButton
                text="Login"
                onPress={handleLoginBtnClick}
            />

            <LoginSignUpBtn
                text="Don't have an account?"
                btnText = "Sign Up"
                onPress={handleSignUpBtnClick}
                customStyle = {styles.signup}
            />
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 60,
        paddingHorizontal: 30
    },
    title:{
        fontWeight: '500',
        fontSize: 20,
        letterSpacing: 0.1,
        color: 'black'
    },
    form:{
        marginVertical: 35
    },
    label:{
        fontSize: 16,
        lineHeight: 18,
        color: '#666666',
        marginBottom: 3,
    },
    inputField:{
        fontSize: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#bfbfbf',
        paddingVertical: 6,
    },
    divider:{
        paddingVertical: 12
    },
    signup: {
        marginTop: 40,
    }

})