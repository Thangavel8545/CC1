import React from 'react'
export default function Day6() {
    var menu=[{id:1,name:"Apple",price:"50",image:<div id="fru1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbvDahX-LxxtrJKW6n-vKtvkUvIHdVrAYFdaNT-ubzFA&usqp=CAU&ec=48665701" alt=" "/></div>},
               {id:2,name:"Pine Apple",price:"40",image:<div id="fru2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvbxfxRk7mIDvu8G_zskatvcrHduJ_aY7Kem7lC3F-GA&usqp=CAU&ec=48665701" alt=" "/></div>},
               {id:3,name:"WaterMelon",price:"40",image:<div id="fru3"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBOB4rZeOpeDKfxtvqJUNpQVZErF3PSLHbGe0kRi9wuA&usqp=CAU&ec=48665701" alt=" "/></div>}]
    var dispmenu=menu.map((fname)=>{return<li key={fname.id}>{fname.id} . FRUIT: {fname.name} <br/> PRICE: {fname.price} <br/> IMAGE: <br/> {fname.image}<br/><br/></li>})
  return (
    <div>
    <h1 id="HEAD"><marquee> DAY 6 LIST OF THE SHOP 308🍎</marquee></h1><br/>
        {dispmenu}
    </div>
  )
}