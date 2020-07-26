import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

import { RegionModel } from 'src/app/core/domain/region.model';

@Component({
  selector: 'app-region-field',
  templateUrl: './region-field.component.html',
  styleUrls: ['./region-field.component.scss'],
})
export class RegionFieldComponent {
  @Input() label: string;
  @Input() defaultOption: string;
  @Input() regionList: RegionModel[];
  @Input() loading: boolean;
  @Input() controlRef: FormControl;
  @Output() selectionChange: EventEmitter<string>;

  constructor() {
    this.label = 'Empty Label';
    this.defaultOption = 'Empty default option';
    this.regionList = [];
    this.loading = false;
    this.controlRef = undefined;
    this.selectionChange = new EventEmitter();
  }

  onSelectionChange(event: MatSelectChange): void {
    const selectedRegionValue = event.value;
    this.selectionChange.emit(selectedRegionValue);
  }
}
