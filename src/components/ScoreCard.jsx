function ScoreCard({
prediction,
cloud
}){

let score=

100-
(cloud*0.8)

score=
Math.max(
0,
score
)

let status=""

if(
score>80
){

status=
"Excellent Solar Conditions"

}

else if(
score>60
){

status=
"Moderate Conditions"

}

else{

status=
"Low Solar Efficiency"

}

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

⚡ Solar Score

</h2>

<div
className="
text-center
"
>

<h1
className="
text-6xl
font-bold
"
>

{score.toFixed(0)}

</h1>

<p
className="
text-gray-500
mt-2
"
>

/100

</p>

<p
className="
mt-4
text-xl
"
>

{status}

</p>

</div>

</div>

)

}

export default ScoreCard