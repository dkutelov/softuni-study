function solve () {
    let reportId = 0;
    let reports = [];
    let currentSelector = '#content';

    function updateHtml(sortMethod) {
        const currentReports = [...reports].sort((a,b) => {
            if (sortMethod !== 'author') {
                return a[sortMethod] - b[sortMethod];
            } else {
                return a[sortMethod].localeCompare(b[sortMethod]);
            }
            });
        const reportWrapper = document.querySelector(currentSelector);
        reportWrapper.innerHTML = null;
        let reportsHTML = '';
        currentReports.forEach(({ID, description, author, status, severity}) => {
            reportsHTML += `<div id="report_${ID}" class="report">
  <div class="body">
    <p>${description}</p>
  </div>
  <div class="title">
    <span class="author">Submitted by: ${author}</span>
    <span class="status">${status} | ${severity}</span>
  </div>
</div>`});
        reportWrapper.innerHTML = reportsHTML;
    }

    return {
        report: function(author, description, reproducible, severity) {
            reports =[...reports, {
                ID: reportId,
                author,
                description,
                reproducible,
                severity,
                status: 'Open'
            }];
            reportId++;
            updateHtml('ID');
        },
        setStatus: function(id, newStatus) {
            const currentReport = reports.find(report => report.ID === id);
            currentReport.status = newStatus;
            updateHtml('ID');
        },
        remove: function (id) {
            reports = reports.filter(report => report.ID !== id);
            updateHtml('ID');
        },
        sort: function(method) {
            updateHtml(method);
        },
        output: function(selector) {
            currentSelector = selector;
            updateHtml('ID');
        }
    }
}

let tracker = solve ();

tracker.output('#content');
tracker.report('kiwi', 'judge rip', true, 5);
