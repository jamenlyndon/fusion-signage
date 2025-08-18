import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Toggle from './index.tsx';

describe('Toggle', () => {
	it('renders', () => {
		const { container } = render(<Toggle />);
		expect(container.querySelector('.component_toggle')).toBeTruthy();
	});

	it('id prop is applied', () => {
		const { container } = render(<Toggle id='test_id' />);
		expect(container.querySelector('#test_id')).toBeTruthy();
	});

	it('className prop is applied', () => {
		const { container } = render(<Toggle className='test_class' />);
		expect(container.firstChild.classList.contains('test_class')).toBe(true);
	});

	it('name prop is applied', () => {
		const { container } = render(<Toggle name='test_name' />);
		expect(container.querySelector('.component_toggle input[name="test_name"]')).toBeTruthy();
	});

	it('error prop is applied', () => {
		const { container } = render(<Toggle error={true} />);
		expect(container.firstChild.classList.contains('error')).toBe(true);
	});

	it('disabled prop is applied', () => {
		const { container } = render(<Toggle disabled={true} />);
		expect(container.firstChild.classList.contains('disabled')).toBe(true);
		expect(container.querySelector('input').disabled).toBe(true);
	});

	it('selected prop is applied', () => {
		const { container } = render(<Toggle selected={true} />);
		expect(container.querySelector('.component_toggle input[checked]')).toBeTruthy();
	});

	it('label prop is applied', () => {
		const { container } = render(<Toggle label='Test label' />);
		expect(container.querySelector('.component_toggle label')).toBeTruthy();
		expect(container.querySelector('.component_toggle label')).toHaveTextContent('Test label');
	});
});
