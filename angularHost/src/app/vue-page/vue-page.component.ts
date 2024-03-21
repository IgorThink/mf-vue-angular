import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lazy-vue-page',
  templateUrl: './vue-page.component.html',
  styleUrl: './vue-page.component.css',
  standalone: true,
  imports: [CommonModule],
})
export class VuePageComponent {
  @ViewChild('vueapp', { static: true })
  containerVueRef!: ElementRef;
  constructor(private renderer: Renderer2, private route: ActivatedRoute, private detectChangef: ChangeDetectorRef) {
    this.route.data.subscribe((data: any) => {
      if(!data.option) {
        import('settings_user/Settings').then((val) => {
          const classVue = val.default;
          console.log('s', val)
          this.renderer.appendChild(
            this.containerVueRef.nativeElement,
            new classVue()
          );
        });
      } else {
        import('settings_user/CurrentTimeComponent').then((val: any) => {
          const classVue = val.default;
          console.log('h', classVue)
          this.renderer.appendChild(
            this.containerVueRef.nativeElement,
            new classVue.CurrentTimeComponent()
          );
        });
      }
    });
  }

  detect() {
    this.detectChangef.detectChanges()
  }
}
