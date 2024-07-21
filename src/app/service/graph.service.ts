import { Injectable } from '@angular/core';
import * as joint from 'jointjs';
import { fa, workflows } from '../lib/glyph/mock-data';

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  constructor() { }

  public createRectangle(graph: any,dataId: number){
    const selectedWorkflow = workflows[dataId.toString()];
    if(selectedWorkflow)graph.fromJSON(selectedWorkflow);
    // const design1 = this.rectangle(`${fa.create}\n制作1`,10, 10, 50);
    // design1.addTo(graph);
    // const design2 = this.rectangle(`${fa.create}\n制作2`,10, 80, 50);
    // design2.addTo(graph);
    // const design3 = this.rectangle(`${fa.create}\n制作3`,10, 150, 50);
    // design3.addTo(graph);

    // const group = this.rectangle(`${fa.grouping}\nグルーピング`,180, 80, 50);
    // group.addTo(graph);

    // const print = this.rectangle(`${fa.printer}\nプリント`,360, 10, 50);
    // print.addTo(graph);

    // this.createLinks(graph, [
    //   { source: design1, target: group },
    //   { source: design2, target: group },
    //   { source: design3, target: group },
    //   { source: group, target: print }
    // ]);
    // const jsonString = graph.toJSON();
    // console.log(jsonString);
    // console.log(JSON.parse(jsonString));
  }
}
