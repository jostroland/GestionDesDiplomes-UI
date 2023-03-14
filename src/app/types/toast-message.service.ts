import { Injectable } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class ToastMessageService {

  constructor(private toastr:ToastrService) {
  }
  public showSuccess( message: string, titre: string) {
    this.toastr.success(message, titre);
  }

  public showError(message: string, titre: string) {
    this.toastr.error(message, titre);
  }

  public showWarning(message: string, titre: string) {
    this.toastr.error(message, titre);
  }
}
