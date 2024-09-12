import React,{useState} from 'react';
import { StyleSheet, View, Text,Button } from 'react-native';


//Importing Component
import ScCollection from '../../components/ScCollection';  
import Page1 from '@/components/Page1';
import Page2 from '@/components/Page2';
import Page3 from '@/components/Page3';

//Importing packages for navigation
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


// HomeScreen Component
export default function HomeScreen() {
  // Create the Top Tab Navigator
  const Tab = createMaterialTopTabNavigator();

  //Const to set color
  const [color,setColor] = useState('white');
  const [background,setBackground] = useState('whitesmoke');
  const [contentColor,setContentColor] = useState('white');

  return (
    <NavigationContainer independent={true}>
      <View style={styles.mainContainer}>
        <Text style={{color:background,backgroundColor:color,paddingTop:30,fontSize:30,padding:10,fontWeight:'bold'}} >Color Palette</Text>
        <View style={styles.subMainContainer}>
          <View style={[styles.mainBox, { backgroundColor: background }]}>
            <View style={[styles.leftBar, { backgroundColor: color }]}>
              <View style={[styles.closeTabs]}>
                <View
                  style={[styles.CloseTab, { backgroundColor: contentColor }]}
                ></View>
                <View
                  style={[styles.CloseTab, { backgroundColor: contentColor }]}
                ></View>
                <View
                  style={[styles.CloseTab, { backgroundColor: contentColor }]}
                ></View>
              </View>
              <View style={styles.leftBoxContainer}>
                <View
                  style={[
                    styles.leftBoxContent,
                    { backgroundColor: contentColor }
                  ]}
                ></View>
                <View
                  style={[
                    styles.leftBoxContent,
                    { backgroundColor: contentColor }
                  ]}
                ></View>
                <View
                  style={[
                    styles.leftBoxContent,
                    { backgroundColor: contentColor }
                  ]}
                ></View>
              </View>
            </View>
            <View style={styles.rightContainer}>
              <View style={[styles.TopNav, { backgroundColor: color }]}>
                <View style={styles.navBarContainer}>
                  <View
                    style={[
                      styles.topNavBar,
                      { backgroundColor: contentColor }
                    ]}
                  ></View>
                  <View
                    style={[
                      styles.topNavBar,
                      { backgroundColor: contentColor }
                    ]}
                  ></View>
                  <View
                    style={[
                      styles.topNavBar,
                      { backgroundColor: contentColor }
                    ]}
                  ></View>
                </View>
              </View>
              <View style={[styles.bodyContainer, { backgroundColor: color }]}>
                <View style={styles.mainBodyContent}>
                  <View
                    style={[styles.box, { backgroundColor: contentColor }]}
                  ></View>
                  <View
                    style={[styles.box, { backgroundColor: contentColor }]}
                  ></View>
                  <View
                    style={[styles.box, { backgroundColor: contentColor }]}
                  ></View>
                  <View
                    style={[styles.box, { backgroundColor: contentColor }]}
                  ></View>
                  <View
                    style={[styles.box, { backgroundColor: contentColor }]}
                  ></View>
                  <View
                    style={[styles.box, { backgroundColor: contentColor }]}
                  ></View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: "#fff" }
        }}
      >
        {/* Screen for ScCollection */}
        <Tab.Screen name="FORGROUND">
          {(props) => <Page1 {...props} setColor={setColor} />}
        </Tab.Screen>
        <Tab.Screen name="BACKGROUND">
          {(props) => <Page2 {...props} setBackground={setBackground} />}
        </Tab.Screen>
        <Tab.Screen name="CONTENT">
          {(props) => <Page3 {...props} setContentColor={setContentColor} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 300,
    backgroundColor: "white"
  },
  subMainContainer: {
    alignItems: "center",
    justifyContent: "center",
    // paddingTop:20,
    flex: 1
  },
  mainBox: {
    height: 220,
    width: 330,
    backgroundColor: "whitesmoke",
    borderRadius: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  leftBar: {
    height: 180,
    width: 90,
    backgroundColor: "white",
    borderRadius: 20
  },
  rightContainer: {
    width: 190,
    height: 180,
    display:'flex',
    justifyContent:'space-between',
  },
  TopNav: {
    height: 40,
    borderRadius: 20,
    backgroundColor: "white"
  },
  bodyContainer: {
    height: 130,
    borderRadius: 20,
    backgroundColor: "white"
  },
  closeTabs:{
    width:'100%',
    // backgroundColor:'red',
    display:'flex',
    flexDirection:'row',
    padding:10,
  },
  CloseTab:{
    backgroundColor:'orange',
    height:15,
    width:15,
    borderRadius:10,
    marginRight:5,
  },
  leftBoxContainer:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  leftBoxContent:{
    height:30,
    width:70,
    backgroundColor:'orange',
    margin:5,
    borderRadius:15,
  },
  navBarContainer:{
    display:'flex',
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:20,
  },
  topNavBar:{
    height:15,
    width:40,
    backgroundColor:'orange',
    borderRadius:20,
  },
  mainBodyContent:{
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
    padding:5,
  },
  box:{
    height:45,
    width:45,
    margin:5,
    borderRadius:10,
    backgroundColor:'orange',
  },
});
