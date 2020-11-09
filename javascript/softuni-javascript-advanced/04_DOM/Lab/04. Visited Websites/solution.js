function solve() {
  const handleClick = (e) => {
      const messageElement = e.target.nextElementSibling;
      let currentText = messageElement.innerText;
      let currentNumberOfVisits = Number(currentText.split(' ')[1]);
      currentNumberOfVisits++;
      messageElement.innerText = 'visited ' + currentNumberOfVisits + ' times'
  };

  Array.from(document.querySelectorAll('.link-1 a')).forEach( link => link.addEventListener('click',handleClick));
}


// function solve() {
//     const anchors = Array.from(document.querySelectorAll('a'));
//     //const counters = new Array(anchors.length).fill(0);
//     const counters = anchors.map( el => +el.nextElementSibling.innerText.split(' ')[1]);
//     const container = document.querySelector('#page1 > .middled');
//
//     container.addEventListener('click', function(e) {
//        const target = e.target;
//        const parent = target.parentElement;
//        const notTargetAnchor = target.localName !== 'a';
//        const notTargetParentAnchor = (parent && parent.localName !== 'a');
//
//        if (notTargetAnchor && notTargetParentAnchor) { return; }
//
//        const targetAnchor = notTargetAnchor ? parent : target;
//        const counterIndex = anchors.indexOf(targetAnchor);
//        if (counterIndex === -1) { return; }
//        counters[counterIndex]++;
//        const paragraph = targetAnchor.nextElementSibling;
//        paragraph.innerText = `visited ${counters[counterIndex]} times`;
//     });
// }