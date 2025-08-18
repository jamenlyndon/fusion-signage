/*
	Name:
		Component Button

	Description:
		Displays a Button.

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

		href
			Type: string
			Values: Any link
			Default: ''
			Description: Define the href for the button.

		target
			Type: string
			Values: '_blank', '_self', '_parent', '_top'
			Default: '_self'
			Description: Define the target for the button.

		loading
			Type: boolean
			Values: true, false
			Default: false
			Description: Set the button loading state.

		...rest
			All other props are passed to <NextLink>.
*/



/* Config
---------------------------------------------------------------------------------------------------- */
"use client";



/* Imports
---------------------------------------------------------------------------------------------------- */
import NextLink, { LinkProps } from 'next/link';
import React from 'react';
import Text from '../typography/text';
import styles from './style.module.scss';



/* Component
---------------------------------------------------------------------------------------------------- */
type typedProps = {
	id?: string,
	className?: string,
	href?: string,
	target?: '_blank' | '_self' | '_parent' | '_top',
	loading?: boolean,
	children?: React.ReactNode
} & LinkProps;

function Button({
	id = '',
	className = '',
	href = '',
	target = '_self',
	loading = false,
	children,

	// Support passing in event listeners from the parent
	// This ensures we don't override these as they're also used within this component
	onClick = () => {},

	...rest
}: typedProps) {
	/* Functionality
	---------------------------------------------------------------------------------------------------- */
	/* On click of the <NextLink> element
	-------------------------------------------------- */
	function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
		// If there's no href, prevent this from doing anything
		if (href === '') {
			event.preventDefault();
		}

		// Also call the event handler that could be passed in from the parent
		onClick(event);
	}



	/* Layout
	---------------------------------------------------------------------------------------------------- */
	/* Build the class list
	-------------------------------------------------- */
	const classes = [styles.component_button, className];


	/* Set the loading state
	-------------------------------------------------- */
	if (loading) {
		classes.push(styles.loading);
	}


	/* Output the component
	-------------------------------------------------- */
	return (
		<NextLink className={classes.join(' ')} id={id} href={href} target={target} onClick={handleClick} {...rest}>
			<Text size='l' bold={true} className={styles.text}>{children}</Text>
			<div className={styles.spinner}></div>
		</NextLink>
	);
}



/* Exports
---------------------------------------------------------------------------------------------------- */
// Component
export default Button;

// Types
export type { typedProps as ButtonTypes };
