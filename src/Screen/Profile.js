import React, { useEffect } from "react";
import { Image, Text, View, StyleSheet } from "react-native";


function Profile() {
  return (
    <View style = {styles.container}>
        <View style = {styles.userInforWraper}>
            <Image
            source={require("../assets/images/profile.png")}
            />
            <View style = {styles.userInforData}>
                <Text style={{fontSize: 20, fontWeight: '700', color: '#091C3F'}}>Hi, Ben Cline</Text>
                <Text style={{fontSize: 14, fontWeight: '400'}}>Welcome to Medtech</Text>
            </View>
        </View>
        <View style = {styles.mainContent}>
            <View style = {styles.profileItems}>
                <Image
                style = {{marginRight: 20}}
                source={require("../assets/images/iconProfile1.png")}
                />
                <View style = {styles.Items}>
                    <Text>Private Account</Text>
                    <Image
                    style = {{alignSelf: 'flex-end'}}
                    source={require("../assets/images/iconProfile1.png")}
                    />
                </View>
            </View>
            <View style = {styles.profileItems}>
                <Image
                style = {{marginRight: 20}}
                source={require("../assets/images/iconProfile1.png")}
                />
                <View style = {styles.Items}>
                    <Text>My Consults</Text>
                    <Image
                    source={require("../assets/images/iconProfile1.png")}
                    />
                </View>
            </View>
            <View style = {styles.profileItems}>
                <Image
                style = {{marginRight: 20}}
                source={require("../assets/images/iconProfile1.png")}
                />
                <View style = {styles.Items}>
                    <Text>My orders</Text>
                    <Image
                    source={require("../assets/images/iconProfile1.png")}
                    />
                </View>
            </View>
            <View style = {styles.profileItems}>
                <Image
                style = {{marginRight: 20}}
                source={require("../assets/images/iconProfile1.png")}
                />
                <View style = {styles.Items}>
                    <Text>Billing</Text>
                    <Image
                    source={require("../assets/images/iconProfile1.png")}
                    />
                </View>
            </View>
            <View style = {styles.profileItems}>
                <Image
                style = {{marginRight: 20}}
                source={require("../assets/images/iconProfile1.png")}
                />
                <View style = {styles.Items}>
                    <Text>Faq</Text>
                    <Image
                    source={require("../assets/images/iconProfile1.png")}
                    />
                </View>
            </View>
            <View style = {styles.profileItems}>
                <Image
                style = {{marginRight: 20}}
                source={require("../assets/images/iconProfile1.png")}
                />
               <View style = {styles.Items}>
                <Text>Settings</Text>
                    <Image
                   source={require("../assets/images/iconProfile1.png")}
                    />
               </View>
            </View>
        </View>
        
    </View>
  );
}

export default Profile;

const styles =  StyleSheet.create({
    container:{
        paddingBottom: 48,
        paddingLeft: 23,
        paddingRight: 23,
    },
    userInforWraper:{
        marginTop: 26,
        flexDirection: 'row',
        alignItems: 'center'
    },
    mainContent:{
        marginTop: 42,
    },
    profileItems:{
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 14,
        borderBottomWidth: 1,
        borderColor: '#091C3F14',
        borderStyle: 'solid'
    },
    Items:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});