import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Text from './index.tsx';

describe('Text', () => {
	it('renders', () => {
		const { container } = render(<Text />);
		expect(container.querySelector('.component_text')).toBeTruthy();
	});

	it('renders children', () => {
		const { container } = render(<Text>Example text</Text>);
		expect(container).toHaveTextContent('Example text');
	});

	it('id prop is applied', () => {
		const { container } = render(<Text id='test_id' />);
		expect(container.querySelector('#test_id')).toBeTruthy();
	});

	it('className prop is applied', () => {
		const { container } = render(<Text className='test_class' />);
		expect(container.firstChild.classList.contains('test_class')).toBe(true);
	});

	it('size prop is applied', () => {
		const { container } = render(<Text size='l' />);
		expect(container.firstChild.classList.contains('size_l')).toBe(true);
	});

	it('bold prop is applied', () => {
		const { container } = render(<Text bold={true} />);
		expect(container.firstChild.classList.contains('bold')).toBe(true);
	});

	it('useTag prop is applied', () => {
		const { container } = render(<Text useTag='h1' />);
		expect(container.querySelector('h1')).toBeTruthy();
	});
});
