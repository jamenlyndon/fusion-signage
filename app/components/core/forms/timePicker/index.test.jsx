import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import TimePicker from './index.tsx';

describe('TimePicker', () => {
	it('renders', () => {
		const { container } = render(<TimePicker />);
		expect(container.querySelector('.component_timePicker')).toBeTruthy();
	});

	it('id prop is applied', () => {
		const { container } = render(<TimePicker id='test_id' />);
		expect(container.querySelector('#test_id')).toBeTruthy();
	});

	it('className prop is applied', () => {
		const { container } = render(<TimePicker className='test_class' />);
		expect(container.firstChild.classList.contains('test_class')).toBe(true);
	});

	it('name prop is applied', () => {
		const { container } = render(<TimePicker name='test_name' />);
		expect(container.querySelector('.component_timePicker input[name="test_name"]')).toBeTruthy();
	});

	it('error prop is applied', () => {
		const { container } = render(<TimePicker error={true} />);
		expect(container.firstChild.classList.contains('error')).toBe(true);
	});

	it('disabled prop is applied', () => {
		const { container } = render(<TimePicker disabled={true} />);
		expect(container.firstChild.classList.contains('disabled')).toBe(true);
		expect(container.querySelector('input').disabled).toBe(true);
	});
});
