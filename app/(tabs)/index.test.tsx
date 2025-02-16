import React from 'react'
import { render, screen } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './index'

const Tab = createBottomTabNavigator()

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home">{() => children}</Tab.Screen>
    </Tab.Navigator>
  </NavigationContainer>
)

describe('<Home />', () => {
  it('Should render correctly', () => {
    render(<Home />, { wrapper: Wrapper })
    expect(screen).toMatchSnapshot()
  })
})
