import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import H1 from './index.tsx';

describe('H1', () => {
	it('renders', () => {
		const { container } = render(<H1 />);
		expect(container.querySelector('.component_h1')).toBeTruthy();
	});

	it('renders children', () => {
		const { container } = render(<H1>Example text</H1>);
		expect(container).toHaveTextContent('Example text');
	});

	it('id prop is applied', () => {
		const { container } = render(<H1 id='test_id' />);
		expect(container.querySelector('#test_id')).toBeTruthy();
	});

	it('className prop is applied', () => {
		const { container } = render(<H1 className='test_class' />);
		expect(container.firstChild.classList.contains('test_class')).toBe(true);
	});

	it('useTag prop is applied', () => {
		const { container } = render(<H1 useTag='h2' />);
		expect(container.querySelector('h2')).toBeTruthy();
	});
});
