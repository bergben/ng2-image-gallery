import {
  Component,
  Directive,
  TemplateRef,
  ViewContainerRef,
  ViewChild,
  Input,
  OnDestroy,
  AfterViewInit
} from '@angular/core';

import {
  TemplatePortal,
  OverlayState,
  OverlayRef,
  Overlay
} from '@angular/material';

@Directive({ selector: '[displacerPortal]' })
export class DisplacerPortalDirective extends TemplatePortal {
  constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
    super(templateRef, viewContainerRef);
  }
}

@Component({
  selector: 'to-body-displacer',
  template: `
<template displacerPortal>
  <ng-content></ng-content>
</template>
`
})
export class DisplacerComponent implements OnDestroy, AfterViewInit {

  private _config = new OverlayState();

  @ViewChild(DisplacerPortalDirective)
  private _portal: DisplacerPortalDirective;

  private _overlayRef: OverlayRef = undefined;

  constructor(private _overlay: Overlay) {}

  public ngOnDestroy() {
    this._overlayRef.detach();
  }

  public ngAfterViewInit() {
    this._overlayRef = this._overlay.create(this._config);
    this._overlayRef.attach(this._portal);
  }
}