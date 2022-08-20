 // SearchParams(“https://example.com?foo=1&bar=2”,“foo”);
 let Url="https://example.com?foo=1&bar=2";
import SearchParams from "./url.js"  


// test("test url",()=>{
//     expect(SearchParams(Url,"bar")).toBe("2");
// })

 

let url="https://example.com/posts/1/comments?_sort=votes&_order=asc"

test("testurl",()=>{
   
  expect(SearchParams(url,"_sort" ))
      .toBe('votes')
       
})

 