DROOM
Click link to see guide in postman or read it here.(Which looks so much nice)
https://documenter.getpostman.com/view/9337598/SWTG4uoJ?version=latest

DROOM

Droom is an app that seeks to bridge the gap between jobseekers and companies looking for the right candidate to fill their job openings.

It attempts to dynamically match job applicants and joblistings based on their capacities/requirements akin to dating apps such as match.com only in this case we match jobseekers and employers.

As the data from companies joblistings and seekers change the app can potentially find appropriate matches based on filtered parameters.

Our mission statement: Make finding the ideal candidate or job easier for both companies and job seekers.

                                SEEKERS ENDPOINT

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

TO REGISTER A NEW SEEKER
POST https://droombwlambda.herokuapp.com/api/seekers/register

This is the endpoint to register a new jobseeker using a post request.
No token is required to register.

The body of the request needs to have the key value pairs like this example

HEADERS
Authorization
Content-Typeapplication/json

BODY raw
{
"username":"JD1",
"full_name":"John Doe",
"seekers_email":"jd1@email",
"password":"pass1",
"occupation":"engineer",
"seekers_location":"Indiana",
"education":"bachelors",
"experienced":"true"
}

TO LOGIN AS A SEEKER
https://droombwlambda.herokuapp.com/api/seekers/login
This is the endpoint to login as a seeker. It requires a username and a password.

On successful login attempt it will return a token as well as information about the users profile that the front end can grab/trim and use. Especially user.id

HEADERS
Authorization
Content-Typeapplication/json
BODY raw
{
"username":"JD1",
"password":"pass1"
}

GET ALL SEEKERS
GET https://droombwlambda.herokuapp.com/api/seekers
Get request to the route above will send a list of all job seekers in the data base. It returns an array of objects.

An error will send an error 500 code and a coresponding message.

There is no need to include anything in the body of the request. BUT the token must be attached to the headers to succeed.

HEADERS
AuthorizationeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWVrZXIiOnsiaWQiOjEwLCJ1c2VybmFtZSI6IkpEMSIsImZ1bGxfbmFtZSI6IkpvaG4gRG9lIiwic2Vla2Vyc19lbWFpbCI6ImpkMUBlbWFpbCIsInBhc3N3b3JkIjoiJDJhJDA0JGNWVHZQc05qdW1aUE5xRllwcm9hMC5hbGRrWWFsN00ucUxiS1J0SmRES1ZJNDZWYWdOV1F1Iiwib2NjdXBhdGlvbiI6ImVuZ2luZWVyIiwic2Vla2Vyc19sb2NhdGlvbiI6IkluZGlhbmEiLCJlZHVjYXRpb24iOiJiYWNoZWxvcnMiLCJleHBlcmllbmNlZCI6InRydWUiLCJza2lsbHMiOm51bGwsInNhbGFyeV9zb3VnaHQiOm51bGwsImVtcGxveW1lbnRfdHlwZV9zb3VnaHQiOm51bGwsImlzQ29tcGFueSI6MCwiY3JlYXRlZE9uIjoiMjAyMC0wMi0wNSAwMzo0MzoyMSJ9LCgfsgfsgJpYXQiOjE1ODA4NzQzNDgsImV4cCI6MTU4MTEzMzU0OH0.BFUZ-wbBRVOZmKK97bRPRBi1NXzangQJJ9cn68300Gk
Content-Typeapplication/json

GET A SPECIFIC SEEKER BASED ON ID
https://droombwlambda.herokuapp.com/api/seekers/2
This is the route to do a get request and find a specific user based on user id. The id of the user must be included in the tail-end of the request. for example:

GET : https://droombwlambda.herokuapp.com/api/seekers/5 No attachments to the body are required. But a token must be attached to the headers to succeed.

