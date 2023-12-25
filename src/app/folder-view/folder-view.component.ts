import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FlatNodes } from '../shared/modules/data/nodes';
import { FlatNode } from '../shared/interfaces/flatNode.interface';

@Component({
  selector: 'folder-view',
  templateUrl: './folder-view.component.html',
  styleUrls: ['./folder-view.component.scss']
})
export class FolderViewComponent implements OnInit {

  flatNodes = FlatNodes;

  constructor() { }

  ngOnInit() {
  }

}
