const iphones = ["Sony Xperia", "Samsung Galaxy", "Nokia 6", "Xiaomi Mi 5s Plus", "Apple iPhone 8 Plus", "Fujitsu F-04E", "Oppo A71"];
let enterkey = 13;
function renderIphone() {
    htmls = "";
    for (let i = 0; i < iphones.length; i++) {
        htmls += `
                <tr id="tr_${i}">
                        <td>${i + 1}</td>
                        <td>${iphones[i]}</td>
                        <td>
                        <button id="edit_${i}" onclick="editIphone(${i})" class="btn btn_Edit">Edit</button>
                        <button id="save_${i}" onclick="saveIphone(${i})" class="btn done btn_add">Save</button>
                        <button id="cancel_${i}" onclick="cancelIphone(${i})" class="btn done btn_Edit">Cancel</button>
                        <button id="delete_${i}" onclick="removeIphone(${i})" class="btn btn_Delete">Delete</button>
                        </td>
                </tr>
        `
    }
    document.querySelector('.tbiphone>tbody').innerHTML = htmls;
}
function addIphone() {
    let Iphonename = document.querySelector(`#iphonename`).value;
    if (Iphonename == null || Iphonename == '') {
        alert("Iphonename is required");
        return;
    }
    iphones.push(Iphonename);
    renderIphone()
}
function removeIphone(index) {
    let confirmed = window.confirm("Are you sure to remove this Iphone?");
    if (confirmed) {
        iphones.splice(index, 1);
        renderIphone();
    }
}
function editIphone(index) {
    let tr = document.querySelector(`#tr_${index}`);
    let oldiphonename = iphones[index];
    tr.children[1].innerHTML = `<input id="iphonename_${index}"  value="${oldiphonename}" type="text" class="form-control">`;
    document.querySelector(`#edit_${index}`).classList.add('done'); 
    document.querySelector(`#save_${index}`).classList.remove('done'); 
    document.querySelector(`#cancel_${index}`).classList.remove('done'); 
}
function cancelIphone(index) {
let tr = document.querySelector(`#tr_${index}`);
let oldiphonename = iphones[index];
tr.children[1].innerHTML = oldiphonename;
document.querySelector(`#edit_${index}`).classList.remove('done');
document.querySelector(`#save_${index}`).classList.add('done');
document.querySelector(`#cancel_${index}`).classList.add('done');
}
function saveIphone(index) {
let oldiphonename = document.querySelector(`#iphonename_${index}`).value;
if (oldiphonename == null || oldiphonename == '') {
    alert("iphonename is required!")
    return;
}
 iphones[index] = oldiphonename;
cancelIphone(index);
}
function pressEnter(e) {
    if (e.keyCode == enterkey) {
        addIphone()
    }
}
function main() {
    renderIphone()
}
main();