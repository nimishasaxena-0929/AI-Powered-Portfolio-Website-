import { render } from "@testing-library/react";
import { screen, fireEvent, waitFor } from "@testing-library/dom";
import { describe, it, expect, vi } from "vitest";
import Navbar from "@/components/navbar";
import ContactSection from "@/components/contact/contact-section";
import TechStackSection from "@/components/tech-stack/tech-stack-section";

describe("Navbar Component", () => {
  it("renders brand name NIMISHA SAXENA and status indicator", () => {
    render(<Navbar />);
    expect(screen.getByText("NIMISHA SAXENA")).toBeInTheDocument();
    expect(screen.getByText("Available for opportunities")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Navbar />);
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Architecture")).toBeInTheDocument();
    expect(screen.getByText("AI Lab")).toBeInTheDocument();
    expect(screen.getByText("Education")).toBeInTheDocument();
  });
});

describe("TechStackSection Component", () => {
  it("renders skills index matching Nimisha Saxena's resume", () => {
    render(<TechStackSection />);
    expect(screen.getAllByText("LANGUAGES").length).toBeGreaterThan(0);
    expect(screen.getAllByText("FRONTEND").length).toBeGreaterThan(0);
    expect(screen.getAllByText("BACKEND").length).toBeGreaterThan(0);
    expect(screen.getAllByText("DATABASES").length).toBeGreaterThan(0);
    expect(screen.getByText("React.js")).toBeInTheDocument();
    expect(screen.getByText("Node.js")).toBeInTheDocument();
  });
});

describe("ContactSection Component", () => {
  it("renders contact form and submits message state", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });

    render(<ContactSection />);

    const nameInput = screen.getByLabelText(/Your Name/i);
    const emailInput = screen.getByLabelText(/Your Email/i);
    const messageInput = screen.getByLabelText(/Message/i);
    const submitBtn = screen.getByRole("button", { name: /Send Message/i });

    fireEvent.change(nameInput, { target: { value: "Recruiter" } });
    fireEvent.change(emailInput, { target: { value: "recruiter@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Let's discuss full stack roles!" } });

    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Message transmitted successfully/i)).toBeInTheDocument();
    });
  });
});
