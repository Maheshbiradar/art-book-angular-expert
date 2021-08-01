import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  subAuth: Subscription;

  @Output() featureSelected = new EventEmitter<String>();
  constructor(private datStoreService: DataStorageService, 
    private authService: AuthService) { }
  
  ngOnInit(): void {
    this.subAuth = this.authService.subAuthUser.subscribe((user => {
      this.isAuthenticated = !!user;
    }));
  }

  onSave() {
    this.datStoreService.storeData();
  }

  onFetch() {
    this.datStoreService.fetchData().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.subAuth.unsubscribe();
  }

}
