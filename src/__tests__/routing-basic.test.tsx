import { render, screen } from "@testing-library/react";
// Importa la página raíz (Server Component). Para testear, la usamos como una función que devuelve JSX.
import Home from "@/app/page"; /* con este alias en paths en tsconfig si funciona    "@/*": ["*"], */

/* 
import Home from "@app/page"; ✅ funciona (está mapeado)-->  "@app/*": ["app/*"],
import Home from "../app/page"; ✅ funciona (ruta relativa siempre funciona).
*/

describe("Routing / (home)", () => {
  it("renders the home title", () => {
    // Nota: en pruebas, renderizamos como JSX simple
    render(<div><Home /></div>);
    // Afirmamos que un heading con el texto "Home" aparece
    expect(
      screen.getByRole("heading", { name: /home/i })
    ).toBeInTheDocument();
  });
});
