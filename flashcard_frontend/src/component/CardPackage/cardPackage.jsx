import React from "react";

function CardPackage(props) {
    return (
      <ul class="nav justify-content-center">
       <li class="nav-item">
        <a class="nav-link" href="#">Harry Potter</a>
       </li>
       <li class="nav-item">
        <a class="nav-link" href="#">Marvel</a>
       </li>
      
      </ul> 
    );
}

{/* <table class="table">
<thead>
  <tr>
    <th scope="col">Title</th>
  </tr>
</thead>
<tbody>
    {props.package.map(pack=>{
      return(
        <tr>
          <td>{pack.title}</td>
        </tr>
      )
    })}
</tbody>
</table> */}



export default CardPackage;