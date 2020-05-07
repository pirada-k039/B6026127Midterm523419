import { Component, OnInit } from '@angular/core';

interface user_profile{
  studentid: string,
  name: string,
  gender: string,
  birthyear: number,
  email: string,
  phone: string,
  img: string,
  address: string,
  comment: string
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  studentid: string;
  name: string;
  gender: string;
  birthyear: number;
  email: string;
  phone: string;
  img: string;
  address: string;
  comment: string;

  profile: user_profile

  constructor() { 
    this.profile = {
      studentid: '',
      name: '',
      gender: '',
      birthyear: 0,
      email: '',
      phone: '',
      img: 'https://api.adorable.io/avatars/285/abott@adorable.io.png',
      address: 'SUT 111 University Avenue, Suranaree Sub-Distric, Muang Nakhon Ratchasima Distric, Nakhon Ratchasima 30000 Thailand',
      comment: ''
    }
  }

  ngOnInit(): void {
    this.studentid="B6026127";
    this.name="Pirada Kaewpaitoon";
    this.gender="Female";
    this.birthyear=1998;
    this.email="pirada.k0627@hotmail.com";
    this.phone="0918681391";
    this.img="https://api.adorable.io/avatars/285/abott@adorable.io.png";
    this.address="SUT 111 University Avenue, Suranaree Sub-Distric, Muang Nakhon Ratchasima Distric, Nakhon Ratchasima 30000 Thailand";

  }

  showAddress($e){
    alert(this.address);
  }

}
