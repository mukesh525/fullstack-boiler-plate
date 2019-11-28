import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { WorkshopsModule } from "./workshops/workshops.module";
import { AppRoutingModule } from "./app-routing.module";
import { AboutComponent } from "./about/about.component";

@NgModule({
  declarations: [AppComponent, AboutComponent],
  imports: [BrowserModule, WorkshopsModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
