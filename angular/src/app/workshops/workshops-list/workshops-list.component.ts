import { Component, OnInit } from "@angular/core";
import * as allData from "./all-workshops.json";
import { WorkshopsService } from "../workshops.service";
@Component({
  selector: "app-workshops-list",
  templateUrl: "./workshops-list.component.html",
  styleUrls: ["./workshops-list.component.css"]
})
export class WorkshopsListComponent implements OnInit {
  workshopAll;
  workshops = this.workshopAll;
  show = true;
  error;

  constructor(private WorkshopsService: WorkshopsService) {}

  ngOnInit() {
    this.WorkshopsService.getWorkshops().subscribe(
      data => (this.workshopAll = data),
      error => (this.error = error)
    );
  }

  onShowHide() {
    this.show = !this.show;
  }
}
