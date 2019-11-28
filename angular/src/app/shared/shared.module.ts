import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilterComponent } from "./filter/filter.component";
import { FormsModule } from "@angular/forms";
import { VotingComponent } from "./voting/voting.component";
import { DurationPipe } from "./duration.pipe";

@NgModule({
  declarations: [FilterComponent, VotingComponent, DurationPipe],
  imports: [CommonModule, FormsModule],
  exports: [FilterComponent, VotingComponent, DurationPipe]
})
export class SharedModule {}
