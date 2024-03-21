import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, Renderer2, ViewChild, inject } from '@angular/core';
import { dateChangedEvent } from './DateChange.event';
// @ts-ignore  
const containerVueElementName = "customVueComponentContainer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  @ViewChild('vueapp', { static: true })
  containerVueRef!: ElementRef;
  @ViewChild('vueapp2', { static: true })
  containerVueRefSecond!: ElementRef;

  root!: any;

  name = "name from Angular";

  isLoaded = false;

  selected: number = 0;

  constructor(private renderer: Renderer2) {}
  ngAfterViewInit() {
    // try {
    //   // @ts-ignore  
    //   import("settings_user/Settings").then((val) => {
    //     const classVue = val.default
    //     this.renderer.appendChild(
    //       this.containerVueRef.nativeElement,
    //       new classVue()
    //     );
    //   });
    //   import("settings_user/HelloWorld").then((val) => {
    //     const classVue = val.default
    //     this.renderer.appendChild(
    //       this.containerVueRef.nativeElement,
    //       new classVue()
    //     );
    //   });
    //   import("settings_user/CurrentTimeComponent").then((val) => {
    //     const classVue = val.default
    //     console.log(new classVue())
    //     val.default.def.emits?.forEach((element: string) => {
    //       new dateChangedEvent(element)
    //     });

    //     this.renderer.appendChild(
    //       this.containerVueRefSecond.nativeElement,
    //       new classVue({
    //         timeZone: 'America/Los_Angeles',
    //         sameValue: 'angularValue'
    //       })
    //     );
    //     const vueTimerComponent = document.querySelector('current-time')
    //     vueTimerComponent?.addEventListener('datechange', (event: any) => console.log('angular catch value', event.detail[0]._value))
    //   })
    // } catch {}
  }

  redirect(option: 'options' | 'composition') {
    window.location.href = `/${option === 'options' ? 'vue-page' : 'vue-page-composition'}`;
  }
}

