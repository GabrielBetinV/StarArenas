import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Devocionales diarios', url: 'devotional', icon: 'calendar' },
    { title: 'Eventos y actividades', url: 'activities', icon: 'contract' },
    { title: 'Estudio biblico', url: 'studies', icon: 'book' },
    { title: 'Oraciones', url: 'prayer', icon: 'flame' },
    { title: 'Predicas', url: 'preac', icon: 'bookmark' },
    { title: 'Comunidad', url: 'community', icon: 'earth' },
    { title: 'Noticias', url: 'news', icon: 'newspaper' },
  ];

  
    /*public appPages = [
      { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
      { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
      { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
      { title: 'Archived', url: '/folder/archived', icon: 'archive' },
      { title: 'Trash', url: '/folder/trash', icon: 'trash' },
      { title: 'Spam', url: '/folder/spam', icon: 'warning' },
    ];*/

  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
