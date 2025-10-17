import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer Component', () => {
  test('renders footer brand and tagline', () => {
    render(<Footer />);
    expect(screen.getByText('Alisha Taylor')).toBeInTheDocument();
    expect(screen.getByText(/Software Ranger • Code Adventurer • Digital Craftsman/)).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: /Home/ })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Skills/ })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Projects/ })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Experience/ })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Contact/ })).toBeInTheDocument();
  });

  test('renders social media links', () => {
    render(<Footer />);
    const githubLink = screen.getByRole('link', { name: /GitHub/ });
    const linkedinLink = screen.getByRole('link', { name: /LinkedIn/ });

    expect(githubLink).toHaveAttribute('href', 'https://github.com/atayl16');
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/alisha-t-098785180/');
  });

  test('renders email link', () => {
    render(<Footer />);
    const emailLink = screen.getByRole('link', { name: /Email/ });
    expect(emailLink).toHaveAttribute('href', 'mailto:inspirebyexample0@gmail.com');
  });

  test('renders location information', () => {
    render(<Footer />);
    expect(screen.getByText(/Open to Remote Worldwide/)).toBeInTheDocument();
    expect(screen.getByText(/US citizen/)).toBeInTheDocument();
  });

  test('renders copyright with current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${currentYear} Alisha Taylor`))).toBeInTheDocument();
  });

  test('renders crafted with love message', () => {
    render(<Footer />);
    expect(screen.getByText(/Crafted with/)).toBeInTheDocument();
    expect(screen.getByText(/and a touch of magic/)).toBeInTheDocument();
  });

  test('renders adventure message', () => {
    render(<Footer />);
    expect(screen.getByText(/Ready for the next coding adventure!/)).toBeInTheDocument();
  });

  test('external links open in new tab with security', () => {
    render(<Footer />);
    const githubLink = screen.getByRole('link', { name: /GitHub/ });
    const linkedinLink = screen.getByRole('link', { name: /LinkedIn/ });

    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(linkedinLink).toHaveAttribute('target', '_blank');
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('navigation links use anchor navigation', () => {
    render(<Footer />);
    const homeLink = screen.getByRole('link', { name: /Home/ });
    const skillsLink = screen.getByRole('link', { name: /Skills/ });
    const projectsLink = screen.getByRole('link', { name: /Projects/ });
    const experienceLink = screen.getByRole('link', { name: /Experience/ });

    expect(homeLink).toHaveAttribute('href', '#home');
    expect(skillsLink).toHaveAttribute('href', '#skills');
    expect(projectsLink).toHaveAttribute('href', '#projects');
    expect(experienceLink).toHaveAttribute('href', '#experience');
  });
}); 

