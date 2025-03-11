import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Calculator from '../components/Calculator';

const setCalculatedMock = vi.fn();
const setIsCalculatedMock = vi.fn();

describe('Calculator Component', () => {

    beforeEach(() => {
        vi.clearAllMocks();
    });

  it('should calculate correctly with a custom interest rate', () => {
    render(<Calculator setCalculated={setCalculatedMock} setIsCalculated={setIsCalculatedMock} />);

    // Enter mortgage amount
    fireEvent.change(screen.getByLabelText('Mortgage Amount'), { target: { value: '200000' } });

    // Enter mortgage term
    fireEvent.change(screen.getByLabelText('Mortgage Term'), { target: { value: '25' } });

    // Enter custom interest rate
    fireEvent.change(screen.getByLabelText('Interest Rate'), { target: { value: '5' } });

    // Select "Repayment" mortgage type
    fireEvent.click(screen.getByText('Repayment'));

    // Submit the form
    fireEvent.submit(screen.getByRole('form'));

    // Expected calculations
    const loanAmount = 200000;
    const termInMonths = 25 * 12; // 300 months
    const monthlyInterestRate = (5 / 12) / 100; // 0.004167

    // Repayment formula: (P * r * (1 + r)^n) / ((1 + r)^n - 1)
    const top = monthlyInterestRate * (1 + monthlyInterestRate) ** termInMonths;
    const bottom = ((1 + monthlyInterestRate) ** termInMonths) - 1;
    const monthlyRepayment = loanAmount * (top / bottom);
    const totalAmount = monthlyRepayment * termInMonths;

    expect(setCalculatedMock).toHaveBeenCalledWith({
      monthlyAmount: Math.round(monthlyRepayment * 100) / 100,
      totalAmount: Math.round(totalAmount * 100) / 100
    });

    expect(setIsCalculatedMock).toHaveBeenCalledWith(true);
  });
  it('should calculate correctly with a custom interest rate', () => {
    render(<Calculator setCalculated={setCalculatedMock} setIsCalculated={setIsCalculatedMock} />);

    // Enter mortgage amount
    fireEvent.change(screen.getByLabelText('Mortgage Amount'), { target: { value: '200000' } });

    // Enter mortgage term
    fireEvent.change(screen.getByLabelText('Mortgage Term'), { target: { value: '25' } });

    // Enter custom interest rate
    fireEvent.change(screen.getByLabelText('Interest Rate'), { target: { value: '5' } });

    // Select "Repayment" mortgage type
    fireEvent.click(screen.getByText('Interest only'));

    // Submit the form
    fireEvent.submit(screen.getByRole('form'));

    // Expected calculations
    const loanAmount = 200000;
    const termInMonths = 25 * 12; // 300 months
    const monthlyInterestRate = (5 / 12) / 100; // 0.004167

    // Repayment formula: (P * r * (1 + r)^n) / ((1 + r)^n - 1)
    const monthlyRepayment = loanAmount * monthlyInterestRate
    const totalAmount = monthlyRepayment    * termInMonths;

    expect(setCalculatedMock).toHaveBeenCalledWith({
      monthlyAmount: Math.round(monthlyRepayment * 100) / 100,
      totalAmount: Math.round(totalAmount * 100) / 100
    });

    expect(setIsCalculatedMock).toHaveBeenCalledWith(true);
  });
  it("should display error messages when fields are empty", async () => {
    render(<Calculator setCalculated={setCalculatedMock} setIsCalculated={setIsCalculatedMock} />);

    // Click the submit button
    fireEvent.click(screen.getByRole("button", { name: /calculate repayment/i }));

    // Verify that all error messages appear
    const errors = await screen.findAllByText("This field is required");
    expect(errors.length).toBeGreaterThan(0); // At least one field should trigger an error
  });
  it('should clear all fields when clear all is clicked', () => {
      render(<Calculator setCalculated={setCalculatedMock} />)

    fireEvent.click(screen.getByText('Clear All'))

    expect(screen.getByLabelText('Mortgage Amount').value).to.equal("");
    expect(screen.getByLabelText('Mortgage Term').value).to.equal("");  
    expect(screen.getByLabelText('Interest Rate').value).to.equal("");  
  })
});
