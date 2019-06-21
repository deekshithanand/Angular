import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {
 @Input() vals:any[];
 @Output() keyup=new EventEmitter();
  constructor() {
    this.vals=[];
   }

   eventcall(value){
     this.vals.push(value);
   }
   raiseEvent(){
     this.keyup.emit();
   }

  ngOnInit() {
  }

}
