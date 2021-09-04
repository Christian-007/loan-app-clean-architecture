import { FormGroup } from '@angular/forms';
import { RegionEntity } from '@core/entities/region.entity';

export class HomeState {
  loanForm: FormGroup = null;
  provinces: RegionEntity[] = [];
  cities: RegionEntity[] = [];
  loading: { [key: string]: boolean } = null;
}
