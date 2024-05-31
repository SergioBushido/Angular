import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../../services/phone.service';
import { Phone } from '../../models/phone.model';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {
  phones: Phone[] = [];
  newPhone: Phone = new Phone();

  constructor(private phoneService: PhoneService) { }

  ngOnInit(): void {
    this.loadPhones();
  }

  loadPhones(): void {
    this.phoneService.getPhones().subscribe(
      phones => this.phones = phones,
      error => console.error('Error al cargar teléfonos', error)
    );
  }

  addPhone(): void {
    this.phoneService.createPhone(this.newPhone).subscribe(
      phone => {
        this.phones.push(phone);
        this.newPhone = new Phone();
      },
      error => console.error('Error al crear teléfono', error)
    );
  }

  updatePhone(phone: Phone): void {
    if (phone.id !== undefined) {
      this.phoneService.updatePhone(phone.id, phone).subscribe(
        updatedPhone => {
          const index = this.phones.findIndex(p => p.id === phone.id);
          if (index !== -1) {
            this.phones[index] = updatedPhone;
          }
        },
        error => console.error('Error al actualizar teléfono', error)
      );
    }
  }

  deletePhone(id: number): void {
    this.phoneService.deletePhone(id).subscribe(
      () => this.phones = this.phones.filter(phone => phone.id !== id),
      error => console.error('Error al eliminar teléfono', error)
    );
  }
}
