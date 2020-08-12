import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const Search = (props) => {
	const [ value, setValue ] = useState('')

	const handleSubmit = (event) => {
		event.preventDefault()
		// TODO send to server
		alert(value)
	}

	return (
		<View style={styles.container}>
			<TextInput
				autoFocus
				style={styles.input}
				maxLength={50}
				onChangeText={(value) => setValue(value)}
				value={value}
				onSubmitEditing={handleSubmit}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 20
	},

	input: {
		padding: 5,
		borderColor: '#000000',
		fontSize: 14
	}
})

export default Search
