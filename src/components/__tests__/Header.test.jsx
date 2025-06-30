import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';

describe('Header Component', () => {
  const mockSetCurrentSection = jest.fn();

  beforeEach(() => {
    mockSetCurrentSection.mockClear();
  });

  test('renders brand and nav items', () => {
    render(<Header currentSection="home" setCurrentSection={mockSetCurrentSection} />);
    expect(screen.getByText('Alisha Taylor')).toBeInTheDocument();
    expect(screen.getByText(/Still believes in the magic of coding/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Projects/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Skills/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Contact/i })).toBeInTheDocument();
  });

  test('highlights the active section', () => {
    render(<Header currentSection="projects" setCurrentSection={mockSetCurrentSection} />);
    const projectsButton = screen.getByRole('button', { name: /Projects/i });
    expect(projectsButton.className).toMatch(/active/);
  });

  test('calls setCurrentSection and scrolls on nav click', () => {
    render(<Header currentSection="home" setCurrentSection={mockSetCurrentSection} />);
    const skillsButton = screen.getByRole('button', { name: /Skills/i });
    fireEvent.click(skillsButton);
    expect(mockSetCurrentSection).toHaveBeenCalledWith('skills');
  });

  test('shows and hides mobile menu', () => {
    render(<Header currentSection="home" setCurrentSection={mockSetCurrentSection} />);
    const toggleButton = screen.getByLabelText(/toggle navigation menu/i);
    fireEvent.click(toggleButton);
    expect(screen.getByRole('list', { class: /nav-menu mobile/ })).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.queryByRole('list', { class: /nav-menu mobile/ })).not.toBeInTheDocument();
  });

  test('has accessible navigation', () => {
    render(<Header currentSection="home" setCurrentSection={mockSetCurrentSection} />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getAllByRole('button').length).toBeGreaterThan(0);
  });
}); 
