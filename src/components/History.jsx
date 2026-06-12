function History({

history

}){

return(

<div
className="
bg-white
rounded-xl
shadow
p-6
mt-6
"
>

<h2
className="
text-2xl
font-bold
mb-5
"
>

📈 Prediction History

</h2>


{
history.length===0

?

<p>

No history

</p>

:

history.map(

(item,index)=>(

<div

key={index}

className="
border-b
py-3
"

>

<h3>

{item.city}

</h3>


<p>

Prediction:

{item.prediction}

kWh

</p>


<p>

Score:

{item.score}

</p>


</div>

)

)

}

</div>

)

}

export default History