import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-input',
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.css'],
})
export class Input {
  @Input()
  InputContent_placeholder: string = 'Verordnung XXX'

  constructor() {}
}
