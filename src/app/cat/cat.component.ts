import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  catName: String;
  constructor(
    private route: ActivatedRoute
    , private location: Location
  ) { }

  ngOnInit() {
    this.getCat();
  }
  getCat(): void {
    this.catName = this.route.snapshot.paramMap.get('catName');
    if (!this.catName) {
      this.catName = "Unspecified Cat";
    }
  }

}
