import { Component, OnInit } from '@angular/core';

import { RegionEntity } from 'src/app/core/entities/region.entity';

import { HomeVm } from '../view-models/home.vm';
import { HomeState } from '../stores/home.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homeState: HomeState;

  constructor(private homeVm: HomeVm) {}

  ngOnInit(): void {
    this.homeVm.state$.subscribe(state => {
      this.homeState = state;
    });

    this.homeVm.buildForm();
    this.homeVm.fetchAllProvinces();
  }

  onProvinceSelectChange(selectedProvince: RegionEntity): void {
    // if (selectedProvince) {
    //   this.loading.city = true;
    //   this.getAllCitiesByProvinceId
    //     .execute(selectedProvince.id)
    //     .subscribe((cities: RegionEntity[]) => {
    //       this.loading.city = false;
    //       this.cities = cities;
    //     });
    // }
    // Handle empty value here
  }

  // onCitySelectChange(selectedCity: RegionEntity): void {
  //   console.log('selectedCityId: ', selectedCity);
  // }

  onSubmit(): void {
    // const formData: LoanEntity = this.loanForm.value;
    // this.loading.submitForm = true;
    // this.submitLoan.execute(formData).subscribe((res: MockSuccessResponse) => {
    //   this.loading.submitForm = false;
    //   console.log('success: ', res);
    // });
  }
}
