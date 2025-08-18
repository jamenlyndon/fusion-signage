/* Imports
---------------------------------------------------------------------------------------------------- */
// React
import React from 'react';

// Styles
import styles from './style.module.scss';

// Edit Power Schedule Timers
import EditPowerScheduleTimers from './components/editPowerScheduleTimers';



/* Demo Page
---------------------------------------------------------------------------------------------------- */
export default function DemoPage() {
	/* Layout
	---------------------------------------------------------------------------------------------------- */
	return (
		<main className={styles.page_demo}>
			<EditPowerScheduleTimers />
		</main>
	);
}
