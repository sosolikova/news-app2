import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/person';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.page.html',
  styleUrls: ['./notebook.page.scss'],
})
export class NotebookPage implements OnInit {

  person:Person ={firstname:'', surname:''}
  themeName:string='';
  public personFirst: string="";
  public personSurname: string="";

  constructor(private storage:StorageService) { }

  async setGetStorage()
  {
    // set storage data
    let person:Person={firstname:this.personFirst,surname:this.personSurname}
    this.storage.create("person",JSON.stringify(person));
    this.storage.create("theme","dark");


    // get storage data
    await this.storage.read("theme").then((data:any)=>{
      if(data.value)
        this.themeName=data.value;
      else
        this.themeName="";
    })
    await this.storage.read("person").then((data:any)=> {
      if(data.value)
      {
        let p=JSON.parse(data.value);
        this.person=p;
      }
      else
        this.person={firstname:"",surname:""};
    })
  }
  async updateStorage()
  {
    let person:Person={firstname:this.personFirst,surname:this.personSurname}
    await this.storage.create("person",JSON.stringify(person));
  }

  async clearStorage()
  {
    this.person.firstname = '';
    this.person.surname = '';
    this.personFirst = '';
    this.personSurname = '';
    await this.storage.clear();
  }


  getFirstname()
  {
    let firstname = this.person.firstname.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    firstname = firstname.toLowerCase();
    return firstname;
  }

  getSurname()
  {
    let surname = this.person.surname.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    surname = surname.toLowerCase();
    return surname;
  }

  getLettersSurname()
  {
    let surname = this.person.surname.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    let letterSurname = surname.toUpperCase().substring(0,3);
    return letterSurname;
  }

  getLettersFirstname()
  {
    let firstname = this.person.firstname.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    let letterFirstname = firstname.toUpperCase().substring(0,2);
    return letterFirstname;
  }

  ngOnInit() {
  }

}
