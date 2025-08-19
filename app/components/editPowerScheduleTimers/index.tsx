/*
	Name:
		Component Edit Power Schedule Timers

	Description:
		Displays the edit power schedule timers form.

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

		...rest
			All other props are passed to <div>.
*/



/* Config
---------------------------------------------------------------------------------------------------- */
"use client";



/* Imports
---------------------------------------------------------------------------------------------------- */
import React from 'react';
import styles from './style.module.scss';

// Button
import Button from '../core/button';

// Forms
import Checkbox from '../core/forms/checkbox';
import TimePicker from '../core/forms/timePicker';
import Toggle from '../core/forms/toggle';

// Snackbar
import Snackbar from '../core/snackbar';

// Typography
import H1 from '../core/typography/h1';
import Text from '../core/typography/text';



/* Component
---------------------------------------------------------------------------------------------------- */
type typedProps = {
	id?: string,
	className?: string,
} & React.ComponentProps<'div'>;

function EditPowerScheduleTimers({
	id = '',
	className = '',
	...rest
}: typedProps) {
	/* Functionality
	---------------------------------------------------------------------------------------------------- */
	/* Create the timers state
	-------------------------------------------------- */
	type typedTimers = {
		timerNumber: number,
		enabled: boolean,
		powerOffTime: string,
		powerOnTime: string,
		daysOfWeek: string[]
	}

	const [timersState, setTimersState] = React.useState([
		{
			timerNumber: 1,
			enabled: true,
			powerOffTime: '',
			powerOnTime: '',
			daysOfWeek: []
		},
		{
			timerNumber: 2,
			enabled: false,
			powerOffTime: '',
			powerOnTime: '',
			daysOfWeek: []
		},
		{
			timerNumber: 3,
			enabled: false,
			powerOffTime: '',
			powerOnTime: '',
			daysOfWeek: []
		},
		{
			timerNumber: 4,
			enabled: false,
			powerOffTime: '',
			powerOnTime: '',
			daysOfWeek: []
		},
		{
			timerNumber: 5,
			enabled: false,
			powerOffTime: '',
			powerOnTime: '',
			daysOfWeek: []
		},
		{
			timerNumber: 6,
			enabled: false,
			powerOffTime: '',
			powerOnTime: '',
			daysOfWeek: []
		},
		{
			timerNumber: 7,
			enabled: false,
			powerOffTime: '',
			powerOnTime: '',
			daysOfWeek: []
		}
	] as typedTimers[]);


	/* Create the errors state
	-------------------------------------------------- */
	type typedErrors = {
		powerOffTime: boolean,
		powerOnTime: boolean,
		daysOfWeek: boolean
	}

	const [errorsState, setErrorsState] = React.useState([
		{
			powerOffTime: false,
			powerOnTime: false,
			daysOfWeek: false
		},
		{
			powerOffTime: false,
			powerOnTime: false,
			daysOfWeek: false
		},
		{
			powerOffTime: false,
			powerOnTime: false,
			daysOfWeek: false
		},
		{
			powerOffTime: false,
			powerOnTime: false,
			daysOfWeek: false
		},
		{
			powerOffTime: false,
			powerOnTime: false,
			daysOfWeek: false
		},
		{
			powerOffTime: false,
			powerOnTime: false,
			daysOfWeek: false
		},
		{
			powerOffTime: false,
			powerOnTime: false,
			daysOfWeek: false
		}
	] as typedErrors[]);


	/* Create the timer refs
	-------------------------------------------------- */
	const timerRefs = [
		React.useRef<HTMLTableRowElement>(null),
		React.useRef<HTMLTableRowElement>(null),
		React.useRef<HTMLTableRowElement>(null),
		React.useRef<HTMLTableRowElement>(null),
		React.useRef<HTMLTableRowElement>(null),
		React.useRef<HTMLTableRowElement>(null),
		React.useRef<HTMLTableRowElement>(null)
	];


	/* Create the snackbar state
	-------------------------------------------------- */
	const [snackbarTextState, setSnackbarTextState] = React.useState('');
	const [snackbarVisibleState, setSnackbarVisibleState] = React.useState(false);


	/* Create the loading state
	-------------------------------------------------- */
	const [loadingState, setLoadingState] = React.useState(false);


	/* Update a timer (triggered when any field within the form changes)
	-------------------------------------------------- */
	function updateTimer(event: React.ChangeEvent<HTMLInputElement>, timerIndex: number, field: 'enabled' | 'powerOnTime' | 'powerOffTime' | 'daysOfWeek') {
		/* Clone the timers state (this forces React to re-render the component)
		------------------------- */
		const updatedState = [...timersState];


		/* Update fields
		------------------------- */
		// Enabled
		if (field === 'enabled') {
			updatedState[timerIndex].enabled = !updatedState[timerIndex].enabled;
		}

		// Power off time
		else if (field === 'powerOffTime') {
			updatedState[timerIndex].powerOffTime = event.currentTarget.value;
		}

		// Power on time
		else if (field === 'powerOnTime') {
			updatedState[timerIndex].powerOnTime = event.currentTarget.value;
		}

		// Days of week
		else if (field === 'daysOfWeek') {
			const fieldValue = event.currentTarget.value;

			// If it's not checked
			if (!event.currentTarget.checked) {
				// Remove it from the "daysOfWeek"
				updatedState[timerIndex].daysOfWeek = updatedState[timerIndex].daysOfWeek.filter(item => item !== fieldValue);
			}
			// Otherwise, it is checked
			else {
				// Add it to the "daysOfWeek"
				updatedState[timerIndex].daysOfWeek.push(fieldValue);
			}
		}


		/* Update the timers state
		------------------------- */
		setTimersState(updatedState);


		/* Validate the form (this removes errors in real time)
		------------------------- */
		validateForm(timerIndex, field);
	}


	/* Validate the form
	-------------------------------------------------- */
	/*
		Please note:
		- When you submit the form using the save button, "timerIndex" and "field" will be "null".
		- When a field changes, it includes real-time validation, "timerIndex" and "type" will be defined.
	*/
	function validateForm(timerIndex: number | null = null, field: 'enabled' | 'powerOnTime' | 'powerOffTime' | 'daysOfWeek' | null = null) {
		/* Clone the errors state (this forces React to re-render the component)
		------------------------- */
		const updatedState = [...errorsState];


		/* Validate the form
		------------------------- */
		let formIsValid = true;
		let firstError: number | null = null;

		for (let i = 0; i < timersState.length; i++) {
			// Power off time
			if ((timerIndex === null && field === null) || (timerIndex === i && field === 'powerOffTime')) {
				// Invalid
				if (timersState[i].enabled && timersState[i].powerOffTime === '') {
					updatedState[i].powerOffTime = true;
					formIsValid = false;

					// Track the first error
					if (firstError === null) {
						firstError = i;
					}
				}
				// Valid
				else {
					updatedState[i].powerOffTime = false;
				}
			}

			// Power on time
			if ((timerIndex === null && field === null) || (timerIndex === i && field === 'powerOnTime')) {
				// Invalid
				if (timersState[i].enabled && timersState[i].powerOnTime === '') {
					updatedState[i].powerOnTime = true;
					formIsValid = false;

					// Track the first error
					if (firstError === null) {
						firstError = i;
					}
				}
				// Valid
				else {
					updatedState[i].powerOnTime = false;
				}
			}

			// Active days
			if ((timerIndex === null && field === null) || (timerIndex === i && field === 'daysOfWeek')) {
				// Invalid
				if (timersState[i].enabled && timersState[i].daysOfWeek.length === 0) {
					updatedState[i].daysOfWeek = true;
					formIsValid = false;

					// Track the first error
					if (firstError === null) {
						firstError = i;
					}
				}
				// Valid
				else {
					updatedState[i].daysOfWeek = false;
				}
			}
		}


		/* Update the errors state
		------------------------- */
		setErrorsState(updatedState);


		/* Submit the form
		------------------------- */
		// Only if they've pressed the submit button
		if (timerIndex === null && field === null) {
			// Form is valid
			if (formIsValid) {
				// Set the button to loading state
				setLoadingState(true);

				// Call API endpoint
				fetch('/api/savePowerTimers', {
					method: 'POST',
					body: JSON.stringify(timersState)
				})
					// Convert the response to JSON
					.then(res => {
						return res.json();
					})
					// Success
					.then(() => {
						// Show the snackbar
						showSnackbar('Your changes have been saved successfully!');

						// Remove the button to loading state
						setLoadingState(false);
					})
					// Error
					.catch(() => {
						// Show the snackbar
						showSnackbar('Changes could not be saved! Please refresh the page and try again.');

						// Remove the button to loading state
						setLoadingState(false);
					});
			}
			// Form is invalid
			else {
				// Show the snackbar
				showSnackbar('Please fix form errors before saving.');

				// Scroll to the first timer error (this is an important part of good UX as the error may be off screen)
				if (firstError !== null) {
					timerRefs[firstError]?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
				}
			}
		}
	}


	/* Show the snackbar
	-------------------------------------------------- */
	let snackbarHideTimeout = setTimeout(() => {}, 0);
	let snackbarDelayTimeout = setTimeout(() => {}, 0);
	function showSnackbar(text: string) {
		let delay = 0;
		// If the snackbar is already showing
		if (snackbarVisibleState) {
			// Hide the snackbar
			setSnackbarVisibleState(false);

			// Add a 200ms delay
			delay = 200;
		}

		// Delay if required
		clearTimeout(snackbarDelayTimeout);
		snackbarDelayTimeout = setTimeout(() => {
			// Show the snackbar
			setSnackbarTextState(text);
			setSnackbarVisibleState(true);

			// Hide the snackbar after 4s
			clearTimeout(snackbarHideTimeout);
			snackbarHideTimeout = setTimeout(() => {
				setSnackbarVisibleState(false);
			}, 4000);
		}, delay);
	}



	/* Layout
	---------------------------------------------------------------------------------------------------- */
	/* Build the class list
	-------------------------------------------------- */
	const classes = [styles.component_editPowerScheduleTimers, className];


	/* Output the component
	-------------------------------------------------- */
	return (
		<div className={classes.join(' ')} id={id} {...rest}>
			{/* Title
			------------------------- */}
			<H1>Edit&nbsp;Power Schedule&nbsp;Timers</H1>
			<div className={styles.divider}></div>


			{/* Table
			------------------------- */}
			<table>
				<thead>
					<tr>
						<th>
							<Text size='l' bold={true}>Enabled</Text>
						</th>
						<th>
							<Text size='l' bold={true}>Power Off Time</Text>
						</th>
						<th>
							<Text size='l' bold={true}>Power On Time</Text>
						</th>
						<th>
							<Text size='l' bold={true}>Active Days</Text>
						</th>
					</tr>
				</thead>
				<tbody>
					{
						// Output 7 timer rows
						[...Array(7)].map((x, i) => {
							return (
								<tr key={i} data-enabled={timersState[i].enabled} ref={timerRefs[i]}>
									{/* Enabled */}
									<td className={styles.enable}>
										<Toggle label={'Enable Timer ' + (i + 1)} selected={timersState[i].enabled} onChange={(event) => updateTimer(event, i, 'enabled')} />
									</td>

									{/* Power off time */}
									<td className={styles.powerOffTime}>
										<div className={styles.label}>
											<Text size='m' bold={true}>Power Off Time</Text>
										</div>
										<TimePicker disabled={!timersState[i].enabled} className={styles.field} error={errorsState[i].powerOffTime} onChange={(event) => updateTimer(event, i, 'powerOffTime')} />
										<div className={styles.error} data-visible={errorsState[i].powerOffTime} data-disabled={!timersState[i].enabled}>
											<Text size='s' bold={true}>Please enter a valid time</Text>
										</div>
									</td>

									{/* Power on time */}
									<td className={styles.powerOnTime}>
										<div className={styles.label}>
											<Text size='m' bold={true}>Power On Time</Text>
										</div>
										<TimePicker disabled={!timersState[i].enabled} className={styles.field} error={errorsState[i].powerOnTime} onChange={(event) => updateTimer(event, i, 'powerOnTime')} />
										<div className={styles.error} data-visible={errorsState[i].powerOnTime} data-disabled={!timersState[i].enabled}>
											<Text size='s' bold={true}>Please enter a valid time</Text>
										</div>
									</td>

									{/* Days of week */}
									<td className={styles.daysOfWeek}>
										<div className={styles.label}>
											<Text size='m' bold={true}>Active Days</Text>
										</div>
										<div className={styles.daysContainer}>
											<Checkbox disabled={!timersState[i].enabled} label='Mon' value='MONDAY' error={errorsState[i].daysOfWeek} onChange={(event) => updateTimer(event, i, 'daysOfWeek')} />
											<Checkbox disabled={!timersState[i].enabled} label='Tue' value='TUESDAY' error={errorsState[i].daysOfWeek} onChange={(event) => updateTimer(event, i, 'daysOfWeek')} />
											<Checkbox disabled={!timersState[i].enabled} label='Wed' value='WEDNESDAY' error={errorsState[i].daysOfWeek} onChange={(event) => updateTimer(event, i, 'daysOfWeek')} />
											<Checkbox disabled={!timersState[i].enabled} label='Thu' value='THURSDAY' error={errorsState[i].daysOfWeek} onChange={(event) => updateTimer(event, i, 'daysOfWeek')} />
											<Checkbox disabled={!timersState[i].enabled} label='Fri' value='FRIDAY' error={errorsState[i].daysOfWeek} onChange={(event) => updateTimer(event, i, 'daysOfWeek')} />
											<Checkbox disabled={!timersState[i].enabled} label='Sat' value='SATURDAY' error={errorsState[i].daysOfWeek} onChange={(event) => updateTimer(event, i, 'daysOfWeek')} />
											<Checkbox disabled={!timersState[i].enabled} label='Sun' value='SUNDAY' error={errorsState[i].daysOfWeek} onChange={(event) => updateTimer(event, i, 'daysOfWeek')} />
										</div>
										<div className={styles.error} data-visible={errorsState[i].daysOfWeek} data-disabled={!timersState[i].enabled}>
											<Text size='s' bold={true}>Please select at least one day</Text>
										</div>
									</td>
								</tr>
							);
						})
					}
				</tbody>
			</table >


			{/* Submit button
			------------------------- */}
			<div className={styles.submitButtonContainer}>
				<Button href='' className={styles.submitButton} onClick={() => validateForm()} loading={loadingState}>Save timers</Button>
			</div>


			{/* Snackbar
			------------------------- */}
			<Snackbar text={snackbarTextState} visible={snackbarVisibleState} />
		</div >
	);
}



/* Exports
---------------------------------------------------------------------------------------------------- */
// Component
export default EditPowerScheduleTimers;

// Types
export type { typedProps as EditPowerScheduleTimersTypes };
