const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    const children = Array.from(htmlElement.children);
    if (children.length >= 1) {
        htmlElement.removeChild(children[0]);
    }

    const pTag = document.createElement("p"); 
    pTag.innerHTML = string;
    // const newElement = pTag.appendChild(document.createTextNode(string));
    htmlElement.appendChild(pTag);
};

htmlGenerator('Party Time.', partyHeader);