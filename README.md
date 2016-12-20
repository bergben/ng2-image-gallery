# ng2-image-gallery
Basic Angular 2 image gallery.

## Install
```bash
$ npm install ng2-image-gallery --save
```

### Import the module
```TypeScript
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2ImageGalleryModule } from 'ng2-image-gallery'; // <-- import the module
import { MyComponent } from './my.component';

@NgModule({
    imports: [BrowserModule,
              Ng2ImageGalleryModule // <-- include it in your app module
             ],
    declarations: [MyComponent],  
    bootstrap: [MyComponent]
})
export class MyAppModule {}
```
### Import the styles
This library uses <a href="https://v4-alpha.getbootstrap.com/getting-started/download/#package-managers">Bootstrap 4</a> and <a href="https://www.npmjs.com/package/font-awesome">font-awesome</a>, so make sure to install those if you want the default styling to apply.

If you use Sass / Scss you can import the styles like so:
```
@import "{}/node_modules/ng2-image-gallery/ng2-image-gallery.scss";
```
alternatively just include the css file like this:
``` 
<link href="node_modules/ng2-image-gallery/ng2-image-gallery.css" rel="stylesheet" />
```
## Usage

### Use it in your template
```html
<ng2-image-gallery [images]="myImages"></ng2-image-gallery> 
```

whereas "myImages" is an Array of objects that by default would have the following properties:
```TypeScript
export interface ImageInterface {
    thumbnail?: any; //image src for the thumbnail
    image?: any; //image src for the image 
    text?: string; //optional text to show for the image
    [propName: string]: any;
}
```

You can, as it might be more comfortable for you because you have different naming for your properties already, provide different naming for the properties like so:

```html
<ng2-image-gallery [images]="myImages" [asText]="content" [asThumbnail]="mythumb"></ng2-image-gallery> 
```

## Contribute
It would be awesome if someone had the time to make some improvements, like animations etc. Pull requests are much appreciated!

## To-do
 - Provide a demo
