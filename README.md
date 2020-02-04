this is the latest

API REQUESTS TO API/SEEKERS

////////////////////////////////////////////
registering a new jobseeker needs a post request to
{.post} https://droombwlambda.herokuapp.com/api/seekers/register

below is an example of the body expected from this request.

{
"username":"nick7",
"full_name":"nick7 this",
"seekers_email":"test6@mail",
"password":"pass1",
"occupation":"teacher",
"seekers_location":"NewJersey",
"education":"Bachelor",
"experienced":"true"
}

/////////////////////////////////////////////
login
{.post } https://droombwlambda.herokuapp.com/api/seekers/login

example:
{
"username":"nick7",
"password":"pass1"
}

successful log in will give you token to authenticate your requests
//////////////////////////////////////////////
{.put} https://droombwlambda.herokuapp.com/api/seekers/2 note you put the id number on the end

{

"username": "seeker2",
"full_name": "patrick staredited",
"seekers_email": "star@mail",
"occupation": "developer",
"seekers_location": "NewYork",
"education": "bachelor",
"experienced": "false",
"id": "2" <<==============(note this part matches the number at the end of the request above on line 34)

}

//////////////////////////////////////////////
