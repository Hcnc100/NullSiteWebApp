import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-back-toolbar',
  templateUrl: './back-toolbar.component.html',
  styleUrls: ['./back-toolbar.component.css']
})
export class BackToolbarComponent implements OnInit {

  @Output() eventClickBack = new EventEmitter<any>();
  @Input() titleToolbar = "";
  backIcon = faArrowLeft;

  constructor() {
  }

  ngOnInit(): void {
  }

  clickBackIcon = () => this.eventClickBack.emit();

}
