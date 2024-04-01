import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent implements OnInit {

  public characters: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getDisneyCharacters();
  }

  getDisneyCharacters() {
    this.apiService.getAllCharacters()
      .subscribe(data => {
        this.characters = data;
        console.log(data);
      });
  }
}