HEADERS
AuthorizationeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWVrZXIiOnsiaWQiOjEwLCJ1c2VybmFtZSI6IkpEMSIsImZ1bGxfbmFtZSI6IkpvaG4gRG9lIiwic2Vla2Vyc19lbWFpbCI6ImpkMUBlbWFpbCIsInBhc3N3b3JkIjoiJDJhJDA0JGNWVHZgfgfdgdfQc05qdW1aUE5xRllwcm9hMC5hbGRrWWFsN00ucUxiS1J0SmRES1ZJNDZWYWdOV1F1Iiwib2NjdXBhdGlvbiI6ImVuZ2luZWVyIiwic2Vla2Vyc19sb2NhdGlvbiI6IkluZGlhbmEiLCJlZHVjYXRpb24iOiJiYWNoZWxvcnMiLCJleHBlcmllbmNlZCI6InRydWUiLCJza2lsbHMiOm51bGwsInNhbGFyeV9zb3VnaHQiOm51bGwsImVtcGxveW1lbnRfdHlwZV9zb3VnaHQiOm51bGwsImlzQ29tcGFueSI6MCwiY3JlYXRlZE9uIjoiMjAyMC0wMi0wNSAwMzo0MzoyMSJ9LCJpYXQiOjE1ODA4NzQzNDgsImV4cCI6MTU4MTEzMzU0OH0.BFUZ-wbBRVOZmKK97bRPRBi1NXzangQJJ9cn68300Gk
Content-Typeapplication/json

UPDATE A SEEKER WITH SPECIFIED ID
https://droombwlambda.herokuapp.com/api/seekers/2
ENDPOINT to update/put seeker information. The body expects the format in the example shown. A seekers id must be specified or it will throw an error. That id must be put in the tail end of the route as well as the request body as shown below

PUT : https://droombwlambda.herokuapp.com/api/seekers/2

HEADERS
AuthorizationeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWVrZXIiOnsiaWQiOjEwLCJ1c2VybmFtZSI6IkpEMSIsImZ1bGxfbmFtZSI6IkpvaG4gRG9lIiwic2Vla2Vyc19lbWFpbCI6ImpkMUBlbWFpbCIsInBhc3N3b3JkgfsgfsIjoiJDJhJDA0JGNWVHZQc05qdW1aUE5xRllwcm9hMC5hbGRrWWFsN00ucUxiS1J0SmRES1ZJNDZWYWdOV1F1Iiwib2NjdXBhdGlvbiI6ImVuZ2luZWVyIiwic2Vla2Vyc19sb2NhdGlvbiI6IkluZGlhbmEiLCJlZHVjYXRpb24iOiJiYWNoZWxvcnMiLCJleHBlcmllbmNlZCI6InRydWUiLCJza2lsbHMiOm51bGwsInNhbGFyeV9zb3VnaHQiOm51bGwsImVtcGxveW1lbnRfdHlwZV9zb3VnaHQiOm51bGwsImlzQ29tcGFueSI6MCwiY3JlYXRlZE9uIjoiMjAyMC0wMi0wNSAwMzo0MzoyMSJ9LCJpYXQiOjE1ODA4NzQzNDgsImV4cCI6MTU4MTEzMzU0OH0.BFUZ-wbBRVOZmKK97bRPRBi1NXzangQJJ9cn68300Gk
Content-Typeapplication/json
BODY raw
{
"username":"seeker2",
"full_name":"patrick star",
"seekers_email":"starEDIT@email",
"occupation":"developer",
"seekers_location":"NewYork",
"education":"bachelor",
"experienced":"false",
"id":"2"
}

REMOVE A SEEKER WTIH SPECIFIED ID
Use the endpoint below. Specify the id at the end of the request.

DELETE https://droombwlambda.herokuapp.com/api/seekers/ID

example: DELETE : https://droombwlambda.herokuapp.com/api/seekers/5

token must be attached to request header for it to work.

