import { Component } from '@angular/core';
import { UserCardComponent } from '../user-card/user-card.component';
import { SearchComponent } from '../search/search.component';
import usersData from './../../../public/assets/users.json'; 

interface Coordinates {
  lat: number;
  lng: number;
}

interface Address {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: Coordinates;
  country: string;
}

interface Hair {
  color: string;
  type: string;
}

interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

interface Company {
  department: string;
  name: string;
  title: string;
  address: Address;
}

interface Crypto {
  coin: string;
  wallet: string;
  network: string;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: Hair;
  ip: string;
  address: Address;
  macAddress: string;
  university: string;
  bank: Bank;
  company: Company;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: Crypto;
  role: string;
}
 

@Component({
  selector: 'app-users-list',
  imports: [UserCardComponent, SearchComponent],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent {
  unFilteredUsers: User[] = usersData;
  public users: User[] = [...this.unFilteredUsers];
  
  receivedFromChild(email: any){
    console.log(email);
    this.users = this.users.filter( user => user.email == email);
  }
  resetUsers(){
    this.users = [...this.unFilteredUsers];
  }
}
