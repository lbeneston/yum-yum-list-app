import React from 'react'
import { render, screen } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Explore from './explore'

const Tab = createBottomTabNavigator()

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Explore">{() => children}</Tab.Screen>
    </Tab.Navigator>
  </NavigationContainer>
)

describe('<Explore />', () => {
  it('Should render correctly', () => {
    render(<Explore />, { wrapper: Wrapper })
    expect(screen).toMatchSnapshot()
  })
})
