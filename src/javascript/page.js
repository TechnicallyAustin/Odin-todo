export function test(){
    const test = document.body.appendChild(document.createElement("h1"));
    test.textContent = "Welcome to Todo";
    test.setAttribute("class", "bg-primary");
    console.log(test);
}