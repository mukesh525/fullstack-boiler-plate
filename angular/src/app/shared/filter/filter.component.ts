import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"]
})
export class FilterComponent implements OnInit {
  filterKey = "";
  @Input() items: Array<Object>;
  @Input() filterprops: "";
  filtereditems: Array<Object>;

  @Output()
  filtered = new EventEmitter<Array<Object>>();

  //filteredSession=items;
  constructor() {}

  ngOnChanges() {
    this.filtereditems = this.items;
    console.log(this.filtereditems);
    this.filtered.emit(this.filtereditems);
  }
  ngOnInit() {}

  filter() {
    this.filtereditems = this.items.filter(
      item =>
        item[this.filterprops]
          .toUpperCase()
          .includes(this.filterKey.toUpperCase())
      // this.filterprops.filter(props => props =>
      //   session[props].toUpperCase().includes(props.toUpperCase())
      // );
    );

    console.log(this.filtereditems);
    this.filtered.emit(this.filtereditems);
  }
}
