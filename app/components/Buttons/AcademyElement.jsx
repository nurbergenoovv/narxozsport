import { AccordionList } from 'accordion-collapse-react-native'
import React from 'react'
import {
	LayoutAnimation,
	Platform,
	StyleSheet,
	UIManager,
	View
} from 'react-native'
import renderContent from './UI/RenderContent'
import renderHeader from './UI/RenderHeader'

if (Platform.OS === 'android') {
	UIManager.setLayoutAnimationEnabledExperimental(true)
}

function AcademyElement({sections}) {
	
	function handleOnToggle() {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
	}

	return (
		<View style={styles.container}>
			<AccordionList
				list={sections}
				header={renderHeader}
				body={renderContent}
				onToggle={handleOnToggle}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection:'column',
		gap:10
	},
	textSmall: {
		fontSize: 16,
	},
})

export default AcademyElement
