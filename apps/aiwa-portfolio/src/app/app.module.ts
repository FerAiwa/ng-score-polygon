import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ScorePolygonModule } from '@aiwa-lab/score-polygon';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ScorePolygonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
