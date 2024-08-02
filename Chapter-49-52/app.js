
// Question-01       
// function info(){
// var userName=document.getElementById('name').value;
// var fatherName=document.getElementById('fatherName').value;
// var email=document.getElementById('email').value;
// var number=document.getElementById('no').value;
// document.write('Name : '+userName+'<br>')
// document.write('Fathername: '+fatherName+'<br>')
// document.write('Email: '+email+'<br>')
// document.write('Number :'+number+'<br>')
// }


//Question-02

function expandAndStrech() {
    var fullText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit aperiam atque perferendis aliquam doloremque voluptas tempora recusandae deleniti, quisquam iusto officia porro similique incidunt? Pariatur excepturi repellendus quis deleniti odio vitae id beatae distinctio aliquam exercitationem impedit quibusdam, eum maxime porro fugiat, est ex quasi, qui reprehenderit natus nesciunt ab! Quaerat, non. Debitis soluta alias hic fugit autem quibusdam id magnam atque ipsum provident? Deleniti, velit, aut numquam harum sint dicta quam recusandae at, officia cumque repellendus nam tempore dolore. Incidunt soluta sed odit adipisci, reiciendis suscipit tenetur quod fugiat illo perspiciatis impedit distinctio labore maiores provident officiis quis enim doloribus ullam, nam optio culpa exercitationem rerum quia. Saepe odit eligendi facilis esse doloribus quia quos sunt facere aut obcaecati."
    var shortText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit aperiam atque perferendis aliquam doloremque voluptas tempora recusandae deleniti, quisquam iusto officia porro similique incidunt? Pariatur excepturi repellendus quis deleniti odio vitae id beatae distinctio aliquam exercitationem impedit quibusdam, eum maxime porro fugiat, est ex quasi,"
    var paraText = document.getElementById("para");
    var button = document.getElementById("btn")
 
 
    if (paraText.innerText == shortText) {
       paraText.innerText = fullText
       button.innerText = "Read less"
 
    }
    else {
       paraText.innerText = shortText
       button.innerText = "Read More"
 
    }
}

//Question-03

// var table = document.getElementById('recordTable')

// function addRecord(){
//     var studentName = document.getElementById('stdName')
//     var studentClass = document.getElementById('stdClass')
//     var row = document.createElement('tr')
//     var nametd = document.createElement('td')
//     var classtd = document.createElement('td')
//     var edittd = document.createElement('td')
//     var deletetd = document.createElement('td')
//     var nameText = document.createTextNode(studentName.value)
//     var classText = document.createTextNode(studentClass.value)
//     var editBtn = document.createElement('button')
//     var editText = document.createTextNode("Edit")
//     editBtn.setAttribute('onclick','editRecord(this)')
//     editBtn.appendChild(editText)
//     var delBtn = document.createElement('button')
//     var delText = document.createTextNode("Delete")
//     delBtn.setAttribute('onclick','deleteRecord(this)')
//     delBtn.appendChild(delText)
    
//     nametd.appendChild(nameText)
//     classtd.appendChild(classText)
//     edittd.appendChild(editBtn)
//     deletetd.appendChild(delBtn)
//     row.appendChild(nametd)
//     row.appendChild(classtd)
//     row.appendChild(edittd)
//     row.appendChild(deletetd)
//     table.appendChild(row)

//     studentName.value = ""
//     studentClass.value = ""
// }

// function editRecord(e){
//     var val = e.parentNode.parentNode.firstChild.innerText
//     var newVal = prompt("Edit your record",val)
//     var classval = e.parentNode.parentNode.firstChild.nextSibling.innerText
//     var newClass = prompt("Edit your Class",classval)
//     e.parentNode.parentNode.firstChild.innerText = newVal
//     e.parentNode.parentNode.firstChild.nextSibling.innerText = newClass
// }

// function deleteRecord(e){
//     e.parentNode.parentNode.remove()
// }