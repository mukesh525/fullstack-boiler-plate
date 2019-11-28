import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {


  menuItems = [
    { url: "/", name: "Home" },
    { url: "/workshops", name: "List of workshops" }
  ];



  constructor() {}

  ngOnInit() {}
}
