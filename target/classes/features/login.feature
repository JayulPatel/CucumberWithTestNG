#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

Feature: Guru99 Login Feature
Scenario Outline: Guru99 Login Test Scenario

Given user is already on Login Page
When  title of Login Page is Guru99 Bank Home Page
Then  user enters "<username>" and "<password>"
Then  user clicks on Login button
Then  user is on Home Page
Then  Close the browser    


Examples:
  | username | password |
  | mngr503151| Ymazusu |
  | vhgfhhb   | fjdsfshh |
  