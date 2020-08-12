import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { MainStack } from './navigation'

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="auto" />
			<NavigationContainer>
				<MainStack />
			</NavigationContainer>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: { flex: 1 }
})
