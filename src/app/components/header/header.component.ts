import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Task Manager';
  showAddTask: boolean | any;
  subscription:Subscription | any;

  constructor (private uiService:UiService, private router:Router) {
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value)
  }

  toggleTask() {
    this.uiService.toggleAddTask();
  }

  hasRoute(route:string) {
    return this.router.url === route;
  }
}
