import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { WorkshopsListComponent } from "./workshops-list/workshops-list.component";
import { WorkshopsDetailComponent } from "./workshops-detail/workshops-detail.component";
import { SessionsListComponent } from "./sessions-list/sessions-list.component";
import { AddSessionsComponent } from "./add-sessions/add-sessions.component";

const routes = [
  { component: WorkshopsListComponent, path: "workshops" },
  {
    component: WorkshopsDetailComponent,
    path: "workshops/:id",
    children: [
      { path: "", component: SessionsListComponent },
      { path: "add", component: AddSessionsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, SharedModule]
})
export class AppRoutingModule {}
