function insert_Row() {
    let table = document.getElementById("sampleTable");
	
	let row = document.createElement("tr")
for(let i=1;i<3; i++ ) {
		let rowText = `New Cell${i}`;
        let td = document.createElement("td");
        td.textContent = rowText
        row.appendChild(td);
	}
  table.prepend(row)
}
