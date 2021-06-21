import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-searchresult',
  
  templateUrl: './searchresult.component.html',
  
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {
  // @Input('label') label = ""
  // @Input('ingredians') ingredians = ""
  // @Input('health') health = ""
  // @Input('calories') calories = ""
  // @Input('vitaminA') vitaminA = ""
  // @Input('vitaminB') vitaminB = ""
  // @Input('vitaminC') vitaminC = ""
  // @Input('vitaminD') vitaminD = ""
  // @Input('vitaminE') vitaminE = ""
  // @Input('src') src = ""
  // @Input('href') href = ""
  fb:FormBuilder=new FormBuilder;
  searchForm:any;
current:any;
  searchList: Array<any> = [];
  constructor(private activeRoute: ActivatedRoute, private searchService:ApiserviceService, private route:Router) {
    this.current = this.activeRoute.snapshot.params.query ;
   // console.log(this.current)
   }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      "searchresult":this.fb.control("")   

  })
  }


  
submitForm(){
  
  this.searchService.ssearch(this.searchForm.value).subscribe((res:any) =>{
    
    console.log(typeof(res.hits))

    this.searchList = res.hits;
    console.log(typeof(this.searchList))
   // this.res = res

   console.log(this.searchList);
 // this.route.navigate(["searchresult"]);

  })

}



}