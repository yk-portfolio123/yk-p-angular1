import { Component, OnInit } from '@angular/core';
import * as joint from 'jointjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  ngOnInit() {
    // const graph = new joint.dia.Graph();
    // const paperElement = document.getElementById('paper');
    // if (!paperElement) {
    //   throw new Error("Paper element not found");
    // }
    // const paper = new joint.dia.Paper({
    //   el: paperElement,
    //   model: graph,
    //   width: 800,
    //   height: 600,
    //   gridSize: 10,
    //   drawGrid: true,
    //   background: { color: 'white' },
    //   interactive: (cellView: any) => {
    //     const model = cellView.model;
    //     if (model.isElement()) {
    //       const element = model as joint.dia.Element;
    //       return !element.attr('nonEditable'); // 編集不可のチェック
    //     }
    //     return true;
    //   }
    // });

    // // ノードの作成
    // const rect = new joint.shapes.standard.Rectangle();
    // rect.position(100, 100);
    // rect.resize(100, 40);
    // rect.attr({
    //   body: {
    //     fill: 'blue'
    //   },
    //   label: {
    //     text: 'Editable',
    //     fill: 'white'
    //   }
    // });
    // rect.addTo(graph);

    // const rectNonEditable = new joint.shapes.standard.Rectangle();
    // rectNonEditable.position(300, 100);
    // rectNonEditable.resize(100, 40);
    // rectNonEditable.attr({
    //   body: {
    //     fill: 'red'
    //   },
    //   label: {
    //     text: 'Non-Editable',
    //     fill: 'white'
    //   }
    // });
    // rectNonEditable.attr('nonEditable', true); // 編集不可属性の追加
    // rectNonEditable.addTo(graph);

    // // ノード間のリンクを作成
    // const link = new joint.shapes.standard.Link();
    // link.source(rect);
    // link.target(rectNonEditable);
    // link.addTo(graph);
  }
}
