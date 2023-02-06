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

  }
  async getStorage()
  {

  }
  async updateStorage()
  {

  }
  async deleteFromStorage()
  {

  }
  async clearStorage()
  {

  }

  ngOnInit() {
  }

}
