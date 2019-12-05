# NG SCORE POLYGON

![Image of ng-polygon-score](https://repository-images.githubusercontent.com/225927254/9748c900-16db-11ea-9f54-0e731cad1a80)

## Description

This component automaticaly generates regular N-side polygons for a list of scores. This can be specialy apealing
to display rated lists from 3 to 12 elements.

The component is totaly responsive, and most of the the styling is customizable. Check the Customization section for details.

## Demo

Want a peek before downloading? There is a demo avaliable [here](https://feraiwa.github.io/ng-score-polygon/)

## Instalation

- In your Angular project:
  `npm i ng-score-polygon --save`

## Basic usage

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

2. Create your scores, with the following format:

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

3. Define the component in your template.

   ```xml
   <ng-score-polygon [scores]="userScores"></ng-score-polygon>
   ```

## Extra Customization:

Colors and maker´s format can be changed using [property binding].

### Colors (string)

| Variable                   | Description                                             |
| -------------------------- | ------------------------------------------------------- |
| `[ scorePolygonColor ]`    | Sets color of the score polygon.                        |
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

## Contact

Hi! I´m Fer Ayguavives Oti, an Angular enthusiast. I am avaliable for hire! If you like what you see, this component
was usefull to your project or want to contact for a job offer, here is my contact. Any feedback will be apreciated! :)

- Contact: fer.aiwa@gmail.com
- Github: https://github.com/FerAiwa
- Linkdin: https://www.linkedin.com/in/ferayguavives
