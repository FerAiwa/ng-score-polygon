# ChangeLog

## _Last Release: 1.0.0_

## v. 1.0.0 (23/12/19)

### _New Features_

### **score-polygon-comparer**

Component that allows to navigate between multiple scoresets, or load them a slide show.

It sets the polygon-component and has media-player controls to provide the use
an interface to play.
More details in the README, ng-score-comparer section.

### _Minor updates:_

#### ng-score-polygon component

- Added [compareScores] input. Now 2 scores can be compared in the same graphic.
- New config variables:
  [comparePolygonColor][config] : Provides a way to configurate the polygon at once using a configuration object,
  instead changing parameters one by one using template syntax. This is a faster way when you
  want to customizate multiple params.

- Softened the percentual marker polygons. Now have more opacity to highlight the score.
