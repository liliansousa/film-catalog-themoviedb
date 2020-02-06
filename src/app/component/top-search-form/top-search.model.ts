// Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Custom
import { TopSearchFormComponent } from './top-search-form.component';

@NgModule({
    declarations: [
        TopSearchFormComponent
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
    ],
    exports: [
        TopSearchFormComponent
    ]
  })
  export class TopSearchModel { }