import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "./Counter";
import { act } from "react";

// Test Block
test("verify if + button increases the count", () => {
  // Use act to wrap the rendering and event firing
  act(() => {
    // Render the component on virtual DOM
    render(<Counter />);
  });

  // Select the elements you want to interact with
  const counter = screen.getByTestId("counter");
  const incrementBtn = screen.getByTestId("increment");
  

  // Use act to wrap the interaction if it triggers a state update
  act(() => {
    // Interact with those elements
    fireEvent.click(incrementBtn);
  });

  // Assert the expected result
  expect(counter).toHaveTextContent("1");
});


test("verify if the counter text exist or not", () => {
  // Use act to wrap the rendering and event firing
  act(() => {
    // Render the component on virtual DOM
    render(<Counter />);
  });

  // Select the elements you want to interact with
  const counterText = screen.getByText(/Counter/i);  

  // Use act to wrap the interaction if it triggers a state update

  // Assert the expected result
  expect(counterText).toBeInTheDocument();
});

test("verify if - button increases the count", () => {
    // Use act to wrap the rendering and event firing
    act(() => {
      // Render the component on virtual DOM
      render(<Counter />);
    });
  
    // Select the elements you want to interact with
    const counter = screen.getByTestId("counter");
    const decrementBtn = screen.getByTestId("decrement");
    
  
    // Use act to wrap the interaction if it triggers a state update
    act(() => {
      // Interact with those elements
      fireEvent.click(decrementBtn);
    });
  
    // Assert the expected result
    expect(counter).toHaveTextContent("-1");
  });

