import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const HeaderRight = (props) => {
	const navigation = useNavigation()
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => navigation.navigate('Search')}>
				<Feather style={styles.icon} name="search" />
			</TouchableOpacity>

			<TouchableOpacity>
				<Feather
					style={{ ...styles.icon, marginRight: 15 }}
					name="more-vertical"
				/>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row'
	},

	icon: {
		fontSize: 20,
		margin: 10,
		color: 'white'
	}
})

export default HeaderRight
