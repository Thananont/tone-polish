import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the app with initial state", () => {
    render(<App />);

    expect(screen.getByText("Tone Polish")).toBeInTheDocument();
    expect(
      screen.getByText("Polish your text with AI-powered tone adjustment")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your text here...")
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /polish/i })).toBeInTheDocument();
  });
});
