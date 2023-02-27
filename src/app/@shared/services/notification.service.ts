import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarDismiss } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable()
export class NotificationService {
  constructor(private snackBar: MatSnackBar, private translateService: TranslateService, private dialog: MatDialog) {}

  open(
    message: string,
    action: string = 'app.actions.accept',
    configuration: MatSnackBarConfig = new MatSnackBarConfig()
  ): Observable<MatSnackBarDismiss> {
    const capitalize = (s: string | any[]) => s && s[0].toUpperCase() + s.slice(1);

    configuration.duration = configuration.duration || 2000;
    configuration.horizontalPosition = configuration.horizontalPosition || 'center';
    configuration.verticalPosition = configuration.verticalPosition || 'bottom';

    configuration.panelClass = configuration.panelClass || 'mat-snackbar';

    const _message = capitalize(this.translateService.instant(message));
    const _action = capitalize(this.translateService.instant(action));

    const snackbar = this.snackBar.open(_message, _action, configuration);

    return snackbar.afterDismissed();
  }

  /**
   * @deprecated Use `open` instead
   */
  openNotification(
    message: string,
    action: string = 'app.actions.accept',
    configuration: MatSnackBarConfig = new MatSnackBarConfig()
  ): Observable<MatSnackBarDismiss> {
    return this.open(message, action, configuration);
  }

}
