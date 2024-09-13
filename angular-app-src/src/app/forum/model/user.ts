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

export class UserClass implements User {
  principal: string;
  email: string;
  firstName: string;
  lastName: string;
  roles: string[];

  constructor(principal: string, email: string, firstName: string, lastName: string, roles: string[]) {
    this.principal = principal;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.roles = roles;
  }

  isAdmin(): boolean {
    return this.roles.includes('admin');
  }

  isModerator(): boolean {
    return this.roles.includes('moderator');
  }
}
