function insert_Row() {
	const tbody = document.querySelector("#sampleTable tbody");

    const row = document.createElement("tr");

    for (let i = 1; i <= 2; i++) {
        const td = document.createElement("td");
        td.textContent = `New Cell${i}`;
        row.appendChild(td);
    }

    tbody.prepend(row);
}
