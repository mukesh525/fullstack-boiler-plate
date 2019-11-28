import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { WorkshopsListComponent } from "./workshops-list/workshops-list.component";
import { AppRoutingModule } from "./workshops-routing.module";
import { WorkshopsDetailComponent } from "./workshops-detail/workshops-detail.component";
import { SessionsListComponent } from "./sessions-list/sessions-list.component";
import { AddSessionsComponent } from "./add-sessions/add-sessions.component";
@NgModule({
  declarations: [
    WorkshopsListComponent,
    WorkshopsDetailComponent,
    SessionsListComponent,
    AddSessionsComponent
  ],
  imports: [CommonModule, AppRoutingModule, FormsModule, HttpClientModule],
  exports: [WorkshopsListComponent]
})
export class WorkshopsModule {}
