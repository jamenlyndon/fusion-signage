import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Checkbox from './index.tsx';

describe('Checkbox', () => {
	it('renders', () => {
		const { container } = render(<Checkbox />);
		expect(container.querySelector('.component_checkbox')).toBeTruthy();
	});

	it('id prop is applied', () => {
		const { container } = render(<Checkbox id='test_id' />);
		expect(container.querySelector('#test_id')).toBeTruthy();
	});

	it('className prop is applied', () => {
		const { container } = render(<Checkbox className='test_class' />);
		expect(container.firstChild.classList.contains('test_class')).toBe(true);
	});

	it('name prop is applied', () => {
		const { container } = render(<Checkbox name='test_name' />);
		expect(container.querySelector('.component_checkbox input[name="test_name"]')).toBeTruthy();
	});

	it('error prop is applied', () => {
		const { container } = render(<Checkbox error={true} />);
		expect(container.firstChild.classList.contains('error')).toBe(true);
	});

	it('disabled prop is applied', () => {
		const { container } = render(<Checkbox disabled={true} />);
		expect(container.firstChild.classList.contains('disabled')).toBe(true);
		expect(container.querySelector('input').disabled).toBe(true);
	});

	it('selected prop is applied', () => {
		const { container } = render(<Checkbox selected={true} />);
		expect(container.querySelector('.component_checkbox input[checked]')).toBeTruthy();
	});

	it('label prop is applied', () => {
		const { container } = render(<Checkbox label='Test label' />);
		expect(container.querySelector('.component_checkbox label')).toBeTruthy();
		expect(container.querySelector('.component_checkbox label')).toHaveTextContent('Test label');
	});
});
