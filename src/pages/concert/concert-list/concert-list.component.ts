import {
  Component,
  OnInit
} from '@angular/core';
import {
  Meta,
  Title
} from '@angular/platform-browser';

import {ConcertService} from "../concert.service";
@Component({
  selector: 'app-concert-list',
  templateUrl: './concert-list.component.html',
  styleUrls: ['./concert-list.component.scss']
})
export class ConcertListComponent implements OnInit {
  searchText: string = "";
  searchType: string = "name";
  selectConcert:any={
    name:"No selected"
  };
  searchResult:Array<any>;
  concert:Array<any>=[];

  getUserClick(ev){
    this.selectConcert = ev
    console.log(ev);
  }
 
  sortByAsccending(type="id") {
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.concert.sort((a,b)=>{
      return a[type] - b[type];
    });
  }
  sortByDesccending(type="id") {
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    this.concert.sort((a,b)=>{
      return b[type] - a[type];
    });
  }
  sortByRadom() {
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
  this.concert.forEach((concert,index)=>{
    concert.tempIndex = Math.random();
  })
    this.sortByAsccending("tempIndex");
  }
  constructor(meta: Meta, title: Title, private concertServ:ConcertService) {
    this.concert = this.concertServ.getConcerts()
 
    // Set SEO
    title.setTitle('Da Mai');

    meta.addTags([{
        name: 'author',
        content: 'Wendy'
      },
      {
        name: 'keywords',
        content: 'angular 4 tutorial, Da Mai'
      },
      {
        name: 'description',
        content: 'Welcome to Da Mai.'
      },
    ]);
    // end of SEO
  }

  ngOnInit() {}
}
