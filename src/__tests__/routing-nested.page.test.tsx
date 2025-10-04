import { render, screen } from "@testing-library/react";
import DashboardPage from "@app/dashboard/page";
import AnalyticsPage from "@app/dashboard/analytics/page";

describe("Routing /dashboard (nested)", () => {
  it("renders the Dashboard title", () => {
    render(<div><DashboardPage /></div>);
    expect(
      screen.getByRole("heading", { name: /dashboard/i })
    ).toBeInTheDocument();
  });

  it("renders the nested Analytics title", () => {
    render(<div><AnalyticsPage /></div>);
    expect(
      screen.getByRole("heading", { name: /analytics/i })
    ).toBeInTheDocument();
  });
});
