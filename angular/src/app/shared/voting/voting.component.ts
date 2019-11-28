import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-voting",
  templateUrl: "./voting.component.html",
  styleUrls: ["./voting.component.css"]
})
export class VotingComponent implements OnInit {
  @Input() count: String;
  // @Input() filterprops: "";
  // filtereditems: Array<Object>;

  @Output()
  upVote = new EventEmitter<Boolean>();
  constructor() {}

  ngOnInit() {}

  upVoteClick(event) {
    this.upVote.emit(event);
  }
}
