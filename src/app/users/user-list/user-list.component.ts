import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DynamicFormCreatorComponent } from 'src/app/app-layouts/dynamic-form-creator/dynamic-form-creator.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private dialog: MatDialog) { }
  ngOnInit(): void {
    console.log()
  }

  addNewUser() {
    const dialogRef = this.dialog.open(DynamicFormCreatorComponent, {
      data: {
        headerText: 'Add User',
        formName: 'register_user_form',
        buttonText: {
          ok: 'Save',
          cancel: 'Close'
        }
      }
    });
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        alert("closed")
      }
    });
  }
}
