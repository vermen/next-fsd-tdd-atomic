import { render, screen } from "@testing-library/react";

import Profile from "@app/profile/page"

describe("Routing / (profile)", () => {
    it("renders the About Page title", () => {
        render(<div><Profile /></div>);
        expect(
            screen.getByRole("heading", { name: /Profile Page/i })
        ).toBeInTheDocument();
    });
});