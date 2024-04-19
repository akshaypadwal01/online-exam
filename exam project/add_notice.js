var selectedRow = null;

        function addNotice() {
            var noticeTitle = document.getElementById('noticeTitle').value;
            var description = document.getElementById('description').value;

            var noticeTable = document.getElementById('noticeList');

            // Create a new row for the notice
            var row = noticeTable.insertRow(-1);
            row.setAttribute('onclick', 'selectNotice(this)');
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
           
            cell1.textContent = noticeTitle;
            cell2.textContent = description;
           
            // Clear input fields after adding the notice
            document.getElementById('noticeTitle').value = '';
            document.getElementById('description').value = '';
        }

        function selectNotice(row) {
            // Deselect previously selected row
            if (selectedRow) {
                selectedRow.classList.remove('selected');
            }

            // Select the clicked row
            row.classList.add('selected');
            selectedRow = row;
        }

        function removeSelectedNotice() {
            if (selectedRow) {
                selectedRow.remove();
                selectedRow = null;
            }
        }