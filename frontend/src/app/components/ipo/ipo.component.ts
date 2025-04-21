import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { millionDollarPipe } from '../../core/pipes/million-dollar.pipe';

@Component({
  selector: 'app-ipo',
  imports: [CommonModule,millionDollarPipe],
  templateUrl: './ipo.component.html',
  styleUrl: './ipo.component.scss'
})
export class IpoComponent {

  ipo: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit():void{
    this.ipo = history.state.ipo;
    console.log('Received IPO:', this.ipo);
  }

}
