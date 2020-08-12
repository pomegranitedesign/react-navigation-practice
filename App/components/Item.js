import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Item = ({ data, ...props }) => {
	return (
		<TouchableOpacity
			onPress={() => props.navigation.navigate('Details', { data })}
		>
			<View style={styles.container}>
				<Text>{data.title}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 20
	}
})

export default Item
