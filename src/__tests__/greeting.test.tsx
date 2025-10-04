import { render, screen } from '@testing-library/react';
import React from 'react';
function Greeting({ name }: { name: string }) { return <h2>Hello, {name}!</h2>; }
describe('Greeting', () => {
  it('renders name', () => {
    render(<Greeting name="Tester" />);
    expect(screen.getByText(/Hello, Tester!/)).toBeInTheDocument();
  });
});
