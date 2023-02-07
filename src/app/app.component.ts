import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'General', url: '/folder/general', icon: 'earth' },
    { title: 'Business', url: '/folder/business', icon: 'cash' },
    { title: 'Sports', url: '/folder/sports', icon: 'bicycle' },
    { title: 'Entertainment', url: '/folder/entertainment', icon: 'videocam' },
    { title: 'Technology', url: '/folder/technology', icon: 'laptop' },
    { title: 'Health', url: '/folder/health', icon: 'medkit' },
    { title: 'Science', url: '/folder/science', icon: 'rocket' },
  ];
  constructor() {}
}
