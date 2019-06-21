import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  
  
  constructor() { }

  
  flag=0;
  totalCourses=[1];
  viewMode='s3';
  lister=['L1','L2','L3'];
  isSelected=false;

  ngOnInit() {
  }
  checkNumField(value){
    this.flag=(parseInt(value)%2);

    
  }

  addCourse(){
    this.totalCourses.push(this.totalCourses.length+1);
  }
  removeCourse(obj){
    let index=this.totalCourses.indexOf(obj);
    this.totalCourses.splice(index,1);
  }
  toggle(){
    this.isSelected=!this.isSelected;
  }
}
