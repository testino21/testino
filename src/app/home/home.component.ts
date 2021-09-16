import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { NotiferService } from "../notifer.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  cards = [];
  mobileCards = [];
  webCards = [];
  isMobile: boolean = false;
  /** Based on the screen size, switch from standard to one column per row */
  isMobileObserver: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return true;
      }
      return false;
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
    public appService: AppService,
    private notificationService: NotiferService,
    ) {}
/**check if mobile or web cards are required on the first load*/
  ngOnInit() {
    this.isMobileObserver.subscribe(ObserverValue => {
      this.isMobile = ObserverValue;
      this.loadCards();
    });
    /** service for contacting the express server */
    this.appService.getCards().subscribe(
      response => {
        this.mobileCards = response.mobileCards;
        this.webCards = response.webCards;
        this.loadCards();
        this.notificationService.showNotification("Offers were loaded successfully!", "OK", "success");
      },
      error => {
        //alert("It was not possible to load the products. Please try again later. Sorry");
        this.notificationService.showNotification("Server Error: Unable to receive Data from the Server", "OK", "error");
      }
    )
  }

  /** check for current nedded size */
  loadCards() {
    this.cards = this.isMobile ? this.mobileCards: this.webCards;
  }

  /** function to fill the cards with pictures */
  getImage(imageName: string): string {
    return 'url(' + 'http://localhost:3000/images/' + imageName + '.jpg' + ')';
  }
}

