import { NgModule } from '@angular/core';
import {HoverDirective} from "./shared/directive/hover.directive";

@NgModule({
  declarations: [
    HoverDirective
  ],
  imports: [

  ],
  providers: [],
  exports: [
    HoverDirective
  ]
})
export class SharedModule { }
