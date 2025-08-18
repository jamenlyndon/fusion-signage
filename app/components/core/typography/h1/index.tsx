/*
	Name:
		Component H1

	Description:
		Displays a Heading 1.

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

		useTag
			Type: string
			Values: 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'
			Default: 'h1'
			Description: Use a different HTML tag for this text element.

		...rest
			All other props are passed to <h1> (or the tag you passed in with the "useTag" prop).
*/



/* Imports
---------------------------------------------------------------------------------------------------- */
import React from 'react';
import styles from './style.module.scss';



/* Component
---------------------------------------------------------------------------------------------------- */
type typedProps = {
	id?: string,
	className?: string,
	useTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div',
	children?: React.ReactNode
} & React.ComponentProps<'h1'> & React.ComponentProps<'h2'> & React.ComponentProps<'h3'> & React.ComponentProps<'h4'> & React.ComponentProps<'h5'> & React.ComponentProps<'h6'> & React.ComponentProps<'p'> & React.ComponentProps<'span'> & React.ComponentProps<'div'>;

function H1({
	id = '',
	className = '',
	useTag = 'h1',
	children,
	...rest
}: typedProps) {
	/* Build the class list
	-------------------------------------------------- */
	const classes = [styles.component_h1, className];


	/* Use a custom HTML tag
	-------------------------------------------------- */
	const TagName = useTag;


	/* Output the component
	-------------------------------------------------- */
	return (
		<TagName className={classes.join(' ')} id={id} {...rest}>
			{children}
		</TagName>
	);
}



/* Exports
---------------------------------------------------------------------------------------------------- */
// Component
export default H1;

// Types
export type { typedProps as H1Types };
