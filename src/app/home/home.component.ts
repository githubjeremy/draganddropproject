import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public data: Array<string> = [
    "one",
    "two",
    "three"
  ];
  public groupOfData: Array<any> = [
    {
      number: 0,
      name: 'groupe 1',
      data: [
      ]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  public onClickCreate() {
    this.groupOfData.push(
      {
        number: this.groupOfData.length,
        name: 'groupe ' + (this.groupOfData.length + 1).toString(),
        data: []
      }
    );
  }
  public onClickRemove(group: any) {
    if (group.data.length > 0) {
      group.data.forEach(x => {
        this.data.push(x);
      });
    }
    this.groupOfData = this.groupOfData.filter(x => x.number !== group.number);
    let i = 0;
    this.groupOfData.forEach(x => {
      x.number = i;
      x.name = 'groupe ' + (i + 1).toString();
      i ++;
    });
  }
  public onDrop(event: CdkDragDrop<Array<string>>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  public onClickSend() {
    console.log(this.groupOfData);
  }

}
