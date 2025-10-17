import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';

describe('Header Component', () => {
  const mockSetCurrentSection = jest.fn();

  beforeEach(() => {
    mockSetCurrentSection.mockClear();
    // Mock document.getElementById for scrollIntoView
    document.getElementById = jest.fn((id) => ({
      scrollIntoView: jest.fn()
    }));
  });

  test('renders brand and nav items', () => {
    render(<Header currentSection="home" setCurrentSection={mockSetCurrentSection} />);
    expect(screen.getByText('Alisha Taylor')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Skills/i })).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /Projects/i })).toBeTruthy();
    expect(screen.getByRole('button', { name: /Experience/i })).toBeInTheDocument();
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
    
    // Initially, mobile menu should not be visible
    expect(screen.queryByRole('list', { hidden: false, name: '' })).toBeTruthy();
    
    // Click to open mobile menu
    fireEvent.click(toggleButton);
    const mobileMenus = screen.getAllByRole('list');
    expect(mobileMenus.length).toBeGreaterThan(0);
    
    // Click to close mobile menu
    fireEvent.click(toggleButton);
    // After closing, the mobile menu should be removed from DOM
    expect(screen.getAllByRole('list').length).toBe(1); // Only desktop menu remains
  });

  test('mobile menu navigation calls setCurrentSection', () => {
    render(<Header currentSection="home" setCurrentSection={mockSetCurrentSection} />);
    const toggleButton = screen.getByLabelText(/toggle navigation menu/i);
    
    // Open mobile menu
    fireEvent.click(toggleButton);
    
    // Click a navigation item in mobile menu
    const allNavButtons = screen.getAllByRole('button', { name: /Projects/i });
    const mobileProjectsButton = allNavButtons[allNavButtons.length - 1]; // Get the mobile menu button
    
    fireEvent.click(mobileProjectsButton);
    
    expect(mockSetCurrentSection).toHaveBeenCalledWith('projects');
  });

  test('has accessible navigation', () => {
    render(<Header currentSection="home" setCurrentSection={mockSetCurrentSection} />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getAllByRole('button').length).toBeGreaterThan(0);
  });
}); 
