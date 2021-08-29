import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegionEntity } from 'src/app/core/entities/region.entity';

import { RegionRepository } from 'src/app/core/repositories/region.repository';

import { HomeState } from '../stores/home.state';
import { HomeStore } from '../stores/home.store';

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

    this.regionRepository.getAllProvinces().subscribe({
      next: (res: RegionEntity[]) => {
        this.homeStore.fetchAllProvincesSuccess(res);
      },
      error: (err: HttpErrorResponse) => {
        this.homeStore.fetchAllProvincesError();
      },
    });
  }
}
