import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-component1',
  templateUrl: 'component1.component.html',
  styleUrls: ['component1.component.css'],
})
export class Component1 {
  @Input()
  rootClassName: string = ''
  @Input()
  text: string = 'Signieren vorbereiten'

  constructor() {}
}
