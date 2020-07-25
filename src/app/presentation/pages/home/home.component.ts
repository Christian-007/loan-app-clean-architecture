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
    });
  }

  ngOnInit(): void {
    this.getAllProvinces.execute().subscribe((provinces: RegionModel[]) => {
      console.log('getAllProvinces: ', provinces);
    });

    this.getProvinceById.execute('11').subscribe((province: RegionModel) => {
      console.log('getProvinceById: ', province);
    });

    this.getAllCitiesByProvinceId
      .execute('11')
      .subscribe((cities: RegionModel[]) => {
        console.log('getAllCitiesByProvinceId : ', cities);
      });
  }

  onSubmit(): void {
    console.log('values: ', this.loanForm.value);
  }
}
