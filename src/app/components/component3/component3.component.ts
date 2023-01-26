import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-component3',
  templateUrl: 'component3.component.html',
  styleUrls: ['component3.component.css'],
})
export class Component3 {
  @Input()
  rootClassName: string = ''
  @Input()
  text: string = 'Label:'
  @Input()
  textinput_placeholder: string = 'placeholder'

  constructor() {}
}
