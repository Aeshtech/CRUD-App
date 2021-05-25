var selectedRow = null
// function for perform sumbit operation.
function onFormSubmit() {
	if (validate()) {
		var formData = readFormData(); if (selectedRow == null) insertNewRecord(formData);
		else updateRecord(formData); resetForm();
	}
}

// function for to pick the data from input form.
function readFormData() {
	var formData = {};
	formData["fullName"] = document.getElementById("fullName").value; formData["empCode"] = document.getElementById("empCode").value; formData["phone"] = document.getElementById("phone").value; formData["course"] = document.getElementById("course").value; formData["semester"] = document.getElementById("semester").value; return formData;
}

// function for insert data into table body.
// an array named `formdata` passed as argument in the below func's parameter `data`.
function insertNewRecord(data) {
	var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0]; var newRow = table.insertRow(table.length); cell1 = newRow.insertCell(0); cell1.innerHTML = data.fullName; cell2 = newRow.insertCell(1); cell2.innerHTML = data.empCode; cell3 = newRow.insertCell(2); cell3.innerHTML = data.phone; cell4 = newRow.insertCell(3); cell4.innerHTML = data.course; cell5 = newRow.insertCell(4); cell5.innerHTML = data.semester; cell6 = newRow.insertCell(5); cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a> <a onClick="onDelete(this)">Delete</a>`;
}


// function to make all input field of form empty that will called after insertion and updation operation.
function resetForm() { document.getElementById("fullName").value = ""; document.getElementById("empCode").value = ""; document.getElementById("phone").value = ""; document.getElementById("course").value = ""; document.getElementById("semester").value = ""; selectedRow = null; }


// function for pick value from row of the table onclick `edit` tag and insert in the respective input fields . 
function onEdit(td) { selectedRow = td.parentElement.parentElement; document.getElementById("fullName").value = selectedRow.cells[0].innerHTML; document.getElementById("empCode").value = selectedRow.cells[1].innerHTML; document.getElementById("phone").value = selectedRow.cells[2].innerHTML; document.getElementById("course").value = selectedRow.cells[3].innerHTML; document.getElementById("semester").value = selectedRow.cells[4].innerHTML; }


// function for pickup the updated data from `form` and update it in the selectedrow that got from onedit func as global var.
function updateRecord(formData) { selectedRow.cells[0].innerHTML = formData.fullName; selectedRow.cells[1].innerHTML = formData.empCode; selectedRow.cells[2].innerHTML = formData.phone; selectedRow.cells[3].innerHTML = formData.course; selectedRow.cells[4].innerHTML = formData.semester; }

// function for delete the selected row from the table.
function onDelete(td) {
	if (confirm('Are you sure to delete this record ?')) { row = td.parentElement.parentElement; document.getElementById("employeeList").deleteRow(row.rowIndex); resetForm(); }
}

// function for validate the input data of form.
function validate() {
	if (document.getElementById("fullName").value.trim() == ""){
		isValid = false;document.getElementById("fullNameError").classList.remove("hide");
	}
	else if(document.getElementById("empCode").value.trim() == ""){
		isValid = false;document.getElementById("regnoError").classList.remove("hide");
	}
	else if(document.getElementById("course").value.trim() == ""){
		isValid = false;document.getElementById("courseError").classList.remove("hide");
	}
	else if(document.getElementById("semester").value.trim() == ""){
		isValid = false;document.getElementById("semesterError").classList.remove("hide");
	}
	else {
		isValid = true;
		var x = document.querySelectorAll(".validation-error");
		var i;
		for(i=0;i<x.length;i++){
			x[i].classList.add("hide");
		}
	} return isValid; }


// function for delete all rows from the table using for loop.
function DeleteRows() {
	if (confirm("Are you sure you want to delete all record ?")) {
		var rowCount = employeeList.rows.length;
		for (var i = rowCount - 1; i > 0; i--) {
			employeeList.deleteRow(i);
		}
	}
}


