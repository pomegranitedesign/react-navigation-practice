import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Main, List, Details, Search, SearchResults } from './screens'
import { HeaderRight } from './components'

const Stack = createStackNavigator()
export const MainStack = (props) => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerTitle: 'React Nav Practice',
				headerRight: () => <HeaderRight />,
				headerBackTitleStyle: { color: 'white' },
				headerStyle: {
					backgroundColor: '#5f27cd',
					height: 50
				},
				headerTitleStyle: {
					color: 'white'
				}
			}}
		>
			<Stack.Screen name="Main" component={Main} />
			<Stack.Screen name="List" component={List} />
			<Stack.Screen name="Details" component={Details} />
			<Stack.Screen name="Search" component={Search} />
			<Stack.Screen name="SearchResults" component={SearchResults} />
		</Stack.Navigator>
	)
}
