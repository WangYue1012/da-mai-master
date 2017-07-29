import { Injectable } from "@angular/core";

@Injectable()
export class ConcertService{
    isLogined:boolean = false;
    concerts: Array < any > = [{
      'id': 1,
     'name':'李易峰',
     'sale_sta':'在售',
     'price':1280,
     'location':'广州',
    },
    {
      'id': 2,
     'name':'梁静茹',
     'sale_sta':'在售',
     'price':1280,
     'location':'广州',
    },
    {
      'id': 3,
     'name':'黄家驹',
     'sale_sta':'在售',
     'price':1380,
     'location':'广州',
    },
    {
      'id': 4,
     'name':'张学友',
     'sale_sta':'售罄',
     'price':1480,
     'location':'深圳',
    },
    {
      'id': 5,
     'name':'陈奕迅',
     'sale_sta':'预售',
     'price':1480,
     'location':'佛山',
    },
    {
      'id': 6,
     'name':'张杰',
     'sale_sta':'预售',
     'price':1280,
     'location':'广州',
    }
  ];

    constructor(){

    }
    delete(obj){
        let id = obj.id
        this.concerts.forEach((item,index,array)=>{
        if(item.id == id){
            array.splice(index,1)
        }
        })
    }
    search(type,value){
        this.concerts.sort((a,b)=>{
        let result1 = String(a[type]).match(value)
        let result2 = String(b[type]).match(value)

        return Number(result2)-Number(result1);
        });
    }
    deleteChecked(){
        let checkList = this.concerts.filter(item=>item.check==true)
        checkList.forEach(item=>{
            this.delete(item)
        })
    }
    getConcerts(){
        return this.concerts;
    }

}

