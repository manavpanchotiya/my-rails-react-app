describe("OTP Submission", () => {
  it("should fill and submit the OTP", () => {
    // Visit the page
    cy.visit("/signin");

    // Trigger the OTP container
    cy.get("input[name=email]").type("automationtest@wheel.com");
    cy.get("button[type=submit]").click();

    // Check OTP form is visible
    cy.contains("Enter OTP").should("exist");

    // Fill the OTP directly in the hidden input
    cy.get('input[data-input-otp="true"]').type("084438");

    // Submit the OTP
    cy.get("button[type=submit]").click();

    // Verify redirection to the dashboard
    cy.url().should("include", "/dashboard");
  });
});
