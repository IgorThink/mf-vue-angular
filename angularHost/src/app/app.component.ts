import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
// @ts-ignore  
const containerVueElementName = "customVueComponentContainer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  @ViewChild('vueapp', { static: true })
  containerVueRef!: ElementRef;
  @ViewChild('vueapp2', { static: true })
  containerVueRefSecond!: ElementRef;

  root!: any;

  name = "name from Angular";

  selected: number = 0;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    try {
      // @ts-ignore  
      import("settings_user/Settings").then((val) => {
        console.log(val)
        const classVue = val.default
        console.log(classVue, new classVue())
        this.renderer.appendChild(
          this.containerVueRef.nativeElement,
          new classVue()
        );
      });
      import("settings_user/HelloWorld").then((val) => {
        console.log(val)
        const classVue = val.default
        console.log(new classVue(), this.containerVueRefSecond.nativeElement)
        this.renderer.appendChild(
          this.containerVueRefSecond.nativeElement,
          new classVue()
        );
      })
    } catch {}
  }
}
