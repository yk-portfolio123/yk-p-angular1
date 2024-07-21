// mock-data.ts
export interface VirtualDataInterface {
    index: number;
    name: string;
    age: number;
    address: string;
  }
  
  export interface gridData {
    id: number;
    name: string;
    gender: 'male' | 'female';
    age: number;
    address: string;
    detail: any;
    [key: string]: any;
  }
  
  export interface CustomColumn {
    name: string;
    value: string;
    default: boolean;
    required?: boolean;
    position?: 'left' | 'right';
    width: string;
    fixWidth?: boolean;
  }
  const detailData = [ // 任意のプロパティを持つ型
    { Name: 'John Doe', Age: 28, Address: '123 Main St' },
    { Name: 'Jane Smith', Age: 32, Address: '456 Oak St' },
    { Name: 'Jim Brown', Age: 45, Address: '789 Pine St' },
    { Name: 'John Doe', Age: 28, Address: '123 Main St' },
    { Name: 'Jane Smith', Age: 32, Address: '456 Oak St' },
    { Name: 'Jim Brown', Age: 45, Address: '789 Pine St' },
    { Name: 'John Doe', Age: 28, Address: '123 Main St' },
    { Name: 'Jane Smith', Age: 32, Address: '456 Oak St' },
    { Name: 'Jim Brown', Age: 45, Address: '789 Pine St' },
    { Name: 'Jim Brown', Age: 45, Address: '789 Pine St' },
    { Name: 'John Doe', Age: 28, Address: '123 Main St' },
    { Name: 'Jane Smith', Age: 32, Address: '456 Oak St' },
    { Name: 'Jane Smith', Age: 32, Address: '456 Oak St' },
    { Name: 'Jim Brown', Age: 45, Address: '789 Pine St' },
    { Name: 'Jim Brown', Age: 45, Address: '789 Pine St' },
    { Name: 'John Doe', Age: 28, Address: '123 Main St' },
    { Name: 'Jane Smith', Age: 32, Address: '456 Oak St' },
    { Name: 'Jane Smith', Age: 32, Address: '456 Oak St' },
    { Name: 'Jim Brown', Age: 45, Address: '789 Pine St' },
    { Name: 'Jim Brown', Age: 45, Address: '789 Pine St' },
    { Name: 'John Doe', Age: 28, Address: '123 Main St' },
    { Name: 'Jane Smith', Age: 32, Address: '456 Oak St' },
    { Name: 'Jim Brown', Age: 45, Address: '789 Pine St' }
  ];

  export const listOfData: gridData[] = [
    {id: 1, name: 'John Brown', gender: 'female', age: 32, address: 'New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park',detail:detailData},
    {id: 2, name: 'Jim Green', gender: 'female', age: 42, address: 'London No. 1 Lake Park',detail:detailData},
    {id: 3, name: 'Joe Black', gender: 'male', age: 32, address: 'Sidney No. 1 Lake Park',detail:detailData},
    {id: 4, name: 'Joe Black', gender: 'male', age: 32, address: 'Sidney No. 1 Lake Park',detail:detailData},
    {id: 5, name: 'Jim Green', gender: 'female', age: 42, address: 'London No. 1 Lake Park',detail:detailData},
    {id: 6, name: 'Joe Black', gender: 'male', age: 32, address: 'Sidney No. 1 Lake Park',detail:detailData},
    {id: 7, name: 'Joe Black', gender: 'male', age: 32, address: 'Sidney No. 1 Lake Park',detail:detailData},
    {id: 8, name: 'Jim Green', gender: 'female', age: 42, address: 'London No. 1 Lake Park',detail:detailData},
    {id: 9, name: 'Joe Black', gender: 'male', age: 32, address: 'Sidney No. 1 Lake Park',detail:detailData},
    {id: 10, name: 'Joe Black', gender: 'male', age: 32, address: 'Sidney No. 1 Lake Park',detail:detailData},
    {id: 11, name: 'John Brown', gender: 'female', age: 32, address: 'New York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park',detail:detailData},
    {id: 12, name: 'Jim Green', gender: 'female', age: 42, address: 'London No. 1 Lake Park',detail:detailData},
    {id: 13, name: 'Joe Black', gender: 'male', age: 32, address: 'Sidney No. 1 Lake Park',detail:detailData},
    {id: 14, name: 'Joe Black', gender: 'male', age: 32, address: 'Sidney No. 1 Lake Park',detail:detailData},
    {id: 15, name: 'Jim Green', gender: 'female', age: 42, address: 'London No. 1 Lake Park',detail:detailData},
    {id: 16, name: 'Joe Black', gender: 'male', age: 32, address: 'Sidney No. 1 Lake Park',detail:detailData},
    {id: 17, name: 'Joe Black', gender: 'male', age: 32, address: 'Sidney No. 1 Lake Park',detail:detailData},
    {id: 18, name: 'Jim Green', gender: 'female', age: 42, address: 'London No. 1 Lake Park',detail:detailData},
    {id: 19, name: 'Joe Black', gender: 'male', age: 32, address: 'Sidney No. 1 Lake Park',detail:detailData},
    {id: 20, name: 'Joe Black', gender: 'male', age: 32, address: 'Sidney No. 1 Lake Park',detail:detailData}
];
  export const fa = {
    printer:"\uf02f",
    grouping: "\uf0c0",
    create: "\uf1c5",
    export: "\uf08b",
    edit: "\uf0ad",
    user: "\uf007",
    hourglass: "\uf252",
    repeat: "\uf021",
    linkArrow: "\uf359",
    heart: "\uf004",
    email: "\uf0e0",
  };
  export const customColumn: CustomColumn[] = [
    {
      name: 'Name',
      value: 'name',
      default: true,
      required: true,
      position: 'left',
      width: '100px'
    },
    {
      name: 'Gender',
      value: 'gender',
      default: true,
      width: '100px'
    },
    {
      name: 'Address',
      value: 'address',
      default: true,
      width: '200px'
    },
    {
      name: 'Age',
      value: 'id',
      default: true,
      width: '100px'
    },
    {
      name: 'Action',
      value: 'action',
      default: true,
      required: true,
      position: 'right',
      width: '100px'
    }
  ];
  export const workflows: any = {
    "1": {
      "cells": [
        {
          "type": "standard.Rectangle",
          "id": "element1",
          "position": { "x": 10, "y": 10 },
          "size": { "width": 100, "height": 40 },
          "attrs": {
            "body": { "fill": "#141414" },
            "label": {
              "text": `${fa.create}\n制作1`,
              "fontFamily": "sans-serif",
              "fontSize": 12,
              "fill": "white",
              "lineHeight": "auto",
              "annotations": [
                {
                  "start": 0,
                  "end": 1,
                  "attrs": {
                    "fill": "white",
                    "font-family": "FontAwesome",
                    "font-size": 20
                  }
                }
              ]
            }
          }
        },
        {
          "type": "standard.Rectangle",
          "id": "element2",
          "position": { "x": 10, "y": 80 },
          "size": { "width": 100, "height": 40 },
          "attrs": {
            "body": { "fill": "#141414" },
            "label": {
              "text": `${fa.create}\n制作1`,
              "fontFamily": "sans-serif",
              "fontSize": 12,
              "fill": "white",
              "lineHeight": "auto",
              "annotations": [
                {
                  "start": 0,
                  "end": 1,
                  "attrs": {
                    "fill": "white",
                    "font-family": "FontAwesome",
                    "font-size": 20
                  }
                }
              ]
            }
          }
        },
        {
          "type": "standard.Rectangle",
          "id": "element3",
          "position": { "x": 10, "y": 150 },
          "size": { "width": 100, "height": 40 },
          "attrs": {
            "body": { "fill": "#141414" },
            "label": {
              "text": `${fa.create}\n制作3`,
              "fontFamily": "sans-serif",
              "fontSize": 12,
              "fill": "white",
              "lineHeight": "auto",
              "annotations": [
                {
                  "start": 0,
                  "end": 1,
                  "attrs": {
                    "fill": "white",
                    "font-family": "FontAwesome",
                    "font-size": 20
                  }
                }
              ]
            }
          }
        },
        {
          "type": "standard.Rectangle",
          "id": "element4",
          "position": { "x": 180, "y": 80 },
          "size": { "width": 100, "height": 40 },
          "attrs": {
            "body": { "fill": "#141414" },
            "label": {
              "text": `${fa.grouping}\nグルーピング`,
              "fontFamily": "sans-serif",
              "fontSize": 12,
              "fill": "white",
              "lineHeight": "auto",
              "annotations": [
                {
                  "start": 0,
                  "end": 1,
                  "attrs": {
                    "fill": "white",
                    "font-family": "FontAwesome",
                    "font-size": 20
                  }
                }
              ]
            }
          }
        },
        {
          "type": "standard.Rectangle",
          "id": "element5",
          "position": { "x": 360, "y": 10 },
          "size": { "width": 100, "height": 40 },
          "attrs": {
            "body": { "fill": "#141414" },
            "label": {
              "text": `${fa.printer}\nプリント`,
              "fontFamily": "sans-serif",
              "fontSize": 12,
              "fill": "white",
              "lineHeight": "auto",
              "annotations": [
                {
                  "start": 0,
                  "end": 1,
                  "attrs": {
                    "fill": "white",
                    "font-family": "FontAwesome",
                    "font-size": 20
                  }
                }
              ]
            }
          }
        },
        {
          "type": "standard.Link",
          "source": { "id": "element1" },
          "target": { "id": "element4" }
        },
        {
          "type": "standard.Link",
          "source": { "id": "element2" },
          "target": { "id": "element4" }
        },
        {
          "type": "standard.Link",
          "source": { "id": "element3" },
          "target": { "id": "element4" }
        },
        {
          "type": "standard.Link",
          "source": { "id": "element4" },
          "target": { "id": "element5" }
        }
      ]
    },
    "2": {
      "cells": [
        {
          "type": "standard.Rectangle",
          "id": "element1",
          "position": { "x": 10, "y": 10 },
          "size": { "width": 100, "height": 40 },
          "attrs": {
            "body": { "fill": "#141414" },
            "label": {
              "text": "\uf1c5\n制作1",
              "fontFamily": "sans-serif",
              "fontSize": 12,
              "fill": "white",
              "lineHeight": "auto",
              "annotations": [
                {
                  "start": 0,
                  "end": 1,
                  "attrs": {
                    "fill": "white",
                    "font-family": "FontAwesome",
                    "font-size": 20
                  }
                }
              ]
            }
          }
        },
        {
          "type": "standard.Rectangle",
          "id": "element2",
          "position": { "x": 10, "y": 80 },
          "size": { "width": 100, "height": 40 },
          "attrs": {
            "body": { "fill": "#141414" },
            "label": {
              "text": "\uf1c5\n制作2",
              "fontFamily": "sans-serif",
              "fontSize": 12,
              "fill": "white",
              "lineHeight": "auto",
              "annotations": [
                {
                  "start": 0,
                  "end": 1,
                  "attrs": {
                    "fill": "white",
                    "font-family": "FontAwesome",
                    "font-size": 20
                  }
                }
              ]
            }
          }
        },
        {
          "type": "standard.Link",
          "source": { "id": "element1" },
          "target": { "id": "element2" }
        }
      ]
    },
    "3": {
      "cells": [
        {
          "type": "standard.Rectangle",
          "id": "element1",
          "position": { "x": 20, "y": 20 },
          "size": { "width": 120, "height": 50 },
          "attrs": {
            "body": { "fill": "#141414" },
            "label": {
              "text": "\uf0c0\nグルーピング",
              "fontFamily": "sans-serif",
              "fontSize": 12,
              "fill": "white",
              "lineHeight": "auto",
              "annotations": [
                {
                  "start": 0,
                  "end": 1,
                  "attrs": {
                    "fill": "white",
                    "font-family": "FontAwesome",
                    "font-size": 20
                  }
                }
              ]
            }
          }
        },
        {
          "type": "standard.Rectangle",
          "id": "element2",
          "position": { "x": 150, "y": 150 },
          "size": { "width": 100, "height": 40 },
          "attrs": {
            "body": { "fill": "#141414" },
            "label": {
              "text": "\uf007\nユーザー",
              "fontFamily": "sans-serif",
              "fontSize": 12,
              "fill": "white",
              "lineHeight": "auto",
              "annotations": [
                {
                  "start": 0,
                  "end": 1,
                  "attrs": {
                    "fill": "white",
                    "font-family": "FontAwesome",
                    "font-size": 20
                  }
                }
              ]
            }
          }
        },
        {
          "type": "standard.Link",
          "source": { "id": "element1" },
          "target": { "id": "element2" }
        }
      ]
    },
    "4": {
      "cells": [
        {
          "type": "standard.Rectangle",
          "id": "element1",
          "position": { "x": 30, "y": 30 },
          "size": { "width": 100, "height": 40 },
          "attrs": {
            "body": { "fill": "#141414" },
            "label": {
              "text": "\uf252\nタイマー",
              "fontFamily": "sans-serif",
              "fontSize": 12,
              "fill": "white",
              "lineHeight": "auto",
              "annotations": [
                {
                  "start": 0,
                  "end": 1,
                  "attrs": {
                    "fill": "white",
                    "font-family": "FontAwesome",
                    "font-size": 20
                  }
                }
              ]
            }
          }
        },
        {
          "type": "standard.Rectangle",
          "id": "element2",
          "position": { "x": 200, "y": 200 },
          "size": { "width": 100, "height": 40 },
          "attrs": {
            "body": { "fill": "#141414" },
            "label": {
              "text": "\uf004\nハート",
              "fontFamily": "sans-serif",
              "fontSize": 12,
              "fill": "white",
              "lineHeight": "auto",
              "annotations": [
                {
                  "start": 0,
                  "end": 1,
                  "attrs": {
                    "fill": "white",
                    "font-family": "FontAwesome",
                    "font-size": 20
                  }
                }
              ]
            }
          }
        },
        {
          "type": "standard.Link",
          "source": { "id": "element1" },
          "target": { "id": "element2" }
        }
      ]
    }
  };
  