Feature("Home")

Scenario("Check home page", ({ I }) => {
  I.amOnPage("/")
  I.see("React dashkit")
})
