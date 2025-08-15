import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Button from './index.tsx';

describe('Button', () => {
	it('renders', () => {
		const { container } = render(<Button />);
		expect(container.querySelector('.component_button')).toBeTruthy();
	});

	it('renders children', () => {
		const { container } = render(<Button>Example text</Button>);
		expect(container).toHaveTextContent('Example text');
	});

	it('id prop is applied', () => {
		const { container } = render(<Button id='test_id' />);
		expect(container.querySelector('#test_id')).toBeTruthy();
	});

	it('className prop is applied', () => {
		const { container } = render(<Button className='test_class' />);
		expect(container.firstChild.classList.contains('test_class')).toBe(true);
	});

	it('href prop is applied', () => {
		const { container } = render(<Button href='https://google.com' />);
		expect(container.firstChild.getAttribute('href')).toBe('https://google.com');
	});

	it('target prop is applied', () => {
		const { container } = render(<Button target='_blank' />);
		expect(container.firstChild.getAttribute('target')).toBe('_blank');
	});

	it('loading prop is applied', () => {
		const { container } = render(<Button loading={true} />);
		expect(container.firstChild.classList.contains('loading')).toBe(true);
	});
});
