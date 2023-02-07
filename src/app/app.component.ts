import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Obecné', url: '/folder/Inbox', icon: 'earth' },
    { title: 'Business', url: '/folder/Outbox', icon: 'cash' },
    { title: 'Sport', url: '/folder/Favorites', icon: 'bicycle' },
    { title: 'Umění', url: '/folder/Archived', icon: 'videocam' },
    { title: 'Technologie', url: '/folder/Trash', icon: 'laptop' },
    { title: 'Zdraví', url: '/folder/Spam', icon: 'medkit' },
    { title: 'Věda', url: '/folder/Spam', icon: 'rocket' },
  ];
  constructor() {}
}
