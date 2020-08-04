import { Component, OnInit } from '@angular/core';
import { CheckListDataService } from '../check-list/check-list-data.service';

@Component({
  selector: 'app-result-graph',
  templateUrl: './result-graph.component.html',
  styleUrls: ['./result-graph.component.scss']
})
export class ResultGraphComponent implements OnInit {

  checkedRatio: string = '0%';
  graphToggle = true;

  constructor(
    public checkListDataService: CheckListDataService,
  ) { }

  ngOnInit(): void {
    this.checkListDataService.changedCntState.subscribe(() => this.printGraph());
  }

  // onPrintGraph() {
  //   this.graphToggle = false;
  //   this.checkedRatio = this.checkListDataService.getCheckedItemRatioText();
  //   setTimeout(() => this.graphToggle = true, 1)
  // }

  printGraph() {
    this.graphToggle = false;
    this.checkedRatio = this.checkListDataService.getCheckedItemRatioText();
    setTimeout(() => this.graphToggle = true, 1);
  }
  
}
