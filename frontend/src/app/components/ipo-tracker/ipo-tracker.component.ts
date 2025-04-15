import { Component ,OnInit} from '@angular/core';
import { IpoAPIService } from '../../services/ipo-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ipo-tracker',
  imports: [CommonModule],
  templateUrl: './ipo-tracker.component.html',
  styleUrl: './ipo-tracker.component.scss'
})
export class IpoTrackerComponent {

  ipoData :any[] =[];

  constructor(private ipoService : IpoAPIService){}

  ngOnInit():void{
    this.ipoService.getIPOs().subscribe(
      (data)=>{
        this.ipoData = data.ipoCalendar;
        console.log(this.ipoData);
      }
    )
  }

}
