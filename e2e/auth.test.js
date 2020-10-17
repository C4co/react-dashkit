Feature("Login page")

Scenario("Check the main form", ({ I }) => {
  I.amOnPage("/login")
  I.see("Enter")
  I.see("Create new account")
  I.see("Email")
  I.seeElement("#auth-email")
  I.see("Password")
  I.seeElement("#auth-password")
  I.see("Recover password")
})
