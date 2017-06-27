import {
  Component,
  Directive,
  TemplateRef,
  ViewContainerRef,
  ViewChild,
  Input,
  OnDestroy,
  AfterViewInit,
  Inject,
  forwardRef
} from '@angular/core';

import {
  TemplatePortal,
  OverlayState,
  OverlayRef,
  Overlay
} from '@angular/material';

@Directive({ selector: '[displacerPortal]' })
export class DisplacerPortalDirective extends TemplatePortal {
  constructor(@Inject(forwardRef(() => TemplateRef)) templateRef: TemplateRef<any>,@Inject(forwardRef(() => ViewContainerRef)) viewContainerRef: ViewContainerRef) {
    super(templateRef, viewContainerRef);
  }
}

@Component({
  selector: 'to-body-displacer',
  template: `<ng-template displacerPortal>
  <ng-content></ng-content>
  </ng-template>`
})
export class DisplacerComponent implements OnDestroy, AfterViewInit {

  private _config = new OverlayState();

  @ViewChild(DisplacerPortalDirective)
  private _portal: DisplacerPortalDirective;

  private _overlayRef: OverlayRef = undefined;

  constructor(@Inject(forwardRef(() => Overlay)) private _overlay: Overlay) {}

  public ngOnDestroy() {
    this._overlayRef.detach();
  }

  public ngAfterViewInit() {
    this._overlayRef = this._overlay.create(this._config);
    this._overlayRef.attach(this._portal);
  }
}