HEADERS
AuthorizationeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWVrZXIiOnsiaWQiOjEwLgfsgfsgCJ1c2VybmFtZSI6IkpEMSIsImZ1bGxfbmFtZSI6IkpvaG4gRG9lIiwic2Vla2Vyc19lbWFpbCI6ImpkMUBlbWFpbCIsInBhc3N3b3JkIjoiJDJhJDA0JGNWVHZQc05qdW1aUE5xRllwcm9hMC5hbGRrWWFsN00ucUxiS1J0SmRES1ZJNDZWYWdOV1F1Iiwib2NjdXBhdGlvbiI6ImVuZ2luZWVyIiwic2Vla2Vyc19sb2NhdGlvbiI6IkluZGlhbmEiLCJlZHVjYXRpb24iOiJiYWNoZWxvcnMiLCJleHBlcmllbmNlZCI6InRydWUiLCJza2lsbHMiOm51bGwsInNhbGFyeV9zb3VnaHQiOm51bGwsImVtcGxveW1lbnRfdHlwZV9zb3VnaHQiOm51bGwsImlzQ29tcGFueSI6MCwiY3JlYXRlZE9uIjoiMjAyMC0wMi0wNSAwMzo0MzoyMSJ9LCJpYXQiOjE1ODA4NzQzNDgsImV4cCI6MTU4MTEzMzU0OH0.BFUZ-wbBRVOZmKK97bRPRBi1NXzangQJJ9cn68300Gk
Content-Typeapplication/json

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
COMPANIES ENDPOINTS

Request to companies have api/companies in the request line.

Login and register do not need a token.

TO REGISTER A NEW COMPANY
https://droombwlambda.herokuapp.com/api/companies/register

No token required.
Please follow the key value pairs specified in the example to register a new company.
Successful registration gives a response 201 and returns data on the company with new company_id.
Failure to register returns error 500

HEADERS
Authorization
Content-Typeapplication/json
BODY raw
{
"company_name":"medlabs",
"company_email":"med@email.com",
"password":"pass1",
"companies_description":"This company is the first one being tested for registration...",
"companies_location":"NewYork",
"industry_type":"Healthcare",
"isCompany":"true"
}

TO LOGIN AS A COMPANY
https://droombwlambda.herokuapp.com/api/companies/login
Success returns a token and company details including company id.

Login requires valid company_email and password.
Each company email is unique and cant be used to register again.

Token generated from login must be saved to local storage for later use. For the purpose of our APP the token is valid for 3 days or until deleted by heroku.

HEADERS
Authorization
Content-Typeapplication/json
BODY raw
{
"company_email":"med@email.com",
"password":"pass1"

}

GET A LIST OF ALL COMPANIES IN DATABASE
https://droombwlambda.herokuapp.com/api/companies
ENDPOINT to return a list of all registered companies. Returns an array of objects. Token needs to be used to succeed.

HEADERS
AuthorizationeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55Ijp7ImlkIjo3LCJjbgfsgfs21wYW55X25hbWUiOiJtZWRsYWJzIiwiY29tcGFueV9lbWFpbCI6Im1lZEBlbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQwNCQwUlVjV2lIdG9Fc1NoTmZWNzE0emcuZ01Qd1h6YlNTOVZpUVYvVTRqZ2ZhMkM5blpyZmdEQyIsImNvbXBhbmllc19kZXNjcmlwdGlvbiI6IlRoaXMgY29tcGFueSBpcyB0aGUgZmlyc3Qgb25lIGJlaW5nIHRlc3RlZCBmb3IgcmVnaXN0cmF0aW9uLi4uIiwiY29tcGFuaWVzX2xvY2F0aW9uIjoiTmV3WW9yayIsImluZHVzdHJ5X3R5cGUiOiJIZWFsdGhjYXJlIiwiaXNDb21wYW55IjoidHJ1ZSIsImNyZWF0ZWRPbiI6IjIwMjAtMDItMDUgMDQ6MTU6NDIifSwiaWF0IjoxNTgwODc2NDA0LCJleHAiOjE1ODExMzU2MDR9.usew1yZjjlWTwEXJjHrVvUuhebjLMYrKcDLw9lsqRhI
Content-Typeapplication/json

GET A COMPANY WITH SPECIFIC ID
GET https://droombwlambda.herokuapp.com/api/companies/id
Request must include token.
Must have id number specified at the end of the get request as shown below:

