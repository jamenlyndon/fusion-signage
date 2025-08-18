import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Snackbar from './index.tsx';

describe('Snackbar', () => {
	it('renders', () => {
		const { container } = render(<Snackbar />);
		expect(container.querySelector('.component_snackbar')).toBeTruthy();
	});

	it('id prop is applied', () => {
		const { container } = render(<Snackbar id='test_id' />);
		expect(container.querySelector('#test_id')).toBeTruthy();
	});

	it('className prop is applied', () => {
		const { container } = render(<Snackbar className='test_class' />);
		expect(container.firstChild.classList.contains('test_class')).toBe(true);
	});

	it('text prop is applied', () => {
		const { container } = render(<Snackbar text='Test text' />);
		expect(container.querySelector('.text')).toHaveTextContent('Test text');
	});

	it('visible prop is applied', () => {
		const { container } = render(<Snackbar visible={true} />);
		expect(container.querySelector('.component_snackbar[data-visible="true"]')).toBeTruthy();
	});
});
