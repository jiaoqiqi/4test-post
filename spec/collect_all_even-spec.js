
'use strict';

var collect_same_elements = require("../src/collect_all_even.js");

describe('practice-1-4', function() {

  var collection_a = [
    {key: "a"}, {key: "e"}, {key: "h"}, {key: "t"}, {key: "f"}, {key: "c"}, {key: "g"}, {key: "b"}, {key: "d"}
  ];
  var collection_b = {value: ["a", "d", "e", "f"]};
  
  var collection_c = [
    {key: "a"}, {key: "j"}, {key: "f"}, {key: "t"}, {key: "n"}, {key: "c"}, {key: "f"}, {key: "e"}, {key: "d"}
  ];
  var collection_d = {value: ["a", "d", "e", "f"]};

  it("选出A集合中元素的key属性，跟B对象中value属性中的元素相同的元素", function() {
    var result = collect_same_elements(collection_a, collection_b);

    expect(result).toEqual(["a", "e", "f", "d"]);
  });
  
  it("选出C集合中元素的key属性，跟D对象中value属性中的元素相同的元素", function() {
    var result = collect_same_elements(collection_c, collection_d);

    expect(result).toEqual(["a", "f", "f", "e", "d"]);
  });
});;
