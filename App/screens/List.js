import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Item from '../components/Item'

const Details = (props) => {
	const data = props.route.params.newData
	return (
		<View style={styles.container}>
			<FlatList
				data={data}
				renderItem={(item) => <Item data={item.item} {...props} />}
				keyExtractor={(item) => item.id.toString()}
				ItemSeparatorComponent={() => (
					<View
						style={{
							height: 1,
							width: '100%',
							backgroundColor: '#000'
						}}
					/>
				)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {}
})

export default Details
