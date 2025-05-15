let myLeads=[]
const inputEl=document.getElementById("input-el")
const inputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
const leadsFromStorage=JSON.parse(localStorage.getItem("myLeads"))
const deleteBtn=document.getElementById("delete-btn")
const tabBtnEl=document.getElementById("tab-btn")
if(leadsFromStorage){
  myLeads=leadsFromStorage
  render(myLeads)
}
function render(leads){
  // Because Dom manipulation comes  at coast
// we improving the perfomance of our app 
let listItems=""
for (const el of leads) {
  listItems+=`<li><a target="blank"
   href=${el}>${el}</a></li>`
 

}
ulEl.innerHTML=listItems


}
inputBtn.addEventListener("click",function(){
  myLeads.push(inputEl.value)
  inputEl.value=""
  localStorage.setItem("myLeads",JSON.stringify(myLeads))
  render(myLeads)
})

deleteBtn.addEventListener("dblclick",function(){
  localStorage.clear()
  myLeads=[]
  render(myLeads)
})
tabBtnEl.addEventListener("click",function(){
  chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    console.log(tabs)
    myLeads.push(tabs[0].url)
  localStorage.setItem("myLeads",JSON.stringify(myLeads))
  render(myLeads)
  })
 
})
// to remember
 // listItems+="<li><a href='"+el+"' target='blank'>"+el+"</a></li>"
  // ulEl.innerHTML+="<li>"+el+"</li>"
  // another way to create Element instaed of innerHTML
  // 1-create Elemment
  // 2-set textContent
  // 3-append to ul
  // const li=document.createElement("li")
  // li.textContent=el
  // ulEl.append(li)

