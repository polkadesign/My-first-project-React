import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-component2',
  templateUrl: 'component2.component.html',
  styleUrls: ['component2.component.css'],
})
export class Component2 {
  @Input()
  InputContent_placeholder: string = 'Verordnung XXX'

  constructor() {}
}
