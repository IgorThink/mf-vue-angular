import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
// import * as Component from 'HelloWorld'
// @ts-ignore  
import HelloWorld from 'remote_app/HelloWorld';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'angularHost';
  @ViewChild('containerVueElementName', { static: true })
  containerVueRef!: ElementRef;

  root!: any;

  window: any = window

  name = "name from Angular";

  selected: number = 0;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    try {
      // loadModule()
      // @ts-ignore  
      import("remote_app/HelloWorld").then((val) => {
        console.log('new component: ', HelloWorld.default.setup())
        // document.appendChild(HelloWorld)
        // this.renderer.appendChild(
        //   this.containerVueRef.nativeElement,
        //   new HelloWorld()
        // );
      });
    } catch {}
  }

  ngOnInit() {
    this.getRemoteComponent()
  }

  getRemoteComponent() {
    // Можно конфигурировать любые параметры динамически
    const uiApplication = {
      protocol: 'http',
      host: 'localhost',
      port: 5001,
      fileName: 'remoteEntry.js'
    }

    const remoteURL = `${uiApplication.protocol}://${uiApplication.host}:${uiApplication.port}/assets/remoteEntry.js`;
    console.log('url remote:', remoteURL)

    const moduleScope = 'home'
    const moduleName = 'Content'
    const element = document.createElement('script');
    element.type = 'text/javascript';
    element.async = true;
    element.src = remoteURL;

    element.onload = () => {
      const remoteComponent = this.loadModule(moduleScope, `./${moduleName}`)
      remoteComponent.then(res => {
        console.log(res);
        // this.containerVueRef.nativeElement.(HelloWorld.default);
      })
    };

    document.head.appendChild(element)
  }
  async loadModule(scope: string, module: string) {
    // @ts-ignore  
    await __webpack_init_sharing__('default');
    // @ts-ignore  
    const container = window[scope];
    // @ts-ignore  
    // await container.init(__webpack_share_scopes__.default);
      // @ts-ignore  
      // const factory = await window[scope].get(module);
    // const Module = factory();
    return 'asd';
  }
}
