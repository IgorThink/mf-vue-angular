import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: 'lazy-component',
  template: `
    <div>
      Angular app lazy
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})

export class LazyComponent { }