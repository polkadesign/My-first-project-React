import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  rawhpcq: string = ' '
  raw7ga0: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('My first project')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'My first project',
      },
    ])
  }
}
