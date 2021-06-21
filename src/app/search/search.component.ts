import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  fb:FormBuilder=new FormBuilder;
  searchForm:any;
  current:any;
  searchList: Array<any> = [];
  constructor(private activeRoute: ActivatedRoute, private searchService:ApiserviceService, private route:Router) {
   // this.current = this.activeRoute.snapshot.params.query ;
   // console.log(this.current)
   }

  ngOnInit(): void {
    // this.searchForm = this.fb.group({
    //   "searchresult":this.fb.control("")   

  // })
  }


}
// submitForm(){
//   this.searchService.ssearch(this.searchForm.value).subscribe((res:any) =>{
   
//     console.log(typeof(res.hits))

//     this.searchList = res.hits;
//     console.log(typeof(this.searchList))
//    // this.res = res

//    console.log(this.searchList);
//   //this.route.navigate(["searchresult"]);
//   })

// }



