//Fund-Online-Foot
document.body.innerHTML = `
<div id="container">
        <main id="main">
            <div id="workField">
                <div id="availableCourses">
                    <h3>Available Courses</h3>
                    <div class="courseBody">
                        <ul>
                            <li>
                                <input type="checkbox" name="js-fundamentals" value="js-fundamentals"/>
                                <label>JS Fundamentals - January</label>
                            </li>
                            <li>
                                <input type="checkbox" name="js-advanced" value="js-advanced"/>
                                <label>JS Advanced - February</label>
                            </li>
                            <li>
                                <input type="checkbox" name="js-applications" value="js-applications"/>
                                <label>JS Applications - March</label>
                            </li>
                            <li>
                                <input type="checkbox" name="js-web" value="js-web"/>
                                <label>JS Web - April</label>
                            </li>
                        </ul>
                        <div id="educationForm">
                            <label>Onsite</label>
                            <input type="radio" name="educationForm" value="onsite" checked>
                            <label>Online</label>
                            <input type="radio" name="educationForm" value="online">
                        </div>
                    </div>
                    <div class="courseFoot">
                        <button value="signMeUp">Sign me up</button>
                    </div>
                </div>
                <div id="myCourses">
                    <h3>My Courses</h3>
                    <div class="courseBody">
                        <ul></ul>
                    </div>
                    <div class="courseFoot">
                        <p>Cost: 0.00 BGN</p>
                    </div>
                </div>
            </div>
        </main>
    </div>
`;
result();

$('input[name="js-fundamentals"]').prop('checked', true); // Select Fundamentals
$($('#educationForm input[name="educationForm"]')[1]).prop('checked', 'true'); // Select Online
$($('#educationForm input[name="educationForm"]')[1]).click();

$('.courseFoot button[value="signMeUp"]').click(); // Click the button

let coursesCost = $('#myCourses .courseFoot p').text();

assert.equal(coursesCost, 'Cost: 159.00 BGN', 'The courses cost is different.');
