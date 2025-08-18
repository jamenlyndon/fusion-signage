/*
	Name:
		Component Snackbar

	Description:
		Displays a Snackbar.

	Params:
		id
			Type: string
			Values: Any string
			Default: ''
			Description: Add an ID to this component.

		className
			Type: string
			Values: Any string or CSS module
			Default: ''
			Description: Add a CSS class or module to this component.

		text
			Type: string
			Values: Any link
			Default: ''
			Description: Define the text for the snackbar.

		visible
			Type: boolean
			Values: true, false
			Default: false
			Description: Set the visible state.

		...rest
			All other props are passed to <div>.
*/



/* Config
---------------------------------------------------------------------------------------------------- */
"use client";



/* Imports
---------------------------------------------------------------------------------------------------- */
import React from 'react';
import Text from '../typography/text';
import styles from './style.module.scss';



/* Component
---------------------------------------------------------------------------------------------------- */
type typedProps = {
	id?: string,
	className?: string,
	text?: string,
	visible?: boolean
} & React.ComponentProps<'div'>;

function Snackbar({
	id = '',
	className = '',
	text = '',
	visible = false,
	...rest
}: typedProps) {
	/* Build the class list
	-------------------------------------------------- */
	const classes = [styles.component_snackbar, className];


	/* Output the component
	-------------------------------------------------- */
	return (
		<div className={classes.join(' ')} id={id} data-visible={visible} {...rest}>
			<div className={styles.inner}>
				<Text size='m' bold={true} className={styles.text}>{text}</Text>
			</div>
		</div>
	);
}



/* Exports
---------------------------------------------------------------------------------------------------- */
// Component
export default Snackbar;

// Types
export type { typedProps as SnackbarTypes };
