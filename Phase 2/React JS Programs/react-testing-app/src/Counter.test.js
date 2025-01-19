import { act, render, screen } from '@testing-library/react';
import Counter from './Counter';

test('Counter render test case', () => {
render(<Counter />);
const countElement = screen.getByText(/Count:/i);
expect(countElement).toHaveTextContent('Count:10');
});

test('Counter increment test case', () => {
render(<Counter />);
const incrementButton = screen.getByText(/Increment/i);
act(() => {
    incrementButton.click();
})
const countElement = screen.getByText(/Count:/i);
expect(countElement).toHaveTextContent('Count:11');
})

test('Counter decrement test case', () => {
    render(<Counter />);
    const decrementButton = screen.getByText(/Decrement/i);
    act(() => {
        decrementButton.click();
    })
    const countElement = screen.getByText(/Count:/i);
    expect(countElement).toHaveTextContent('Count:9');
})