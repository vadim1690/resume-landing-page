import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

// Mock the lazy-loaded components
vi.mock("../components/sections/About", () => ({
  default: () => <div data-testid="about-section">About Mock</div>,
}));

vi.mock("../components/sections/Skills", () => ({
  default: () => <div data-testid="skills-section">Skills Mock</div>,
}));

vi.mock("../components/sections/Projects", () => ({
  default: () => <div data-testid="projects-section">Projects Mock</div>,
}));

vi.mock("../components/sections/Experience", () => ({
  default: () => <div data-testid="experience-section">Experience Mock</div>,
}));

vi.mock("../components/sections/Education", () => ({
  default: () => <div data-testid="education-section">Education Mock</div>,
}));

vi.mock("../components/sections/Contact", () => ({
  default: () => <div data-testid="contact-section">Contact Mock</div>,
}));

// Mock the navbar and footer for simplicity
vi.mock("../components/layout/Navbar", () => ({
  default: () => <div data-testid="navbar">Navbar Mock</div>,
}));

vi.mock("../components/layout/Footer", () => ({
  default: () => <div data-testid="footer">Footer Mock</div>,
}));

describe("App Component", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
