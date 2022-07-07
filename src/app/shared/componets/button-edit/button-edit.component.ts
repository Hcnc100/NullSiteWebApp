import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faPen} from "@fortawesome/free-solid-svg-icons";
import {AuthServices} from "../../../services/auth/auth-services";

@Component({
  selector: 'app-button-edit',
  templateUrl: './button-edit.component.html',
  styleUrls: ['./button-edit.component.css']
})
export class ButtonEditComponent implements OnInit {


  @Input() iconButton = faPen
  @Input() colorIcon = "#ffffff"
  @Input() colorButton="#1db38c"

  @Output() clickEvent = new EventEmitter<any>();

  constructor(private auth: AuthServices) { }

  ngOnInit(): void {}

  sendClickEvent = () => this.clickEvent.emit();

  isUserAuth = () => this.auth.isAuthUser;

}
