import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Store } from 'src/app/core/base/store';
import { RegionEntity } from 'src/app/core/entities/region.entity';

import { HomeState } from './home.state';

@Injectable()
export class HomeStore extends Store<HomeState> {
  constructor(private fb: FormBuilder) {
    super(new HomeState());
  }

  buildForm(): void {
    const formGroup = this.fb.group({
      fullName: [''],
      id: [''],
      email: [''],
      age: [''],
      street: [''],
      province: [''],
      city: [''],
    });

    this.setState({
      ...this.state,
      loanForm: formGroup,
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
