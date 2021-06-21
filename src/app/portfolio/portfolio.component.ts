import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  // pizza="pizza";
  // pizzaList: Array<any> = [];
  // salad="salad";
  // saladList: Array<any> = [];
  // cake="cake";
  // cakeList: Array<any> = [];
  constructor(private activeRoute: ActivatedRoute, private searchService:ApiserviceService, private route:Router) { }

  ngOnInit(): void {

  }

   
// returnpizza(){
//   this.searchService.pizzaa(this.pizza).subscribe((res:any) =>{
    
//     console.log(this.pizza)

//     this.pizzaList = res.hits;
//     console.log(typeof(this.pizzaList))
//    // this.res = res

//    console.log(this.pizzaList);
//  // this.route.navigate(["searchresult"]);
//   })

// }

  
// returnsalad(){
//   this.searchService.saladd(this.salad).subscribe((res:any) =>{
    
//     console.log(this.salad)

//     this.saladList = res.hits;
    
//    // this.res = res

//    console.log(this.saladList);
//  // this.route.navigate(["searchresult"]);
//   })

// }

  
// returncake(){
//   this.searchService.cakee(this.cake).subscribe((res:any) =>{
    
//     console.log(this.cake)

//     this.cakeList = res.hits;
    
//    // this.res = res

//    console.log(this.cakeList);
//  // this.route.navigate([""]);
//   })

// }
 }