import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Component1 } from './component1/component1.component'
import { Input } from './input/input.component'
import { AppComponent } from './component/component.component'
import { Component2 } from './component2/component2.component'
import { Component3 } from './component3/component3.component'

@NgModule({
  declarations: [Component1, Input, AppComponent, Component2, Component3],
  imports: [CommonModule, RouterModule],
  exports: [Component1, Input, AppComponent, Component2, Component3],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
