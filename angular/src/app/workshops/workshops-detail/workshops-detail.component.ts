import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { WorkshopsService } from "../workshops.service";
@Component({
  selector: "app-workshops-detail",
  templateUrl: "./workshops-detail.component.html",
  styleUrls: ["./workshops-detail.component.css"]
})
export class WorkshopsDetailComponent implements OnInit {
  workshop;
  error;
  private id;
  constructor(
    private activatedRoute: ActivatedRoute,
    private WorkshopsService: WorkshopsService
  ) {}

  ngOnInit() {
    this.id = +this.activatedRoute.snapshot.paramMap.get("id");
    this.WorkshopsService.getWorkshopsbyId(this.id).subscribe(
      data => (this.workshop = data),
      error => (this.error = error)
    );
  }
}
