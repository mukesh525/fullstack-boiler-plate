import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { SharedModule } from "./shared/shared.module";
const routes = [{ component: AboutComponent, path: "" }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
