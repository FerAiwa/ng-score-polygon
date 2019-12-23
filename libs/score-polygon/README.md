# NG SCORE POLYGON

![Image of ng-polygon-score](https://repository-images.githubusercontent.com/225927254/9748c900-16db-11ea-9f54-0e731cad1a80)

## Demo

Want a peek before downloading? There is a demo avaliable [here](https://feraiwa.github.io/ng-score-polygon/)

## Latest release:

_v.1.0_ released! (23/12/19)

- **ng-score-polygon-comparer** (_new!_)


    <img src="https://feraiwa.github.io/ng-score-polygon/assets/ng-score-polygon-comparer.jpg" alt="Image of ng-polygon-score-comparer component text" width="250" height="auto">

Compare multiple score profiles, play as animation or navigate using the navigation menu.

Watch the graphic change over time in a cool evolution animation.

Check the score-polygon-comparer section for details.

- Added more customization options for the score-polygon-component.Details in Extra Customization section.

## Installation

- In your Angular project:
  `npm i ng-score-polygon --save`

1. Import the ScorePolygonModule in your Angular app.

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { ScorePolygonModule } from 'ng-score-polygon';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ScorePolygonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

## Basic usage ng-score-component

### Description

This component automaticaly generates regular N-side polygons for a list of scores. This can be specialy apealing
to display rated lists from 3 to 12 elements.

The component is totaly responsive, and most of the the styling is customizable. Check the Customization section for details.

1. Create your scores, with the following format:

   `{ label: string; score: number; markerImage?: string; }`

- Label: The name of the entity represented by a score.
- Score: A score in a scale from 0 to 10.
- markerImage (optional): Path to the background image representing the score. If used, should be square-shaped to be properly displayed.
- Example:

```typescript
userScores = [
  { label: 'Proactivity', score: 8, markerImage: './assets/a.jpg' },
  { label: 'Effort', score: 7, markerImage: './assets/b.jpg' },
  { label: 'Creativity', score: 8, markerImage: './assets/c.jpg' }
];
```

2. Define the component in your template.

   ```xml
   <ng-score-polygon [scores]="userScores"></ng-score-polygon>
   ```

## Extra Customization:

Colors and maker´s format can be changed using [property binding].

**NEW!** `[config]`
If you want to set up multiple variables at once, just send the configuration as a plain
js object. Keys are listed below. Just send the ones you actualy want to change, the
rest of variables will remain with the last value assigned or the default.

### Colors (string)

| Variable                   | Description                                             |
| -------------------------- | ------------------------------------------------------- |
| `[ scorePolygonColor ]`    | Sets color of the score polygon.                        |
| `[ comparePolygonColor ]`  | Sets color of the compare polygon. ( **_NEW!_**)        |
| `[ maxScorePolygonColor ]` | Sets color of the wrapper polygon.                      |
| `[ innerLinesColor ]`      | Sets color of the lines from edge to center of polygon. |
| `[ iconBorderColor ]`      | Sets color of the icons border.                         |
| `[ outerCircleColor ]`     | Sets color for the surrounding circle.                  |

### Labels & Text (boolean)

| Variable                | Description                                                                     | Default |
| ----------------------- | ------------------------------------------------------------------------------- | ------- |
| `[ showText ]`          | Enables/disables the score labels at the polygon edges.                         | false   |
| `[ showIcons ]`         | Enable/disables a rounded icon at the polygon edges.                            | true    |
| `[showPercentPolygons]` | Enables/disables small polygons from outside to the center with 10% separation. | true    |
| `[ showOuterCircle ]`   | Shows/hides the circle surrounding the polygon                                  | true    |

## ng-score-polygon-comparer ( **_NEW!_**)

This component provides a visible control UI that allows user to navigate between multiple
score sets, or play them as a slide show.

Just provide the score sets, and it will automaticaly configurate the ng-score-polygon component for you.

```xml
<ng-score-polygon [scoreSets]="userScores"></ng-score-polygon>
```

### Interface

```typescript
interface ScoreSet {
  scores: [{ score: number; label: string; markerImage?: string }];
  setName: string;
}
```

Example

```typescript
const myScores = [
  { setName: 'January', scores: [{ energy: 10, proactivity: 10 }]}
  { setName: 'February', scores: [{ energy: 8.5, proactivity: 6.5}]
]
```

### Aditional config

| Variable       | Description                                                                                                | Default |
| -------------- | ---------------------------------------------------------------------------------------------------------- | ------- |
| `[ autoplay ]` | Begins the slide when the component loads                                                                  | true    |
| `[ loop ]`     | Enables/disables the score labels at the polygon edges.                                                    | true    |
| `[ speed ]`    | Time between a slide and the next (ms)                                                                     | 1500    |
| `[ delay ]`    | Time before animation starts. (ms)                                                                         | 1500    |
| `[ config ]`   | The config that will be set in the score-polygon. Check Extra customization section for the complete list. |

## Contact

Hi! I´m Fer Ayguavives Oti, an Angular enthusiast. I am avaliable for hire! If you like what you see, this component
was usefull to your project or want to contact for a job offer, here is my contact. Any feedback will be apreciated! :)

- Contact: fer.aiwa@gmail.com
- Github: https://github.com/FerAiwa
- Linkdin: https://www.linkedin.com/in/ferayguavives
