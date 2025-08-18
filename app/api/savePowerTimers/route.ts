/* Imports
---------------------------------------------------------------------------------------------------- */
import { NextRequest, NextResponse } from 'next/server';



/* Save Power Timers
---------------------------------------------------------------------------------------------------- */
type PowerTimer = {
	timerNumber: number,
	enabled: boolean,
	powerOffTime: string, // hh24:mm
	powerOnTime: string, // hh24:mm
	daysOfWeek: string[] // "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY"
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function savePowerTimers(powerTimers: PowerTimer[]): Promise<void> {
	// Stubbed function. Do not implement or modify.

	/*
		The below code is required for Typescript to pass and returns either a resolve or reject for testing purposes
		Feel free to replace all code in here. I understand this function is "stubbed".
	*/

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	return new Promise((resolve, reject) => {
		// Mock 1s of loading time
		setTimeout(() => {
			// Show success
			resolve();

			// Show error
			// reject();
		}, 1000);
	});
}



/* Endpoint
---------------------------------------------------------------------------------------------------- */
export async function POST(request: NextRequest) {
	try {
		// Get the body as JSON
		const body = await request.json();

		// Call Save Power Timers "stubbed" function
		await savePowerTimers(body);

		// Success
		return NextResponse.json({
			message: 'success',
			receivedData: body
		});
	}
	// Error
	catch {
		return NextResponse.json(
			{ error: 'error' },
			{ status: 400 }
		);
	}
}
