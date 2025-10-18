import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../Contact';

describe('Contact Component', () => {
  test('renders section header', () => {
    render(<Contact />);
    expect(screen.getByText("Let's Build Something Amazing")).toBeInTheDocument();
    expect(screen.getByText(/actively seeking remote opportunities/)).toBeInTheDocument();
    expect(screen.getByText(/makes the world a little better/)).toBeInTheDocument();
  });

  test('renders all contact methods', () => {
    render(<Contact />);
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('Location')).toBeInTheDocument();
  });

  test('renders contact method links', () => {
    render(<Contact />);
    const emailLink = screen.getByRole('link', { name: /inspirebyexample0@gmail.com/ });
    const linkedinLink = screen.getByRole('link', { name: /linkedin.com\/in\/alisha-t-098785180/ });
    const githubLink = screen.getByRole('link', { name: /github.com\/atayl16/ });

    expect(emailLink).toHaveAttribute('href', 'mailto:inspirebyexample0@gmail.com');
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/alisha-t-098785180/');
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('href', 'https://github.com/atayl16');
    expect(githubLink).toHaveAttribute('target', '_blank');
  });

  test('renders location information', () => {
    render(<Contact />);
    expect(screen.getByText(/open to remote worldwide/i)).toBeInTheDocument();
    expect(screen.getByText(/US citizen/)).toBeInTheDocument();
  });

  test('has accessible section', () => {
    render(<Contact />);
    const section = screen.getByRole('region', { name: /contact/i });
    expect(section).toBeInTheDocument();
  });

  test('external links have proper security attributes', () => {
    render(<Contact />);
    const linkedinLink = screen.getByRole('link', { name: /linkedin.com\/in\/alisha-t-098785180/ });
    const githubLink = screen.getByRole('link', { name: /github.com\/atayl16/ });

    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
}); 

