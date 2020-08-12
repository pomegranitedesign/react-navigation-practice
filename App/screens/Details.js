import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Details = (props) => {
	const data = props.route.params.data
	return (
		<View style={styles.container}>
			<Text>{data.title}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default Details
