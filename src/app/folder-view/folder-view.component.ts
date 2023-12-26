import { Component, OnInit } from '@angular/core';
import { NodeTransformService } from '../shared/services/nodeTransform.service';

@Component({
  selector: 'folder-view',
  templateUrl: './folder-view.component.html',
  styleUrls: ['./folder-view.component.scss']
})
export class FolderViewComponent implements OnInit {

  constructor(private nodeTransformService: NodeTransformService) { }

  ngOnInit() {
    this.nodeTransformService.logArray()
  }

}
