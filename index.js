let table = document.createElement('table');

let addRow = document.createElement('button');
let addColumn = document.createElement('button');
let deleteRow = document.createElement('button');
let deleteColumn = document.createElement('button');

let n = 0;
let m = 0;

document.body.append(addRow, addColumn, deleteRow, deleteColumn, table);

function update(n, m) {
    table.innerHTML = '';

    for (let i = 0; i < n; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < m; j++) {
            let cell = document.createElement('td');
            row.append(cell);
        }
        table.append(row);
    }
}

addRow.addEventListener('click', () => { n++; update(n, m) });
addColumn.addEventListener('click', () => { m++; update(n, m) });
deleteRow.addEventListener('click', () => { n=n==0?0:n-1;  update(n, m) });
deleteColumn.addEventListener('click', () => { m=m==0?0:m-1; update(n, m) });

addRow.textContent = 'addRow';
addColumn.textContent = 'addColumn';
deleteRow.textContent = 'deleteRow';
deleteColumn.textContent = 'deleteColumn';