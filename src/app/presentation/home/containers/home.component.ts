import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { HomeViewModel } from '../view-models/home.view-model';
import { HomeState } from '../stores/home.state';
import { FormSnackbarComponent } from '../components/form-snackbar/form-snackbar.component';

import { RegionEntity } from '@core/entities/region.entity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homeState: HomeState;

  constructor(
    private homeViewModel: HomeViewModel,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.homeViewModel.state$.subscribe((state: HomeState) => {
      this.homeState = state;
    });

    this.homeViewModel.buildForm();
    this.homeViewModel.fetchAllProvinces();
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
    this.openSnackbar();
    // const formData: LoanEntity = this.loanForm.value;
    // this.loading.submitForm = true;
    // this.submitLoan.execute(formData).subscribe((res: MockSuccessResponse) => {
    //   this.loading.submitForm = false;
    //   console.log('success: ', res);
    // });
  }

  private openSnackbar(): void {
    const durationInMs = 4000;
    this.snackBar.openFromComponent(FormSnackbarComponent, {
      duration: durationInMs,
    });
  }
}
