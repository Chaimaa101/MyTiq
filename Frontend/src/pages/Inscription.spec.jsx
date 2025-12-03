import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Inscription from "./Inscription"; 
import axios from "axios";

jest.mock("axios");

describe("Inscription Component", () => {
  it("should submit form and call API", async () => {
    axios.post.mockResolvedValueOnce({
      data: { message: "User created!" },
    });

    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

    render(<Inscription />);

    fireEvent.change(screen.getByPlaceholderText("Entrez votre nom complet"), {
      target: { value: "Chaimaa" },
    });
    fireEvent.change(screen.getByPlaceholderText("Entrez votre email"), {
      target: { value: "chaimaa@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(".........."), {
      target: { value: "password123" },
    });

    // Le deuxième placeholder ".........." → confirmation
    const confirmInputs = screen.getAllByPlaceholderText("..........");
    fireEvent.change(confirmInputs[1], {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByRole("button", { name: "S'inscrire" }));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        "http://127.0.0.1:8000/api/register",
        {
          name: "Chaimaa",
          email: "chaimaa@example.com",
          password: "password123",
          password_confirmation: "password123",
        }
      );
      expect(alertMock).toHaveBeenCalledWith("Compte créé !");
    });

    alertMock.mockRestore();
  });
});
