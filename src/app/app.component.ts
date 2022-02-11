import { Component, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Table } from 'primeng/table';
import { PhoneNumber } from './models/PhoneNumber';
import { PhoneNumberService } from './services/phone-numbers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exercise-frontend';

  phoneNumbers: PhoneNumber[] = [];

  loading: boolean = true;

  @ViewChild('dt') table: Table | undefined;

  constructor(private phoneNumberService: PhoneNumberService,
    private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
      this.phoneNumberService.getPhoneNumbers().subscribe(res => {
        this.phoneNumbers = res;
        this.loading = false
      });

      this.primengConfig.ripple = true;
  }
}
