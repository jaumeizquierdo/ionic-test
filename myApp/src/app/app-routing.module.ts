import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'portfolio', loadChildren: './portfolio/portfolio.module#PortfolioPageModule' },
  { path: 'cards', loadChildren: './cards/cards.module#CardsPageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'slides', loadChildren: './slides/slides.module#SlidesPageModule' },
  { path: 'buttons', loadChildren: './buttons/buttons.module#ButtonsPageModule' },
  { path: 'new-slide', loadChildren: './new-slide/new-slide.module#NewSlidePageModule' },
  { path: 'new-button', loadChildren: './new-button/new-button.module#NewButtonPageModule' },
  { path: 'new-portfolio', loadChildren: './new-portfolio/new-portfolio.module#NewPortfolioPageModule' }
  { path: 'portfolio-b', loadChildren: './portfolio-b/portfolio-b.module#PortfolioBPageModule' },
  { path: 'new-test', loadChildren: './new-test/new-test.module#NewTestPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
