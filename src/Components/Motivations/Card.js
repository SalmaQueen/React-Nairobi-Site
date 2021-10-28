import React, { Component } from 'react'
import './card.scss'
import {Grid} from '@material-ui/core/'



const data=[{
  id:1,
  src:"https://media.istockphoto.com/photos/time-management-is-important-in-the-workplace-to-get-higher-picture-id1226292261?b=1&k=20&m=1226292261&s=170667a&w=0&h=qReVOma91HuQEEsgW2bqIX5ncBeVGfzUmaCbJ5EoJvk=",
  title:"Time Management",
  description:"“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler",
  href:"https://www.youtube.com/watch?v=WXBA4eWskrc"
},

{
  id:2,
  src:"https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2ViJTIwZGVzaWduaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  title:"How to stay motivated while learning to code",
  description:"“First, solve the problem. Then, write the code.” – John Johnson",
  href:"https://www.youtube.com/watch?v=oyk0WPTQlhg"
},


{
  id:3,
  src:"https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYiUyMGRlc2lnbmluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  title:"The Talented Coder",
  description:"“Experience is the name everyone gives to their mistakes.” – Oscar Wilde",
  href:"https://www.youtube.com/watch?v=fxIlVbvOHyY"
},
{
  id:4,
  src:"https://media.istockphoto.com/photos/need-help-picture-id466808804?b=1&k=20&m=466808804&s=170667a&w=0&h=hpg2JCFLwcHjZiVV115LIWbSfhzsfH2kHLcDgobB_Yk=",
  title:"How To grow as a software developer",
  href:"https://www.youtube.com/watch?v=VEMyVrPC7Uw",
  description:"“Before software can be reusable it first has to be usable.” – Ralph Johnson",
},
{
  id:5,
  src:"https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYiUyMGRlc2lnbmluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  title:"Coding is never Difficult",
  href:"https://www.youtube.com/watch?v=YwHXniAUMQo",
  description:"“Optimism is an occupational hazard of programming: feedback is the treatment. “ Kent Beck",
},
{
id:6,
src:"https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYiUyMGRlc2lnbmluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
title:"Coding Motivation- Mark Zuckerberg",
description:"“ In order to be irreplaceable, one must always be different” – Coco Chanel",
href:"https://www.youtube.com/watch?v=Pwzd81hHffY"
}
]
export default class Card extends Component {

  render() {
    return (
      <Grid
      container
      spacing={2}
      direction="row"
      justify="center"
      alignItems="center"
  >
       {data.map((elem)=>(
       <Grid item xs={12} sm={12} md={4} xl={4} key={elem.id}>
	<div className="card">
    
		<img src={elem.src} alt="img"/>
		<div className="card-info">
			<h3>{elem.title}</h3>
			<p className="card-text">{elem.description}</p>
			<a href={elem.href}>Watch On Youtube</a>
		</div>
</div>
</Grid>
))}
</Grid>



        

    )
  }
}
