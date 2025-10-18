import { render, screen, fireEvent } from '@testing-library/react';
import Recommendations from '../Recommendations';

describe('Recommendations Component', () => {
  test('renders section header', () => {
    render(<Recommendations />);
    expect(screen.getByText('Fellow Adventurers')).toBeInTheDocument();
    expect(screen.getByText(/Quest logs from companions/)).toBeInTheDocument();
  });

  test('renders first recommendation by default', () => {
    render(<Recommendations />);
    expect(screen.getByText('Allison McHenry')).toBeInTheDocument();
    expect(screen.getByText('CTO, Daily Kos')).toBeInTheDocument();
    expect(screen.getByText(/Of all the engineers I have worked with/)).toBeInTheDocument();
  });

  test('renders carousel navigation buttons', () => {
    render(<Recommendations />);
    expect(screen.getByLabelText('Previous recommendation')).toBeInTheDocument();
    expect(screen.getByLabelText('Next recommendation')).toBeInTheDocument();
  });

  test('navigates to next recommendation', () => {
    render(<Recommendations />);
    const nextButton = screen.getByLabelText('Next recommendation');
    
    fireEvent.click(nextButton);
    
    expect(screen.getByText('Adam Whitley')).toBeInTheDocument();
    expect(screen.getByText('UI/UX Graybeard @ Microsoft')).toBeInTheDocument();
  });

  test('navigates to previous recommendation', () => {
    render(<Recommendations />);
    const prevButton = screen.getByLabelText('Previous recommendation');
    
    // Go to last recommendation (wraps around)
    fireEvent.click(prevButton);
    
    expect(screen.getByText('Razvan Milea')).toBeInTheDocument();
    expect(screen.getByText('Experienced Technologist & IT partner')).toBeInTheDocument();
  });

  test('renders carousel dots for all recommendations', () => {
    render(<Recommendations />);
    const dots = screen.getAllByLabelText(/Go to recommendation \d+/);
    expect(dots.length).toBe(6);
  });

  test('navigates using carousel dots', () => {
    render(<Recommendations />);
    const thirdDot = screen.getByLabelText('Go to recommendation 3');
    
    fireEvent.click(thirdDot);
    
    expect(screen.getByText('M.N.M Hall')).toBeInTheDocument();
  });

  test('displays full recommendation text', () => {
    render(<Recommendations />);
    // First recommendation is long enough to verify full text is showing
    expect(screen.getByText(/Of all the engineers I have worked with over a nearly 30-year career/)).toBeInTheDocument();
    expect(screen.getByText(/She would be an asset to any organization/)).toBeInTheDocument();
  });

  test('does not display dates', () => {
    render(<Recommendations />);
    // Check that common date patterns are not in the document
    expect(screen.queryByText(/September 24, 2025/)).not.toBeInTheDocument();
    expect(screen.queryByText(/February 13, 2024/)).not.toBeInTheDocument();
  });

  test('does not have read more buttons', () => {
    render(<Recommendations />);
    // Verify that "Read more" buttons are not present
    expect(screen.queryByText('Read more')).not.toBeInTheDocument();
    expect(screen.queryByText('Show less')).not.toBeInTheDocument();
  });

  test('has accessible section', () => {
    render(<Recommendations />);
    const section = screen.getByRole('region', { name: /recommendations/i });
    expect(section).toBeInTheDocument();
  });
});
