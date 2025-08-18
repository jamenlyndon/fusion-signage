import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EditPowerScheduleTimers from './index.tsx';

// Create a mock fetch
global.fetch = jest.fn();

// Create a mock "scrollIntoView" function (this is missing from jsdom)
window.HTMLElement.prototype.scrollIntoView = function () {};

describe('EditPowerScheduleTimers', () => {
	describe('Rendering', () => {
		it('renders', () => {
			const { container } = render(<EditPowerScheduleTimers />);
			expect(container.querySelector('.component_editPowerScheduleTimers')).toBeTruthy();
		});

		it('id prop is applied', () => {
			const { container } = render(<EditPowerScheduleTimers id='test_id' />);
			expect(container.querySelector('#test_id')).toBeTruthy();
		});

		it('className prop is applied', () => {
			const { container } = render(<EditPowerScheduleTimers className='test_class' />);
			expect(container.querySelector('.component_editPowerScheduleTimers').classList.contains('test_class')).toBe(true);
		});

		it('renders 7 timer rows', () => {
			const { container } = render(<EditPowerScheduleTimers />);
			expect(container.querySelectorAll('.component_editPowerScheduleTimers table tbody tr').length).toBe(7);
		});

		it('renders save button', () => {
			const { container } = render(<EditPowerScheduleTimers />);
			expect(container.querySelector('.component_editPowerScheduleTimers .submitButton')).toBeTruthy();
		});
	});

	describe('Form Validation', () => {
		it('toggles timer enabled state when clicked', async () => {
			const { container } = render(<EditPowerScheduleTimers />);

			let firstTimer = container.querySelectorAll('.component_editPowerScheduleTimers table tbody tr')[0];
			let enableToggle = firstTimer.querySelector('.enable input');

			expect(firstTimer.getAttribute('data-enabled')).toBe('true');
			expect(enableToggle).toBeChecked();

			const user = userEvent.setup();
			await user.click(enableToggle);
			expect(firstTimer.getAttribute('data-enabled')).toBe('false');
			expect(enableToggle).not.toBeChecked();
		});

		it('shows validation errors', async () => {
			const { container } = render(<EditPowerScheduleTimers />);
			let saveButton = container.querySelector('.component_editPowerScheduleTimers .submitButton');

			const user = userEvent.setup();
			await user.click(saveButton);

			expect(container.textContent).toContain('Please enter a valid time');
			expect(container.textContent).toContain('Please select at least one day');
		});
	});

	describe('Form Submission', () => {
		// Before each test
		beforeEach(() => {
			// Clear the fetch
			fetch.mockClear();

			// Mock a fetch return
			fetch.mockResolvedValue({
				ok: true,
				json: async () => ({ message: 'Success' })
			});
		});

		it('does not submit when form is invalid', async () => {
			const { container } = render(<EditPowerScheduleTimers />);

			const saveButton = container.querySelector('.component_editPowerScheduleTimers .submitButton');

			const user = userEvent.setup();
			await user.click(saveButton);

			expect(fetch).not.toHaveBeenCalled();
		});

		it('submits when form is valid', async () => {
			const { container } = render(<EditPowerScheduleTimers />);

			const user = userEvent.setup();

			let firstTimer = container.querySelectorAll('.component_editPowerScheduleTimers table tbody tr')[0];
			await user.type(firstTimer.querySelector('.powerOffTime input'), '09:00');
			await user.type(firstTimer.querySelector('.powerOnTime input'), '10:00');
			await user.click(firstTimer.querySelectorAll('.daysOfWeek input')[0]);

			let saveButton = container.querySelector('.component_editPowerScheduleTimers .submitButton');
			await user.click(saveButton);

			await waitFor(() => {
				expect(fetch).toHaveBeenCalledWith('/api/savePowerTimers', {
					method: 'POST',
					body: JSON.stringify(
						[
							{
								timerNumber: 1,
								enabled: true,
								powerOffTime: '09:00',
								powerOnTime: '10:00',
								daysOfWeek: ['MONDAY']
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
						]
					)
				});
			});
		});
	});
});
