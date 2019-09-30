import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-space",
  templateUrl: "./space.component.html",
  styleUrls: ["./space.component.scss"]
})
export class SpaceComponent implements OnInit {
  @Input() public set widthPx(value: number) {
    this.fieldWidthPx = value + 'px';
  }
  @Input() public set heightPx(value: number) {
    this.fieldHeightPx = value + 'px';
  }
  constructor() {}

  private fieldWidthPx;
  public fieldHeightPx;

  ngOnInit() {}
}
