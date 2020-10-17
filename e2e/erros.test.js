Feature("Error")

Scenario("404 Errors", ({ I }) => {
  I.amOnPage("/not-found")
  I.see("Page not found")
  I.see("404")
})
