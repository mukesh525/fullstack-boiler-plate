import { Component, OnInit } from "@angular/core";
import { sessions as sessionData } from "./sessions-list.data";
import { ActivatedRoute } from "@angular/router";
import { WorkshopsService } from "../workshops.service";
@Component({
  selector: "app-sessions-list",
  templateUrl: "./sessions-list.component.html",
  styleUrls: ["./sessions-list.component.css"]
})
export class SessionsListComponent implements OnInit {
  data;
  filteredSession = this.data;
  filterKey = "";
  error;
  private id;

  constructor(
    private activatedRoute: ActivatedRoute,
    private WorkshopsService: WorkshopsService
  ) {}

  ngOnInit() {
    this.id = +this.activatedRoute.parent.snapshot.paramMap.get("id");
    this.WorkshopsService.getSessionByWorkshopId(this.id).subscribe(
      data => (this.data = data),
      error => (this.error = error)
    );
  }

  filter() {
    this.id = +this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);
    this.filteredSession = this.data.filter(session => {
      return (
        session.abstract.toUpperCase().includes(this.filterKey.toUpperCase()) ||
        session.name.toUpperCase().includes(this.filterKey.toUpperCase())
      );
    });
  }

  upVoteClick(event: Event) {
    alert(event ? "Voted" : "Not voted");
  }
}
