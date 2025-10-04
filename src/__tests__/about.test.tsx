import { render, screen } from "@testing-library/react";

import About from "@app/about/page"

describe("Routing / (about)", () => {
    it("renders the About Page title", () => {
        render(<div><About /></div>);
        expect(
            screen.getByRole("heading", { name: /About Pag/i })
        ).toBeInTheDocument();
    });
});