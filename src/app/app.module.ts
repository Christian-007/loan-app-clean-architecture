import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { RegionRepository } from './core/repositories/region.repository';
import { RegionMockRepository } from './data/repository/region-mock-repository/region-mock.repository';
import { DataModule } from './data/data.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './presentation/shared/components/navbar/navbar.module';
import { routes } from './router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    DataModule,
    NavbarModule,
    RouterModule.forRoot(routes),
  ],
  providers: [{ provide: RegionRepository, useClass: RegionMockRepository }],
  bootstrap: [AppComponent],
})
export class AppModule {}
