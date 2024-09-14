/*
{
    "principal": "112496765477357265690",
    "email": "faisalkhanthayub@gmail.com",
    "firstName": "Faisal Khan",
    "lastName": "Thayub Khan",
    "roles": [
        "admin",
        "moderator",
        "user"
    ]
}
 */
export interface User {
  principal: string;
  email: string;
  firstName: string;
  lastName: string;
  roles: string[];
}
