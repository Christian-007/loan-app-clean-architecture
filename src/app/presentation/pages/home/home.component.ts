import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { GetAllProvincesUsecase } from 'src/app/core/usecases/get-all-provinces.usecase';
import { GetProvinceByIdUsecase } from 'src/app/core/usecases/get-province-by-id.usecase';
import { RegionModel } from 'src/app/core/domain/region.model';
import { GetAllCitiesByProvinceIdUsecase } from 'src/app/core/usecases/get-all-cities-by-province-id.usecase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loanForm: FormGroup;
  provinces: RegionModel[];
  cities: RegionModel[];
  loading: { [key: string]: boolean };

  constructor(
    private fb: FormBuilder,
    private getAllProvinces: GetAllProvincesUsecase,
    private getProvinceById: GetProvinceByIdUsecase,
    private getAllCitiesByProvinceId: GetAllCitiesByProvinceIdUsecase,
  ) {
    this.loanForm = this.fb.group({
      fullName: [''],
      id: [''],
      email: [''],
      age: [''],
      address: [''],
      province: [''],
      city: [''],
    });
    this.provinces = [];
    this.cities = [];
    this.loading = {
      province: false,
      city: false,
    };
  }

  ngOnInit(): void {
    this.loading.province = true;
    this.getAllProvinces.execute().subscribe((provinces: RegionModel[]) => {
      console.log('getAllProvinces: ', provinces);
      this.loading.province = false;
      this.provinces = provinces;
    });

    this.getProvinceById.execute('11').subscribe((province: RegionModel) => {
      console.log('getProvinceById: ', province);
    });
  }

  onProvinceSelectChange(selectedProvince: RegionModel): void {
    if (selectedProvince) {
      this.loading.city = true;
      this.getAllCitiesByProvinceId
        .execute(selectedProvince.id)
        .subscribe((cities: RegionModel[]) => {
          console.log('getAllCitiesByProvinceId : ', cities);
          this.loading.city = false;
          this.cities = cities;
        });
    }
    // Handle empty value here
  }

  onCitySelectChange(selectedCity: RegionModel): void {
    console.log('selectedCityId: ', selectedCity);
  }

  onSubmit(): void {
    console.log('values: ', this.loanForm.value);
  }
}
