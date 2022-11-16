async function fetchEmployees() {
    let result = await fetch("https://randomuser.me/api/?results=5", {
        dataType: 'json',
    })

    let data = await result.json();
    let innerHtmlData = `
    <h3 id="title">Employees List</h3>
    <hr id="separator">
    </div>
    `
    data.results.forEach(item => {
        innerHtmlData += `
        <div class="employees-list">
        <img src="${item.picture.large}">
        <div class="employee-info">
            <h4>${item.name.title + ' ' + item.name.first + ' ' + item.name.last}</h4>
            <span>phone: ${item.phone}</span>
            <span>${item.email}</span>
        </div>
    </div>
        `
    });
    innerHtmlData += `<button class="refresh-btn">Refresh</button>`
    const employeeCard = document.getElementById('employee-card');
    employeeCard.innerHTML = innerHtmlData;
    const refreshBtn = document.querySelector(".refresh-btn");
    refreshBtn.addEventListener("click", fetchEmployees);
}

fetchEmployees();

