import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Custom Services
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent implements OnInit {

  public characterName = '';
  public characters: any;
  characters$ = this.apiService.getAllCharacters();

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

  loadMore() {
    this.apiService.getByUrl(this.characters.info.nextPage)
      .subscribe((response: any) => {
        this.characters = {
          ...response,
          data: [
            ...this.characters.data,
            ...response.data
          ]
        };
      });
  }
  searchCharacter(name: string) {
    this.apiService.searchCharacter(name)
      .subscribe((response: any) => {
        this.characters = response;
      });
  }
}
