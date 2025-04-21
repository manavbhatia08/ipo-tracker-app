import { Component, NgModule, OnInit } from '@angular/core';
import { IpoAPIService } from '../../services/ipo-api.service';
import { CommonModule } from '@angular/common';
import { millionDollarPipe } from '../../core/pipes/million-dollar.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ipo-tracker',
  imports: [CommonModule, millionDollarPipe, FormsModule,RouterModule],
  templateUrl: './ipo-tracker.component.html',
  styleUrl: './ipo-tracker.component.scss',
})
export class IpoTrackerComponent {
  ipoData: any[] = [];
  filteredData: any[] = [];

  selectedStatus: string = '';

  // fromDate: string = new Date(new Date().setMonth(new Date().getMonth() - 1)).toISOString().split('T')[0];
  // toDate: string = new Date().toISOString().split('T')[0];
  fromDate: string = '';
  toDate: string = '';
  sortAsc: boolean = false;
  sortKey: string = 'date';
  searchtext: string = '';

  filterandSort() {
    
    let data = this.ipoData;

    if (this.selectedStatus) {
      data = data.filter((ipo) => ipo.status === this.selectedStatus);
      console.log(data);
      console.log(this.selectedStatus);
    }

    if (this.searchtext)
      data = data.filter((ipo) =>
        ipo.name.toLowerCase().includes(this.searchtext.toLowerCase())
      );
    if (this.fromDate) {
      data = data.filter(
        (ipo) => new Date(ipo.date) >= new Date(this.fromDate)
      );
      console.log(new Date(this.fromDate));
    }

    if (this.toDate)
      data = data.filter((ipo) => new Date(ipo.date) <= new Date(this.toDate));

    if (this.sortKey) {
      data.sort((a, b) => {
        const aVal = a[this.sortKey];
        const bVal = b[this.sortKey];
        return this.sortAsc
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      });
    }

    this.filteredData = data;
  }

  toggleandSort(key: string) {
    if (this.sortKey === key) this.sortAsc = !this.sortAsc;
    else {
      this.sortKey = key;
      this.sortAsc = true;
    }
    this.filterandSort();
  }

  constructor(private ipoService: IpoAPIService,private router: Router) {}

  ngOnInit(): void {
    this.ipoService.getIPOs().subscribe((data) => {
      this.ipoData = data.ipoCalendar;
      console.log(this.ipoData);
      this.filteredData = this.ipoData;
    });
  }

  goToDetails(ipo:any){
    this.router.navigate(['/ipo', ipo.name.replace(/\s+/g, '-')], { state: { ipo } });
  }
}
