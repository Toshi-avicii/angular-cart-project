import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ModalService {
    isModalVisible = false;

    setModalVisibility() {
        if(this.isModalVisible) {
            this.isModalVisible = false;
        } else {
            this.isModalVisible = true;
        }
    }
}