/*
	Name:
		Component Time Picker

	Description:
		Displays a time picker form field.

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
			Description: Set the name attribute of this input (e.g. <input name='XXX'>)

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

		...rest
			All other props are passed to <input>.
*/



/* Config
---------------------------------------------------------------------------------------------------- */
"use client";



/* Imports
---------------------------------------------------------------------------------------------------- */
import React from 'react';
import styles from './style.module.scss';



/* Component
---------------------------------------------------------------------------------------------------- */
type typedProps = {
	id?: string,
	className?: string,
	name?: string,
	error?: boolean,
	disabled?: boolean,
} & React.ComponentProps<'input'>;

function TimePicker({
	id = '',
	className = '',
	name = '',
	error = false,
	disabled = false,

	// Support passing in event listeners from the parent
	// This ensures we don't override these as they're also used within this component
	onFocus = () => {},
	onKeyDown = () => {},

	...rest
}: typedProps) {
	/* Functionality
	---------------------------------------------------------------------------------------------------- */
	/* Create state
	-------------------------------------------------- */
	// Initial field value (used to restore the value on escape keypress)
	const [initialValueState, setInitialValueState] = React.useState('');


	/* Create refs to target DOM elements
	-------------------------------------------------- */
	// HTML <input> field
	const fieldRef = React.useRef<HTMLInputElement>(null);


	/* If there's no name prop generate a unique id
	-------------------------------------------------- */
	const uniqueId = React.useId();
	if (!name) {
		name = uniqueId;
	}


	/* On focus of the <input> element
	-------------------------------------------------- */
	function handleFocus(event: React.FocusEvent<HTMLInputElement>) {
		saveInitialValue();

		// Also call the event handler that could be passed in from the parent
		onFocus(event);
	}


	/* Support escape keypress to restore initial field value
	-------------------------------------------------- */
	// Save initial value (on focus)
	function saveInitialValue() {
		// Get the value of the field
		let value = fieldRef?.current?.value;

		// Make sure it's a string
		if (typeof value !== 'string') {
			value = '';
		}

		// Set the initial value state variable
		setInitialValueState(value);
	}

	// Check for the escape keypress (on key down)
	function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
		// Target the field
		const field = fieldRef.current;

		// Make sure the field exists
		if (!field) {
			return;
		}

		// If escape was pressed
		if (event.key === "Escape") {
			// Restore the initial value
			field.value = initialValueState;

			// Blur the field
			field.blur();
		}

		// Also call the event handler that could be passed in from the parent
		onKeyDown(event);
	}



	/* Layout
	---------------------------------------------------------------------------------------------------- */
	/* Build the class list
	-------------------------------------------------- */
	const classes = [styles.component_timePicker, className];


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


	/* Output the component
	-------------------------------------------------- */
	return (
		<div className={classes.join(' ')} id={id}>
			<input
				disabled={disabled}
				name={name}
				ref={fieldRef}
				type='time'
				onFocus={handleFocus}
				onKeyDown={handleKeyDown}
				{...rest}
			/>
		</div>
	);
}



/* Exports
---------------------------------------------------------------------------------------------------- */
// Component
export default TimePicker;

// Types
export type { typedProps as TimePickerTypes };
