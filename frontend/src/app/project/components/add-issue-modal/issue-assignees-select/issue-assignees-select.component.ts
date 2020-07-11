import { Component, OnInit, Input, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserDto } from '@trungk18/core/graphql/service/graphql';

@Component({
  selector: 'issue-assignees-select',
  templateUrl: './issue-assignees-select.component.html',
  styleUrls: ['./issue-assignees-select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IssueAssigneesSelectComponent implements OnInit {
  @Input() control: FormControl;
  @Input() users: UserDto[];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  getUser(userId: string) {
    return this.users.find((user) => user.id === userId);
  }
}
