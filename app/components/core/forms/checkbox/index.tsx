/*
	Name:
		Component Checkbox

	Description:
		Displays a checkbox form field.

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
			Description: Set the name attribute of this checkbox (e.g. <input name='XXX'>).

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
			Description: Set the selected state.

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

function Checkbox({
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
	const classes = [styles.component_checkbox, className];


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
	// Create the selected state
	const [selectedState, setSelectedState] = React.useState(selected);

	// Handle field change
	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		setSelectedState(event.currentTarget.checked);

		// Also call the event handler that could be passed in from the parent
		onChange(event);
	}


	/* Output the component
	-------------------------------------------------- */
	return (
		<div className={classes.join(' ')} id={id}>
			{/* Field */}
			<div className={styles.checkboxContainer} data-selected={selectedState}>
				<input
					type='checkbox'
					disabled={disabled}
					name={name}
					checked={selectedState}
					id={name}
					onChange={handleChange}
					{...rest}
				/>
				<div className={styles.icon}>
					<svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.27395 11.7643L0.748949 6.53442C0.417017 6.22021 0.417017 5.71077 0.748949 5.39654L1.951 4.25865C2.28293 3.94442 2.82116 3.94442 3.15309 4.25865L6.875 7.78174L14.8469 0.235652C15.1788 -0.0785507 15.7171 -0.0785507 16.049 0.235652L17.2511 1.37353C17.583 1.68774 17.583 2.19718 17.2511 2.51141L7.47604 11.7644C7.14408 12.0786 6.60589 12.0786 6.27395 11.7643Z" fill="white" />
					</svg>
				</div>
			</div>

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
export default Checkbox;

// Types
export type { typedProps as CheckboxTypes };
