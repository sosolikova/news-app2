import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/person';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.page.html',
  styleUrls: ['./notebook.page.scss'],
})
export class NotebookPage implements OnInit {

  person:Person ={name:'', email:''}
  themeName:string='';
  public personName: string="";
  public personEmail: string="";

  constructor(private storage:StorageService) { }

  setStorage()
  {
    let person:Person={name:this.personName,email:this.personEmail}
    this.storage.create("person",JSON.stringify(person));
    this.storage.create("theme","dark");
  }
  async getStorage()
  {
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
        this.person={name:"",email:""};
    })
  }
  async updateStorage()
  {
    let person:Person={name:this.personName,email:this.personEmail}
    await this.storage.create("person",JSON.stringify(person));
    await this.storage.create("theme","light");
  }
  async deleteFromStorage()
  {
    await this.storage.delete("theme");
  }
  async clearStorage()
  {
    await this.storage.clear();
  }

  ngOnInit() {
  }

}
