document.getElementById('button-education').addEventListener('click', function(){
   if(document.getElementById('content-education').innerHTML.trim()==""){
    document.getElementById('content-education').innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it tomake a type specimen book. It has survived not only five centuries, but also the leap into electronictypesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like AldusPageMaker including versions of Lorem Ipsum."
   } else {
    document.getElementById('content-education').innerHTML = ""
   }
})

document.getElementById('button-skills').addEventListener('click', function(){
    if(document.getElementById('content-skills').innerHTML.trim()==""){
     document.getElementById('content-skills').innerHTML = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    } else {
     document.getElementById('content-skills').innerHTML = ""
    }
 })