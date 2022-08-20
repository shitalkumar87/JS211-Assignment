let SearchParams=(url,param)=>{
  let u=new URL(url);
  let params=new URLSearchParams(u.search);
  let f=params.get(param);
  return f;
  // console.log(f);
}
export default SearchParams;

// let Url="https://example.com?foo=1&bar=2"
// let SearchParams=async(url,param)=>{

//     let u=new URL(url);
//     let params=new URLSearchParams(u.search);
//       let f=params.get(param)
//       return f
//     console.log(f)
     
// }

//   export default SearchParams

  //("https://example.com/posts/1/comments?_sort=votes&_order=asc","_sort")
 