GET https://droombwlambda.herokuapp.com/api/companies/4

Success return data on the company.
Error returns a code 500

HEADERS
AuthorizationeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55Ijp7ImlkIjo3LCJjb21wYW55X25hbWUiOiJtZWRsYWJzIiwiY29tcGFueV9lbWFpbCI6Im1lZEBlbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQwNCQwUlVjV2lIdG9Fc1NoTmZWNzE0emcuZ01Qd1h6YlNTOVZpUVYvVTRqZ2ZhMkM5blpyZmdEQyIsImNvbXBhbmllc19kZXNjcmlwdGlvbiI6IlRoaXMgY29tcGFuegfsgfsSBpcyB0aGUgZmlyc3Qgb25lIGJlaW5nIHRlc3RlZCBmb3IgcmVnaXN0cmF0aW9uLi4uIiwiY29tcGFuaWVzX2xvY2F0aW9uIjoiTmV3WW9yayIsImluZHVzdHJ5X3R5cGUiOiJIZWFsdGhjYXJlIiwiaXNDb21wYW55IjoidHJ1ZSIsImNyZWF0ZWRPbiI6IjIwMjAtMDItMDUgMDQ6MTU6NDIifSwiaWF0IjoxNTgwODc2NDA0LCJleHAiOjE1ODExMzU2MDR9.usew1yZjjlWTwEXJjHrVvUuhebjLMYrKcDLw9lsqRhI
Content-Typeapplication/json

DELETE A SPECIFIC COMPANY FROM DATABASE
https://droombwlambda.herokuapp.com/api/jobs/company/id
Token required
Company id must be in the end of the request
example:

DELETE https://droombwlambda.herokuapp.com/api/companies/5

Success send message "removed"

UPDATING A SPECIFIC COMPANY
https://droombwlambda.herokuapp.com/api/companies/id

ENDPOINT TO UPDATE COMPANY Needs token.
Company id must be in the end of the request for example:
PUT https://droombwlambda.herokuapp.com/api/companies/6

The id should also be contained in the body of the request and should match.

HEADERS
AuthorizationeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55Ijp7ImlkIjoyLCJjb21wYW55X25hbWUiOiJjb21wMiIsImNvbXBhbnlfZW1haWwiOiJjb21wMkBlbWFpbCIsInBhc3N3b3JkIjoiJDJhJDA0JEE0aE9BZlgySFUgfsgfsg0OFFmM3RpMnlEai5BQ1lnYXpUOUpQRS5JZS82MkNmQ1VtY1Q5R1BFODB5IiwiY29tcGFuaWVzX2Rlc2NyaXB0aW9uIjpudWxsLCJjb21wYW5pZXNfbG9jYXRpb24iOiJOZXdZb3JrIiwiaW5kdXN0cnlfdHlwZSI6Im1lZGljYWwiLCJpc0NvbXBhbnkiOjEsImNyZWF0ZWRPbiI6IjIwMjAtMDItMDMgMTk6NDE6MDkifSwiaWF0IjoxNTgwODY3MzI1LCJleHAiOjE1ODExMjY1MjV9.zYZ2t89YdvD0FJh8QPp0a27YVseZoUmtdWCr-kLP2MA
Content-Typeapplication/json
BODY raw

{
"id":"6",
"company_name":"bob the builder",
"company_email":"bb@email.com",
"password":"pass1",
"companies_description":"This company builds stuff this was edited to test PUT..",
"companies_location":"NewYork",
"industry_type":"Infrastructure"
}

joblisting

JOBLISTING API has /api/jobs

POST new joblisting
https://droombwlambda.herokuapp.com/api/jobs
requires a token and expects request to have data like the example below:
{ "companies_id":"6", "job_position":"teacher", "company":"comp6", "job_location":"Arizona", "salary":"120000"
}

