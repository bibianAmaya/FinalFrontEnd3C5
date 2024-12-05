import { describe, test, expect, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Form from "../../../pages/form/Form";
import { CartProvider } from '../../../context/CartContext';
import { MemoryRouter } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

const renderForm = () => {
  render(
    <CartProvider>
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    </CartProvider>
  );
};


describe("Test <Form />", () => {
  test("Debe renderizar el formulario correctamente", () => {
    renderForm();

    const inputName = screen.getByRole("name");
    const inputIdentification = screen.getByRole("identification");
    const inputPhone = screen.getByRole("phone");
    const inputEmail = screen.getByRole("email");
    const inputAmiiboName = screen.getByRole("amiiboName");
    const selectType = screen.getByRole("lista");
    const textareaMessage = screen.getByRole("message");
    const buttonSubmit = screen.getByRole("submit");
    const buttonReload = screen.getByRole("reload");

    expect(inputName).toBeDefined();
    expect(inputName.getAttribute("type")).toBe("text");

    expect(inputIdentification).toBeDefined();
    expect(inputIdentification.getAttribute("type")).toBe("text");

    expect(inputPhone).toBeDefined();
    expect(inputPhone.getAttribute("type")).toBe("tel");

    expect(inputEmail).toBeDefined();
    expect(inputEmail.getAttribute("type")).toBe("email");

    expect(inputAmiiboName).toBeDefined();
    expect(inputAmiiboName.getAttribute("type")).toBe("text");

    expect(selectType).toBeDefined();

    expect(selectType.value).toBe(""); 
    const options = Array.from(selectType.options).map(option => option.value);
    expect(options).toEqual(["", "Figura", "Lana", "Tarjeta"]);

    expect(textareaMessage).toBeDefined();
    expect(textareaMessage.getAttribute("name")).toBe("message");
    expect(textareaMessage.value).toBe(""); 

    expect(buttonSubmit).toBeDefined();
    expect(buttonSubmit.getAttribute("type")).toBe("submit");    

    expect(buttonReload).toBeDefined();
    expect(buttonReload.getAttribute("type")).toBe("button");    

  });

  test("Debe permitir escribir en los campos", async () => {
    renderForm();
    const user = userEvent.setup();

    const inputName = screen.getByRole("name");
    const inputIdentification = screen.getByRole("identification");
    const inputPhone = screen.getByRole("phone");
    const inputEmail = screen.getByRole("email");
    const inputAmiiboName = screen.getByRole("amiiboName");
    const selectType = screen.getByRole("lista");
    const textareaMessage = screen.getByRole("message");

    await user.type(inputName, "Juan Pérez");
    await user.type(inputIdentification, "12345678");
    await user.type(inputPhone, "1234567890");
    await user.type(inputEmail, "juan@example.com");
    await user.type(inputAmiiboName, "Mario");
    await user.selectOptions(selectType, "Figura");
    await user.type(textareaMessage, "Este es un mensaje de prueba");

    expect(inputName.value).toBe("Juan Pérez");
    expect(inputIdentification.value).toBe("12345678");
    expect(inputPhone.value).toBe("1234567890");
    expect(inputEmail.value).toBe("juan@example.com");
    expect(inputAmiiboName.value).toBe("Mario");
    expect(selectType.value).toBe("Figura");
    expect(textareaMessage.value).toBe("Este es un mensaje de prueba");
  });

  
  test("Debe mostrar errores", async () => {
    renderForm();
    const user = userEvent.setup();

    const buttonSubmit = screen.getByRole("submit");
    await user.click(buttonSubmit);

      expect(screen.getByText("El nombre es obligatorio y debe tener al menos 3 caracteres")).toBeDefined();
      expect(screen.getByText("La identificación es obligatoria y debe tener al menos 5 caracteres")).toBeDefined();
      expect(screen.getByText("El teléfono debe tener 10 dígitos")).toBeDefined();
      expect(screen.getByText("El email no es válido")).toBeDefined();
      expect(screen.getByText("El nombre del amiibo es obligatorio")).toBeDefined();
      expect(screen.getByText("Seleccione un tipo válido")).toBeDefined();

  });




});

