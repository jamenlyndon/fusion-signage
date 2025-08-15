/* Config
---------------------------------------------------------------------------------------------------- */
"use client";



/* Imports
---------------------------------------------------------------------------------------------------- */
// React
import React from 'react';

// Styles
import styles from './style.module.css';

// Button
import Button from './components/button';

// Forms
import Checkbox from './components/forms/checkbox';
import TimePicker from './components/forms/timePicker';
import Toggle from './components/forms/toggle';

// Typography
import H1 from './components/typography/h1';
import Text from './components/typography/text';



/* Edit Power Schedule Timers Page
---------------------------------------------------------------------------------------------------- */
export default function EditPowerScheduleTimers() {
	/* Layout
	---------------------------------------------------------------------------------------------------- */
	return (
		<main className={styles.page_editPowerScheduleTimers}>


			{/* Typography
			-------------------------------------------------- */}
			<H1 useTag='h2'>Typography</H1>
			<br /><br />
			<H1>Heading 1 - the quick brown<br />fox jumps over the lazy dog</H1>
			<Text size='l'>Text large - the quick brown<br />fox jumps over the lazy dog</Text>
			<Text size='m'>Text medium - the quick brown<br />fox jumps over the lazy dog</Text>
			<Text size='s'>Text small - the quick brown<br />fox jumps over the lazy dog</Text>


			<br /><br /><br /><br />


			{/* Buttons
			-------------------------------------------------- */}
			<H1 useTag='h2'>Buttons</H1>
			<br /><br />
			<Button href=''>Primary</Button>
			<Button href='' loading={true}>Primary</Button>



			<br /><br /><br /><br />


			{/* Forms
			-------------------------------------------------- */}
			<H1 useTag='h2'>Forms</H1>
			<br /><br />
			<Checkbox label='Field label' />
			<Toggle label='Field label' />
			<TimePicker placeholder='Placeholder text' />

		</main>
	);
}
