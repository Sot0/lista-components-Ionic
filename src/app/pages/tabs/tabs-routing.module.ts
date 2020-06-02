import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';
import { AvatarPageModule } from '../avatar/avatar.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'configuraciones'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'cuenta',
        loadChildren: () => import('../avatar/avatar.module').then( m => m.AvatarPageModule)
      },
      {
        path: 'contacto',
        loadChildren: () => import('../fab/fab.module').then( m => m.FabPageModule)
      },
      {
        path: 'configuraciones',
        loadChildren: () => import('../infinite-scroll/infinite-scroll.module').then( m => m.InfiniteScrollPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