HEADERS
AuthorizationeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55Ijp7ImlkIjo2LCJjb21wYW55X25hbWUiOiJjb21wNiIsImNvbXBhbnlfZW1haWwiOiJjb21wNkBlbWFpbCIsInBhc3N3b3JkIjoiJDJhJDA0JER0UVA3MgfsgfsGFPZUYveWVwUTVBY3VmUC5kSTRQYWFUM1h0emtwUmtXWmlDZEZxY1hZa2FNV1F5IiwiY29tcGFuaWVzX2Rlc2NyaXB0aW9uIjpudWxsLCJjb21wYW5pZXNfbG9jYXRpb24iOiJBcml6b25hIiwiaW5kdXN0cnlfdHlwZSI6ImVkdWNhdGlvbiIsImlzQ29tcGFueSI6MSwiY3JlYXRlZE9uIjoiMjAyMC0wMi0wNCAyMjoxNjoxMCJ9LCJpYXQiOjE1ODA4NjM2MDMsImV4cCI6MTU4MTEyMjgwM30.eiG26cI9jYQlM8OMzvXeeZOgoQCgYhdQDD1f_C55n9E
Content-Typeapplication/json
BODY raw

{
"companies_id":"6",
"job_position":"teacher",
"company":"comp6",
"job_location":"Arizona",
"salary":"120000"
}

RETRIEVE A LIST OF ALL JOBLISTINGS REGARDLESS OF WHICH COMPANY CREATED THEM
https://droombwlambda.herokuapp.com/api/jobs
Only requires token.

Success returns an array of objects

HEADERS
AuthorizationeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55Ijp7ImlkIjo2LCJjb21wYW55X25hbWUiOiJjb21wNiIsImNvbXBhbnlfZW1haWwiOiJjb21wNkBlbWFpbCIsInBhc3N3b3JkIjoiJDJhJDA0JER0UVA3MGFPZUYveWVwUTVBY3VmUC5kSTRQYWFUM1h0emtwUmtXWmlDZEZxY1hZa2FNV1F5IiwiY29tcGFuaWVzX2Rlc2NyaXB0aW9uIjpudWxsLCJjb21wYW5gfsgfsgfspZXNfbG9jYXRpb24iOiJBcml6b25hIiwiaW5kdXN0cnlfdHlwZSI6ImVkdWNhdGlvbiIsImlzQ29tcGFueSI6MSwiY3JlYXRlZE9uIjoiMjAyMC0wMi0wNCAyMjoxNjoxMCJ9LCJpYXQiOjE1ODA4NjM2MDMsImV4cCI6MTU4MTEyMjgwM30.eiG26cI9jYQlM8OMzvXeeZOgoQCgYhdQDD1f_C55n9E
Content-Typeapplication/json

GET A SPECIFIC JOBLISTING
https://droombwlambda.herokuapp.com/api/jobs/3
ENDPOINT TO GET joblisting with specific id.
Needs to include job id in the request.

HEADERS
AuthorizationeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55Ijp7ImlkIjo2LCJjb21wYW55X25hbWUiOiJjb21wNiIsImNvbXBhbnlfZW1haWwiOiJjb21wNkBlbWFpbCIsInBhc3N3b3JkIjoiJDJhJDA0JER0UVA3MGFPZUYveWVwUTVBY3VmUC5kSTRQYWFUM1h0emtwUmtXWmlDZEZxY1hZa2FNV1F5IiwiY29tcGFuaWVzX2Rlc2NyaXB0aW9uIjpudWxsLCJjb21wYW5pZXNfbG9jYXRpb24iOiJBcml6b25hIiwiaW5kdXN0cnlfdHlwZSI6ImVkdWNhdGlvbiIsImlzQ29tcGFueSI6MSwiY3JlYXRlZE9uIjoiMjAyMC0wgfsgfsMi0wNCAyMjoxNjoxMCJ9LCJpYXQiOjE1ODA4NjM2MDMsImV4cCI6MTU4MTEyMjgwM30.eiG26cI9jYQlM8OMzvXeeZOgoQCgYhdQDD1f_C55n9E
Content-Typeapplication/json

GET JOBLISTINGS belonging to specified company id
https://droombwlambda.herokuapp.com/api/jobs/company/4
Requires token. path is api/jobs/company/id where id needs to be a specified number

