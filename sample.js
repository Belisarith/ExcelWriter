import { ExcelWriter } from "./ExcelWriter.js";

function typedStyle() {
  let eWriter = new ExcelWriter();
  eWriter.addRow([
    { Type: "string", Data: "First Name" },
    { Type: "string", Data: "Last Name" }
  ]);
  eWriter.addRow([
    { Type: "string", Data: "John" },
    { Type: "string", Data: "Doe" }
  ]);
  eWriter.addRow([
    { Type: "string", Data: "May" },
    { Type: "string", Data: "Foe" }
  ]);
  eWriter.addRow([
    { Type: "string", Data: "3" },
    { Type: "string", Data: "4" }
  ]);
  eWriter.addRow([{ Type: "number", Data: 4 }, { Type: "number", Data: 3 }]);
  eWriter.addRow([
    { Type: "number", Data: "test" },
    { Type: "number", Data: "test2" }
  ]);
  eWriter.save("export.xlsx");
}

function test() {
  alert("Hello");
}

window.clickfunction = test;
