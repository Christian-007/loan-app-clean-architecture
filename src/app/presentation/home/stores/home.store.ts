import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { HomeState } from './home.state';

import { Store } from '@core/base/store';
import { RegionEntity } from '@core/entities/region.entity';

@Injectable()
export class HomeStore extends Store<HomeState> {
  constructor(private fb: FormBuilder) {
    super(new HomeState());
  }

  buildForm(): void {
    const loanForm = this.fb.group({
      fullName: ['', Validators.required],
      id: [''],
      email: ['', Validators.required, Validators.email],
      age: [''],
      street: [''],
      province: [''],
      city: [''],
    });

    this.setState({
      ...this.state,
      loanForm,
    });
  }

  fetchAllProvinces(): void {
    this.setState({
      ...this.state,
      loading: {
        ...this.state.loading,
        provinces: true,
      },
    });
  }

  fetchAllProvincesSuccess(provinces: RegionEntity[]): void {
    this.setState({
      ...this.state,
      loading: {
        ...this.state.loading,
        provinces: false,
      },
      provinces,
    });
  }

  fetchAllProvincesError(): void {
    this.setState({
      ...this.state,
      loading: {
        ...this.state.loading,
        provinces: false,
      },
    });
  }
}
