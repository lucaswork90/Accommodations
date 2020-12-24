import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/angular-material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DashboardComponent } from './dashboard.component';
import { AccommodationsComponent } from './accommodations/accommodations.component';
import { PreviewAccommodationComponent } from './preview-accommodation/preview-accommodation.component';
import { BookAccommodationComponent } from './book-accommodation/book-accommodation.component';
import { AccommodationItemComponent } from './accommodations/accommodation-item/accommodation-item.component';
import {DpDatePickerModule} from 'ng2-date-picker';

@NgModule({
  declarations: [
      DashboardComponent,
      AccommodationsComponent,
      PreviewAccommodationComponent,
      BookAccommodationComponent,
      AccommodationItemComponent,
      AccommodationItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    DpDatePickerModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