Success returns the specified array of jobs.
Failure give error code 500.

HEADERS
AuthorizationeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55Ijp7ImlkIjo2LCJjb21wYW55X25hbWUiOiJjb21wNiIsImNvbXBhbnlfZW1haWwiOiJjb21wNkBlbWFpbCIsInBhc3N3b3JkIjoiJDJhJDA0JER0UVA3MGFPZUYveWVwUTVBY3VmUC5kSTRQYWFUM1h0emtwUmtXWmlDZEZxY1hZa2FNV1F5IiwiY29tcGFuaWVzX2Rlc2NyaXB0aW9uIjpudWxsLCJjb21wYW5pZXgfsgfsNfbG9jYXRpb24iOiJBcml6b25hIiwiaW5kdXN0cnlfdHlwZSI6ImVkdWNhdGlvbiIsImlzQ29tcGFueSI6MSwiY3JlYXRlZE9uIjoiMjAyMC0wMi0wNCAyMjoxNjoxMCJ9LCJpYXQiOjE1ODA4NjM2MDMsImV4cCI6MTU4MTEyMjgwM30.eiG26cI9jYQlM8OMzvXeeZOgoQCgYhdQDD1f_C55n9E
Content-Typeapplication/json

DELETE A JOBLISTING
https://droombwlambda.herokuapp.com/api/jobs/8
Id must be specified at end of request and token is required.

Success returns message:"removed"
Entering a non existent company id number returns an error.

HEADERS
AuthorizationeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55Ijp7ImlkIjo2LCJjb21wYW55X25hbWUiOiJjb21wNiIsImNvbXBhbnlfZW1haWwiOiJjb21wNkBlbWFpbCIsInBhc3N3b3JkIjoiJDJhJDA0JER0UVA3MGFPZUYveWVwUTVBY3VmUC5kSTRQYWFUM1h0emtwUmtXWmlDZEZxY1hZa2FNV1F5IiwiY29tcGFuaWVzX2Rlc2NyaXB0aW9uIjpudWxsLCJjb21wYW5gfsgfsgpZXNfbG9jYXRpb24iOiJBcml6b25hIiwiaW5kdXN0cnlfdHlwZSI6ImVkdWNhdGlvbiIsImlzQ29tcGFueSI6MSwiY3JlYXRlZE9uIjoiMjAyMC0wMi0wNCAyMjoxNjoxMCJ9LCJpYXQiOjE1ODA4NjM2MDMsImV4cCI6MTU4MTEyMjgwM30.eiG26cI9jYQlM8OMzvXeeZOgoQCgYhdQDD1f_C55n9E
Content-Typeapplication/json

UPDATE Joblisting
PUT https://droombwlambda.herokuapp.com/api/jobs/7

Needs token
company_id,job_position,company are not nullable. Sample data shape below. Success returns message. Updated.

HEADERS
Content-Typeapplication/json
AuthorizationeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWVrZXIiOnsiaWQiOjEwLCJ1c2VybmFtZSI6Im5pY2s3IiwiZnVsbF9uYW1lIjoibmljazcgdGhpcyIsInNlZWtlcnNfZW1haWwiOiJ0ZXN0NkBtYWlsIiwicGFzc3dvcmQiOiIkMmEkMDQkUTV2aThLMTkubkgvV0IvSWlJV2padVRpSkUxSWVnQlNLVjFQYU43dm9MNlhRRy83Q0lsNE8iLCJvY2N1cGF0aW9uIjoidGVhY2hgfsgfsglciIsInNlZWtlcnNfbG9jYXRpb24iOiJOZXdKZXJzZXkiLCJlZHVjYXRpb24iOiJCYWNoZWxvciIsImV4cGVyaWVuY2VkIjoidHJ1ZSIsInNraWxscyI6bnVsbCwic2FsYXJ5X3NvdWdodCI6bnVsbCwiZW1wbG95bWVudF90eXBlX3NvdWdodCI6bnVsbCwiaXNDb21wYW55IjowLCJjcmVhdGVkT24iOiIyMDIwLTAyLTAzIDIwOjE2OjU0In0sImlhdCI6MTU4MDc2MTAzNywiZXhwIjoxNTgxMDIwMjM3fQ.08tGjZMyuTC2KlCG6w7ricce0wSyY1lMCdEo2eBnZxE

