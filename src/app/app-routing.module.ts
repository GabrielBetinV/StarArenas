import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'devotional',
    loadChildren: () => import('./devotional/devotional.module').then( m => m.DevotionalPageModule)
  },
  {
    path: 'activities',
    loadChildren: () => import('./activities/activities.module').then( m => m.ActivitiesPageModule)
  },
  {
    path: 'studies',
    loadChildren: () => import('./studies/studies.module').then( m => m.StudiesPageModule)
  },
  {
    path: 'prayer',
    loadChildren: () => import('./prayer/prayer.module').then( m => m.PrayerPageModule)
  },
  {
    path: 'preac',
    loadChildren: () => import('./preac/preac.module').then( m => m.PreacPageModule)
  },
  {
    path: 'community',
    loadChildren: () => import('./community/community.module').then( m => m.CommunityPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then( m => m.NewsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
