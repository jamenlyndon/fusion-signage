/*
	Name:
		Component Text

	Description:
		Displays paragraph text.

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

		size
			Type: string
			Values: 'l', 'm', 's', 'xs'
			Default: true
			Description: Set the text size.

		bold
			Type: boolean
			Values: true, false
			Default: false
			Description: Set the text to bold.

		useTag
			Type: string
			Values: 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'
			Default: 'div'
			Description: Use a different HTML tag for this text element.

		...rest
			All other props are passed to <div> (or the tag you passed in with the "useTag" prop).
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
	size?: 'l' | 'm' | 's',
	bold?: boolean,
	useTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div',
	children?: React.ReactNode
} & React.ComponentProps<'h1'> & React.ComponentProps<'h2'> & React.ComponentProps<'h3'> & React.ComponentProps<'h4'> & React.ComponentProps<'h5'> & React.ComponentProps<'h6'> & React.ComponentProps<'p'> & React.ComponentProps<'span'> & React.ComponentProps<'div'>;

function Text({
	id = '',
	className = '',
	size = 'm',
	bold = false,
	useTag = 'div',
	children,
	...rest
}: typedProps) {
	/* Build the class list
	-------------------------------------------------- */
	const classes = [styles.component_text, className];


	/* Size
	-------------------------------------------------- */
	if (size) {
		classes.push(styles['size_' + size]);
	}


	/* Bold
	-------------------------------------------------- */
	if (bold) {
		classes.push(styles['bold']);
	}


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
export default Text;

// Types
export type { typedProps as TextTypes };