BODY raw
{
"companies_id":"3",
"job_position":"cook",
"description":"make good food, bake cakes whatever yum yum",
"company":"comp3",
"job_location":"NJ",
"education_required":"null",
"experience_required":"true",
"skills_required":"null",
"salary":"90000",
"employment_type":"part-time"
}
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
MATCHES
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

GET MATCHED JOBLISTINGS for specified jobseeker
Joblisting is matched with seekers occupation
Seekers id must be specified at the end of the request as the example below
https://droombwlambda.herokuapp.com/api/matches/matchseeker/6

Token needed. Returns seekers that match joblisting with specified id based on occupation.

HEADERS
Content-Typeapplication/json
AuthorizationeyJhbGgfsgfsiOjEwLCJ1c2VybmFtZSI6Im5pY2s3IiwiZnVsbF9uYW1lIjoibmljazcgdGhpcyIsInNlZWtlcnNfZW1haWwiOiJ0ZXN0NkBtYWlsIiwicGFzc3dvcmQiOiIkMmEkMDQkUTV2aThLMTkubkgvV0IvSWlJV2padVRpSkUxSWVnQlNLVjFQYU43dm9MNlhRRy83Q0lsNE8iLCJvY2N1cGF0aW9uIjoidGVhY2hlciIsInNlZWtlcnNfbG9jYXRpb24iOiJOZXdKZXJzZXkiLCJlZHVjYXRpb24iOiJCYWNoZWxvciIsImV4cGVyaWVuY2VkIjoidHJ1ZSIsInNraWxscyI6bnVsbCwic2FsYXJ5X3NvdWdodCI6bnVsbCwiZW1wbG95bWVudF90eXBlX3NvdWdodCI6bnVsbCwiaXNDb21wYW55IjowLCJjcmVhdGVkT24iOiIyMDIwLTAyLTAzIDIwOjE2OjU0In0sImlhdCI6MTU4MDc2MTAzNywiZXhwIjoxNTgxMDIwMjM3fQ.08tGjZMyuTC2KlCG6w7ricce0wSyY1lMCdEo2eBnZxE

GET MATCH SEEKERS for joblisting SPECIFIED ID based on occupation
GET https://droombwlambda.herokuapp.com/api/matches/matchjob/1

Matches a job seeker with specific id to jobs based on matching occupation and job position. This list is dynamic and will change as the database for joblistings and seekers information changes over time.

HEADERS
Content-Typeapplication/json
AuthorizationeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWVrZXIiOnsiaWQiOjEwLCJ1c2VybmFtZSI6Im5pY2s3IiwiZnVsbF9uYW1lIjoibmljazcgdGhpcyIsInNlZWtlcnNfZW1haWwiOiJ0ZXN0NkBtYWlsIiwicGFzc3dgfsgfsgfsvcmQiOiIkMmEkMDQkUTV2aThLMTkubkgvV0IvSWlJV2padVRpSkUxSWVnQlNLVjFQYU43dm9MNlhRRy83Q0lsNE8iLCJvY2N1cGF0aW9uIjoidGVhY2hlciIsInNlZWtlcnNfbG9jYXRpb24iOiJOZXdKZXJzZXkiLCJlZHVjYXRpb24iOiJCYWNoZWxvciIsImV4cGVyaWVuY2VkIjoidHJ1ZSIsInNraWxscyI6bnVsbCwic2FsYXJ5X3NvdWdodCI6bnVsbCwiZW1wbG95bWVudF90eXBlX3NvdWdodCI6bnVsbCwiaXNDb21wYW55IjowLCJjcmVhdGVkT24iOiIyMDIwLTAyLTAzIDIwOjE2OjU0In0sImlhdCI6MTU4MDc2MTAzNywiZXhwIjoxNTgxMDIwMjM3fQ.08tGjZMyuTC2KlCG6w7ricce0wSyY1lMCdEo2eBnZxE

