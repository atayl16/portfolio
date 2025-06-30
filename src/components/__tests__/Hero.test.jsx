import { render, screen, fireEvent } from '@testing-library/react';
import Hero from '../Hero';

// Mock the setCurrentSection function
const mockSetCurrentSection = jest.fn();

// Mock scrollIntoView
Element.prototype.scrollIntoView = jest.fn();

describe('Hero Component', () => {
  beforeEach(() => {
    mockSetCurrentSection.mockClear();
    Element.prototype.scrollIntoView.mockClear();
  });

  test('renders hero section with main content', () => {
    render(<Hero setCurrentSection={mockSetCurrentSection} />);

    // Check for main hero elements
    expect(screen.getByText('Alisha Taylor')).toBeInTheDocument();
    expect(screen.getByText('The Code Ranger')).toBeInTheDocument();
    expect(screen.getByText(/Crafting digital adventures/)).toBeInTheDocument();
    expect(screen.getByText('🌟 Software Engineer II')).toBeInTheDocument();
  });

  test('displays location information', () => {
    render(<Hero setCurrentSection={mockSetCurrentSection} />);

    expect(screen.getByText(/Open to Remote Worldwide/)).toBeInTheDocument();
  });

  test('renders social links', () => {
    render(<Hero setCurrentSection={mockSetCurrentSection} />);

    const githubLink = screen.getByRole('link', { name: /GitHub/i });
    const linkedinLink = screen.getByRole('link', { name: /LinkedIn/i });

    expect(githubLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/atayl16');
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/alisha-t-098785180/');
  });

  test('renders stats card with experience information', () => {
    render(<Hero setCurrentSection={mockSetCurrentSection} />);

    expect(screen.getByText('Quick Stats')).toBeInTheDocument();
    expect(screen.getByText('5+')).toBeInTheDocument();
    expect(screen.getByText('Years Coding')).toBeInTheDocument();
    expect(screen.getByText('10+')).toBeInTheDocument();
    expect(screen.getByText('Years Tech')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('∞')).toBeInTheDocument();
    expect(screen.getByText('Possibilities')).toBeInTheDocument();
  });

  test('View Projects button scrolls to projects section', () => {
    render(<Hero setCurrentSection={mockSetCurrentSection} />);

    const viewProjectsButton = screen.getByRole('button', { name: /View Projects/i });
    
    fireEvent.click(viewProjectsButton);

    expect(mockSetCurrentSection).toHaveBeenCalledWith('projects');
    expect(Element.prototype.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
  });

  test('scroll button scrolls to projects section', () => {
    render(<Hero setCurrentSection={mockSetCurrentSection} />);

    const scrollButton = screen.getByRole('button', { name: /Scroll to projects section/i });
    
    fireEvent.click(scrollButton);

    expect(mockSetCurrentSection).toHaveBeenCalledWith('projects');
    expect(Element.prototype.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
  });

  test('has proper accessibility attributes', () => {
    render(<Hero setCurrentSection={mockSetCurrentSection} />);

    // Check for proper heading structure
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    
    // Check for proper button labels
    expect(screen.getByRole('button', { name: /View Projects/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Scroll to projects section/i })).toBeInTheDocument();
  });

  test('external links open in new tab', () => {
    render(<Hero setCurrentSection={mockSetCurrentSection} />);

    const githubLink = screen.getByRole('link', { name: /GitHub/i });
    const linkedinLink = screen.getByRole('link', { name: /LinkedIn/i });

    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
}); 
