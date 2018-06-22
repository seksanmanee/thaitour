import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { TimeAgoPipe } from '../pipes/timeago/timeago.pipe';
import { DateFilterPipe } from '../pipes/date-filter/date-filter';

@NgModule({
  declarations: [TimeAgoPipe, DateFilterPipe],
  imports: [CommonModule],
  exports: [TimeAgoPipe, DateFilterPipe]
})

export class MainPipeModule { }