TO SAVE A MATCHED JOBLISTING OR SEEKER
POST https://droombwlambda.herokuapp.com/api/matches

Stores all saved matches by the company posting the joblisting or the interested job seeker.
If the company was the one that post this match flag fave_for_job:"true".
If the job seeker posted this saved match then flag fave_of_seeker as "true"
Body of request example:

{
"id": 7,
"seekers_id": 3,
"joblisting_id": 4,
"fave_of_seeker": "true",
"fave_for_job": "false",
"matched_occupation": "true"
}
token is needed.

GET SAVED MATCHES
https://droombwlambda.herokuapp.com/api/matches
Needs token

HEADERS
Content-Typeapplication/json
AuthorizationeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWVrZXIiOnsiaWQiOjEwLCJ1c2VybmFtZSI6Im5pY2s3IiwiZnVsbF9uYW1lIjoibmljazcgdGhpcyIsInNlZWtlcnNfZW1haWwiOiJ0ZXN0NkBtYWlsIiwicGFzc3dvcmQgfsgfsgfsiOiIkMmEkMDQkUTV2aThLMTkubkgvV0IvSWlJV2padVRpSkUxSWVnQlNLVjFQYU43dm9MNlhRRy83Q0lsNE8iLCJvY2N1cGF0aW9uIjoidGVhY2hlciIsInNlZWtlcnNfbG9jYXRpb24iOiJOZXdKZXJzZXkiLCJlZHVjYXRpb24iOiJCYWNoZWxvciIsImV4cGVyaWVuY2VkIjoidHJ1ZSIsInNraWxscyI6bnVsbCwic2FsYXJ5X3NvdWdodCI6bnVsbCwiZW1wbG95bWVudF90eXBlX3NvdWdodCI6bnVsbCwiaXNDb21wYW55IjowLCJjcmVhdGVkT24iOiIyMDIwLTAyLTAzIDIwOjE2OjU0In0sImlhdCI6MTU4MDc2MTAzNywiZXhwIjoxNTgxMDIwMjM3fQ.08tGjZMyuTC2KlCG6w7ricce0wSyY1lMCdEo2eBnZxE

DELETING saved MATCHES
DELETE https://droombwlambda.herokuapp.com/api/matches/id

Delete a match requires a token. Specify id at end of request
Needs token
example:
https://droombwlambda.herokuapp.com/api/matches/5

HEADERS
Content-Typeapplication/json
AuthorizationeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWVrZXIiOnsiaWQiOjEwLCJ1c2VybmFtZSI6Im5pY2s3IiwiZnVsbF9uYW1lIjoibmljazcgdGhpcyIsInNlZWtlcnNfZW1haWwiOiJ0ZXN0NkBtYWlsIiwicGFzc3dvcmQiOiIkMmEkMDQkUTV2aThLMTkubkgvV0IvSWlJV2padVRpSkUxSWVnQlNLVjFQYU43dm9MNlhRRy83Q0lsNE8iLCJvY2N1cGF0aW9uIjoidGVhY2hlcgfsgfsdgfsdiIsInNlZWtlcnNfbG9jYXRpb24iOiJOZXdKZXJzZXkiLCJlZHVjYXRpb24iOiJCYWNoZWxvciIsImV4cGVyaWVuY2VkIjoidHJ1ZSIsInNraWxscyI6bnVsbCwic2FsYXJ5X3NvdWdodCI6bnVsbCwiZW1wbG95bWVudF90eXBlX3NvdWdodCI6bnVsbCwiaXNDb21wYW55IjowLCJjcmVhdGVkT24iOiIyMDIwLTAyLTAzIDIwOjE2OjU0In0sImlhdCI6MTU4MDc2MTAzNywiZXhwIjoxNTgxMDIwMjM3fQ.08tGjZMyuTC2KlCG6w7ricce0wSyY1lMCdEo2eBnZxE
