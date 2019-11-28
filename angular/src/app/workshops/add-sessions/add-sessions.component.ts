import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { WorkshopsService } from "../workshops.service";

@Component({
  selector: "app-add-sessions",
  templateUrl: "./add-sessions.component.html",
  styleUrls: ["./add-sessions.component.css"]
})
export class AddSessionsComponent implements OnInit {
  private id;
  error;
  values;
  subscription;
  success;
  constructor(
    private activatedRoute: ActivatedRoute,
    private workshopsService: WorkshopsService
  ) {}

  ngOnInit() {
    this.id = +this.activatedRoute.parent.snapshot.paramMap.get("id");
  }

  addSession(form, event) {
    event.preventDefault();
    this.values = form.value;
    this.values["workshopId"] = this.id;

    // form.get("workshopId").setValue(this.id);
    this.subscription = this.workshopsService.addSession(form.value).subscribe(
      success => alert(`new Session added ${(<any>success).id}`),
      error => (this.error = error)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
