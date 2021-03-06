import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Favorites from '../pages/Favorites';
import TeacherList from '../pages/TeacherList';

const { Navigator, Screen} = createBottomTabNavigator();

function StudyTabs() {
    return(
        <Navigator
            tabBarOptions={{ 
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20
                },
                labelStyle: {
                    fontFamily: 'Archivo_700Bold',
                    fontSize: 13,
                    marginLeft: 16
                },
                inactiveBackgroundColor: '#FAFAFC',
                activeBackgroundColor: '#EBEBF5',
                inactiveTintColor: '#C1BCCC',
                activeTintColor: '#32264D'
            }}
        >
            <Screen 
                options={{ 
                    tabBarLabel: 'Proffys',
                    tabBarIcon: ({ color, size, focused }) => {
                        return(
                            <Ionicons color={focused ? '#8257E5' : color} size={size} name="ios-easel" />
                        )
                    }
                }} 
                name="TeacherList" 
                component={TeacherList}
            />
            <Screen 
                options={{ 
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({ color, size, focused }) => {
                        return(
                            <Ionicons color={focused ? '#8257E5' : color} size={size} name="ios-heart" />
                        )
                    }
                }} 
                name="Favorites" 
                component={Favorites}
            />
        </Navigator>
    );
}

export default StudyTabs;