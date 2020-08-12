import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Main = (props) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate('List', {
						newData: [
							{ id: 1, title: 'Hello World' },
							{ id: 2, title: 'of coding' },
							{ id: 3, title: 'Lorem ipsum' },
							{ id: 4, title: 'dolor sit amet' }
						]
					})}
			>
				<Text>Go to Details Page</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 20
	}
})

export default Main
