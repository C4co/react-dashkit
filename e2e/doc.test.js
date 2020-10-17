Feature("Doc")

Scenario("Check doc page", ({ I }) => {
  I.amOnPage("/doc/home")
  I.seeInTitle("React Dashkit")
  I.see("React Dashkit")
  I.see("Ui kit based on React JS focused to create simple dashboards to small projects")
  I.see("What's inside?")
})

Scenario("Check all doc pages", ({ I }) => {

  function checkPage(path, title){
    I.amOnPage(`/doc/${path}`)
    I.see(title)
    I.see("import")
    I.see("properties")
  }

  checkPage("typography", "Typography")
  checkPage("inputs", "Inputs")
  checkPage("checkbox", "Checkbox")
  checkPage("radio", "Radio")
  checkPage("buttons", "Buttons")
  checkPage("syntax", "Syntax")
  checkPage("grid", "Grid")
  checkPage("form", "Form")
  checkPage("spinner", "Spinner")
  checkPage("table", "Table")
  checkPage("badge", "Badge")
  checkPage("alert", "Alert")
  checkPage("avatar", "Avatar")

})
