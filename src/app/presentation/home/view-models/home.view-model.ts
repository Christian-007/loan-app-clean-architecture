import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HomeState } from '../stores/home.state';
import { HomeStore } from '../stores/home.store';

import { RegionEntity } from '@core/entities/region.entity';
import { RegionRepository } from '@core/repositories/region.repository';

@Injectable()
export class HomeViewModel {
  state$: Observable<HomeState>;

  constructor(
    private homeStore: HomeStore,
    private regionRepository: RegionRepository,
  ) {
    this.state$ = this.homeStore.state$;
  }

  buildForm(): void {
    this.homeStore.buildForm();
  }

  fetchAllProvinces(): void {
    this.homeStore.fetchAllProvinces();

    this.regionRepository.fetchAllProvinces().subscribe({
      next: (res: RegionEntity[]) => {
        this.homeStore.fetchAllProvincesSuccess(res);
      },
      error: (err: HttpErrorResponse) => {
        this.homeStore.fetchAllProvincesError();
      },
    });
  }
}
