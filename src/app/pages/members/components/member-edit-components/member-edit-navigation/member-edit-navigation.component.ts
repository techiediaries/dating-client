import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-edit-navigation',
  templateUrl: './member-edit-navigation.component.html',
  styleUrls: ['./member-edit-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemberEditNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
