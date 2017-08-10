import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2ImageGalleryComponent} from './ng2-image-gallery.component';
import { DisplacerComponent, DisplacerPortalDirective } from './ng2-image-gallery-displacer.component';
import { MdCoreModule } from '@angular/material';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
    imports: [
        CommonModule,
        DragulaModule,
        MdCoreModule,
    ],
    declarations: [
        DisplacerPortalDirective,
        DisplacerComponent,
        Ng2ImageGalleryComponent
    ],
    exports: [
        Ng2ImageGalleryComponent
    ]
})
export class Ng2ImageGalleryModule {}