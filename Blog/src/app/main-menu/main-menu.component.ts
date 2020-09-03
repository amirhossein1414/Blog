import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-main-menu",
  templateUrl: "./main-menu.component.html",
  styleUrls: ["./main-menu.component.scss"]
})
export class MainMenuComponent implements OnInit {
  public set viewMode(value: 'desktop' | 'mobile') {
    this._viewMode = value
    this.onViewModeChange()
  }

  public get viewMode(): 'desktop' | 'mobile' {
    return this._viewMode
  }

  private _viewMode: 'desktop' | 'mobile'
  public width: string | number = '100%'
  public height: string | number = '100%'

  constructor() { }

  private onViewModeChange() {
    if (this.viewMode === 'desktop') {
      this.width = '100%'
      this.height = '100%'
    } else if (this.viewMode === 'mobile') {
      this.width = '360px'
      this.height = '640px'
    }
  }

  ngOnInit() {
    this.viewMode = 'mobile';
  }
}
