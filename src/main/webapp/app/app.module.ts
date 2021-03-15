import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { TestDevSharedModule } from 'app/shared/shared.module';
import { TestDevCoreModule } from 'app/core/core.module';
import { TestDevAppRoutingModule } from './app-routing.module';
import { TestDevHomeModule } from './home/home.module';
import { TestDevEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    TestDevSharedModule,
    TestDevCoreModule,
    TestDevHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    TestDevEntityModule,
    TestDevAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class TestDevAppModule {}
