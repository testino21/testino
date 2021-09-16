import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotifyComponent } from './notify/notify.component';

@Injectable({
  providedIn: 'root'
})
export class NotiferService {

  constructor(private snackBar: MatSnackBar) { }

  showNotification(displayMessage: string, buttonText: string, messageType: "error" | "success") {
    //Error message from an Component 
    this.snackBar.openFromComponent(NotifyComponent, {
      data: {
        message: displayMessage,
        buttonText: buttonText,
        type: messageType
      },
      duration: 5000,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: messageType
    })
  }
}
