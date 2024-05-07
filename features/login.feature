# Feature: Login Page

#   Scenario Outline: As a user, I can log into the secure area

#     Given I am on the login page
#     When I login with <username> and <password>
#     Then I should see a flash message saying <message>

#     Examples:
#       | username        | password              |
#       | standard_user   | secret_sauce!         |
#       | locked_out_user | secret_sauce          |
#       | problem_user    | secret_sauce          |
#       | performance_glitch_user   | secret_sauce |
#       | error_user      | secret_sauce          |
#       | visual_user     | secret_sauce          |
