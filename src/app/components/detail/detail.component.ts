import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  public characterId: string = '';
  public characterDetail: any = null;
  constructor(
    private activeRoute: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.activeRoute.params.subscribe((params) => {
      this.characterId = params['id'];
    });
    this.getDetailById(this.characterId);
  }

  public getDetailById(id: string) {
    this.apiService.getOneCharacter(id)
      .subscribe(res => {
        this.characterDetail = res;
      });
  }

}
