/*
	Name:
		Component Toggle

	Description:
		Displays a toggle form field.

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

		name
			Type: string
			Values: Any string
			Default: A random unique ID
			Description: Set the name attribute of this toggle (e.g. <input name='XXX'>)

		error
			Type: boolean
			Values: true, false
			Default: false
			Description: Set the error state.

		disabled
			Type: boolean
			Values: true, false
			Default: false
			Description: Set the disabled state.

		selected
			Type: boolean
			Values: true, false
			Default: false
			Description: Is this toggle on?

		label
			Type: string
			Values: Any string
			Default: ''
			Description: Display a field label.

		...rest
			All other props are passed to <input>.
*/



/* Config
---------------------------------------------------------------------------------------------------- */
"use client";



/* Imports
---------------------------------------------------------------------------------------------------- */
import React from 'react';
import Text from '../../typography/text';
import styles from './style.module.scss';



/* Component
---------------------------------------------------------------------------------------------------- */
type typedProps = {
	id?: string,
	className?: string,
	name?: string,
	error?: boolean,
	disabled?: boolean,
	selected?: boolean,
	label?: string,
} & React.ComponentProps<'input'>;

function Toggle({
	id = '',
	className = '',
	name = '',
	error = false,
	disabled = false,
	selected = false,
	label = '',

	// Support passing in event listeners from the parent
	// This ensures we don't override these as they're also used within this component
	onChange = () => {},

	...rest
}: typedProps) {
	/* If there's no name prop generate a unique id
	-------------------------------------------------- */
	const uniqueId = React.useId();
	if (!name) {
		name = uniqueId;
	}


	/* Build the class list
	-------------------------------------------------- */
	const classes = [styles.component_toggle, className];


	/* Label
	-------------------------------------------------- */
	let labelOutput: React.ReactNode;
	if (label) {
		labelOutput = (
			<label htmlFor={name}>
				<Text size='m' bold={true}>{label}</Text>
			</label>
		);
	}


	/* Error state
	-------------------------------------------------- */
	if (error) {
		classes.push(styles.error);
	}


	/* Disabled state
	-------------------------------------------------- */
	if (disabled) {
		classes.push(styles.disabled);
	}


	/* Selected state
	-------------------------------------------------- */
	const [selectedState, setSelectedState] = React.useState(selected);


	/* On change of the <input> element
	-------------------------------------------------- */
	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		setSelectedState(event.currentTarget.checked);

		// Also call the event handler that could be passed in from the parent
		onChange(event);
	}


	/* Output the component
	-------------------------------------------------- */
	return (
		<div className={classes.join(' ')} id={id} data-selected={selectedState}>
			{/* Field */}
			<input
				type='checkbox'
				disabled={disabled}
				name={name}
				checked={selectedState}
				id={name}
				onChange={handleChange}
				{...rest}
			/>

			<div className={styles.textContainer}>
				{/* Label */}
				{labelOutput}
			</div>
		</div>
	);
}



/* Exports
---------------------------------------------------------------------------------------------------- */
// Component
export default Toggle;

// Types
export type { typedProps as ToggleTypes };
