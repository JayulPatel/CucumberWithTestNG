$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Guru99 Login Feature",
  "description": "",
  "id": "guru99-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Guru99 Login Test Scenario",
  "description": "",
  "id": "guru99-login-feature;guru99-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "title of Login Page is Guru99 Bank Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "guru99-login-feature;guru99-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 32,
      "id": "guru99-login-feature;guru99-login-test-scenario;;1"
    },
    {
      "cells": [
        "mngr503151",
        "Ymazusu"
      ],
      "line": 33,
      "id": "guru99-login-feature;guru99-login-test-scenario;;2"
    },
    {
      "cells": [
        "vhgfhhb",
        "fjdsfshh"
      ],
      "line": 34,
      "id": "guru99-login-feature;guru99-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 33,
  "name": "Guru99 Login Test Scenario",
  "description": "",
  "id": "guru99-login-feature;guru99-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "title of Login Page is Guru99 Bank Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user enters \"mngr503151\" and \"Ymazusu\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInPageStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 8952345400,
  "status": "passed"
});
formatter.match({
  "location": "LogInPageStepDefinition.title_of_Login_Page_is_Guru99_Bank_Home_Page()"
});
formatter.result({
  "duration": 19695100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mngr503151",
      "offset": 13
    },
    {
      "val": "Ymazusu",
      "offset": 30
    }
  ],
  "location": "LogInPageStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 1637473700,
  "status": "passed"
});
formatter.match({
  "location": "LogInPageStepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 3113795800,
  "status": "passed"
});
formatter.match({
  "location": "LogInPageStepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 86822100,
  "error_message": "java.lang.AssertionError: expected [] but found [Guru99 Bank Home Page]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat stepDefinitions.LogInPageStepDefinition.user_is_on_Home_Page(LogInPageStepDefinition.java:61)\r\n\tat ✽.Then user is on Home Page(login.feature:27)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LogInPageStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 34,
  "name": "Guru99 Login Test Scenario",
  "description": "",
  "id": "guru99-login-feature;guru99-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "title of Login Page is Guru99 Bank Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user enters \"vhgfhhb\" and \"fjdsfshh\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user is on Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInPageStepDefinition.user_is_already_on_Login_Page()"
});
formatter.result({
  "duration": 22500933400,
  "status": "passed"
});
formatter.match({
  "location": "LogInPageStepDefinition.title_of_Login_Page_is_Guru99_Bank_Home_Page()"
});
formatter.result({
  "duration": 7501900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vhgfhhb",
      "offset": 13
    },
    {
      "val": "fjdsfshh",
      "offset": 27
    }
  ],
  "location": "LogInPageStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 136612100,
  "status": "passed"
});
formatter.match({
  "location": "LogInPageStepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 836508800,
  "status": "passed"
});
formatter.match({
  "location": "LogInPageStepDefinition.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 49791800,
  "error_message": "java.lang.AssertionError: expected [] but found [Guru99 Bank Home Page]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat stepDefinitions.LogInPageStepDefinition.user_is_on_Home_Page(LogInPageStepDefinition.java:61)\r\n\tat ✽.Then user is on Home Page(login.feature:27)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LogInPageStepDefinition.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});